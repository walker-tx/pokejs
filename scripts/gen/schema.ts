import { z, ZodTypeDef } from "zod";

export type FieldTypeSpec =
  | "integer"
  | "string"
  | "boolean"
  | {
      type: "list";
      of: FieldTypeSpec;
    }
  | {
      // This is an odd one. It shouldn't be a wrapper type, but it is...
      type: "TypeRelationsPast";
      of: string;
    }
  | {
      type: "NamedAPIResource";
      of: string;
    }
  | {
      type: "APIResource";
      of: string;
    }
  | string;

export const FieldTypeSpecSchema: z.ZodType<FieldTypeSpec> = z.union([
  // SCALAR TYPES
  z.literal("integer"),
  z.literal("string"),
  z.literal("boolean"),

  // WRAPPER TYPES
  z.object({
    type: z.literal("list"),
    of: z.lazy(() => FieldTypeSpecSchema),
  }),
  z.object({
    // This is an odd one. It shouldn't be a wrapper type, but it is...
    type: z.literal("TypeRelationsPast"),
    of: z.string(),
  }),
  z.object({
    type: z.literal("NamedAPIResource"),
    of: z.string(),
  }),
  z.object({
    type: z.literal("APIResource"),
    of: z.string(),
  }),

  // RESPONSE MODEL TYPES
  z
    .string()
    .regex(/^[A-Z][a-zA-Z]+$/, { message: "Class names must be PascalCase" }),
]);

// export type FieldTypeSpec = z.infer<typeof FieldTypeSpecSchema>;

export const ResponseFieldSpecSchema = z.object({
  name: z.string(),
  description: z.string(),
  type: FieldTypeSpecSchema,
});

export type ResponseFieldSpec = z.infer<typeof ResponseFieldSpecSchema>;

export const ResponseModelSpecSchema = z.object({
  name: z.string(),
  fields: z.array(ResponseFieldSpecSchema),
});

export type ResponseModelSpec = z.infer<typeof ResponseModelSpecSchema>;

export const EndpointSpecSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  exampleRequest: z.string().optional(),
  exampleResponse: z.any().optional(),
  responseModels: z.array(ResponseModelSpecSchema),
});

export type ResourceSpec = z.infer<typeof EndpointSpecSchema>;
