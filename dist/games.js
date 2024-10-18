// src/errors.ts
var PokeJsHttpError = class _PokeJsHttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    this.message = message;
    this.name = "PokeJSError";
  }
  /**
   * Creates a `PokeHttpError` instance from a given HTTP response.
   *
   * @param response - The HTTP response object.
   * @returns A promise that resolves to a `PokeHttpError` instance.
   */
  static async fromResponse(response) {
    return new _PokeJsHttpError(response.status, await response.text());
  }
};
var PokeJsClientError = class extends Error {
  constructor(message) {
    super(message);
    this.message = message;
  }
};

// src/constants.ts
var BASE_API_URL = "https://pokeapi.co/api/v2";

// src/endpoint-groups/games/generation.ts
async function _fetchGeneration(nameOrId) {
  const response = await fetch(`${BASE_API_URL}/generation/${nameOrId}`);
  if (response.ok) return { ok: true, data: await response.json() };
  return { ok: false, error: await PokeJsHttpError.fromResponse(response) };
}
async function getGenerationByName(name) {
  if (name === "") {
    return {
      ok: false,
      error: new PokeJsClientError(
        "The name of the generation cannot be empty."
      )
    };
  }
  return _fetchGeneration(name);
}
async function getGenerationById(id) {
  return _fetchGeneration(id);
}
async function listGenerations(paginationInput = { limit: 20, offset: 0 }) {
  const { limit, offset } = paginationInput;
  if (limit < 1) {
    return {
      ok: false,
      error: new PokeJsClientError("The limit must be at least 1")
    };
  }
  if (offset < 0) {
    return {
      ok: false,
      error: new PokeJsClientError("The offset must be at least 0")
    };
  }
  const url = new URL(`${BASE_API_URL}/generation`);
  if (limit) url.searchParams.append("limit", limit.toString());
  if (offset) url.searchParams.append("offset", offset.toString());
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return {
      ok: true,
      data,
      next: data.next ? () => listGenerations({ limit, offset: offset + limit }) : void 0,
      previous: data.previous ? () => listGenerations({ limit, offset: offset - limit }) : void 0
    };
  }
  return { ok: false, error: await PokeJsHttpError.fromResponse(response) };
}

export { getGenerationById, getGenerationByName, listGenerations };
//# sourceMappingURL=games.js.map
//# sourceMappingURL=games.js.map