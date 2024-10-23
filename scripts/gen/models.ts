import {
  FieldTypeSpec,
  ResourceSpec,
  ResponseFieldSpec,
  ResponseModelSpec,
} from "./schema";

export class ResourceGroup {
  resources: Resource[];

  constructor(
    public name: string,
    endpoints: ResourceSpec[]
  ) {
    this.resources = endpoints.map((endpoint) => new Resource(endpoint));
  }

  render(): string {
    const groupHeader = [
      "/**",
      ` * MARK: ${this.name.toUpperCase()} GROUP`,
      " */",
    ].join("\n");

    return [
      groupHeader,
      ...this.resources.map((endpoint) => endpoint.render()),
    ].join("\n\n");
  }
}

export class Resource {
  name: string;
  description: string;
  exampleRequest: string;
  exampleResponse: object;
  responseModels: ResponseModel[];
  isEndpoint: boolean;

  constructor(spec: ResourceSpec) {
    this.name = spec.name;
    this.description = spec.description ?? "No description provided.";
    this.exampleRequest = spec.exampleRequest ?? "No example request provided.";
    this.exampleResponse = spec.exampleResponse;
    this.responseModels = spec.responseModels.map(
      (modelSpec) => new ResponseModel(modelSpec)
    );
    this.isEndpoint = Boolean(spec.exampleRequest);
  }

  render(): string {
    return this.responseModels.map((model) => model.render()).join("\n\n");
  }
}

class NamedAPIResourceResponseModel implements ResponseModel {
  name: string;
  fields: ResponseField[];

  render(): string {
    return [
      "class NamedAPIResourceWrapper<T> {",
      "  name: string;",
      "  url: string;",
      "",
      "  async load(): Promise<T> {",
      "    const response = await fetch(this.url);",
      "    return response.json();",
      "  }",
      "}",
    ].join("\n");
  }
}

class APIResourceResponseModel implements ResponseModel {
  name: string;
  fields: ResponseField[];

  render(): string {
    return [
      "class APIResourceWrapper<T> {",
      "  url: string;",
      "",
      "  async load(): Promise<T> {",
      "    const response = await fetch(this.url);",
      "    return response.json();",
      "  }",
      "}",
    ].join("\n");
  }
}

class ResponseModel {
  name: string;
  fields: ResponseField[];

  constructor(spec: ResponseModelSpec) {
    if (spec.name === "NamedAPIResource") {
      return new NamedAPIResourceResponseModel();
    }

    if (spec.name === "APIResource") {
      return new APIResourceResponseModel();
    }

    this.name = spec.name;
    this.fields = spec.fields.map((fieldSpec) => new ResponseField(fieldSpec));
  }

  render(): string {
    return [
      `class ${this.name}ResponseModel {`,
      ...this.fields.map((field) => field.render().replaceAll(/^/gm, "  ")),
      `}`,
    ].join("\n");
  }
}

class ResponseField {
  name: string;
  description: string;
  type: ResponseFieldType;

  constructor(spec: ResponseFieldSpec) {
    this.name = spec.name;
    this.description = spec.description;
    this.type = new ResponseFieldType(spec.type);
  }

  render(): string {
    return [
      `/** ${this.description} */`,
      `${this.name}: ${this.type.render()};`,
    ].join("\n");
  }
}

class ResponseFieldType {
  constructor(public typeSpec: FieldTypeSpec) {}

  getTypeString() {
    // SCALAR TYPES
    // `integer` is the only scalar type that needs to be converted
    if (this.typeSpec === "integer") return "number";
    if (this.typeSpec === "string") return "string";
    if (this.typeSpec === "boolean") return "boolean";

    // RESPONSE MODEL TYPES
    if (typeof this.typeSpec === "string")
      return this.typeSpec + "ResponseModel";

    // WRAPPER TYPES
    const { type: fieldType, of } = this.typeSpec;

    // This is an odd one. It shouldn't be a wrapper type, but it is...
    if (fieldType === "TypeRelationsPast") {
      return `TypeRelationsPastResponseModel`;
    }

    const nestedType = new ResponseFieldType(of).render();

    if (fieldType === "list") {
      return `Array<${nestedType}>`;
    }

    if (fieldType === "NamedAPIResource") {
      return `NamedAPIResourceWrapper<${nestedType}>`;
    }

    if (fieldType === "APIResource") {
      return `APIResourceWrapper<${nestedType}>`;
    }

    throw new Error(`Unknown field type: ${fieldType}`);
  }

  render(): string {
    return `${this.getTypeString()}`;
  }
}
