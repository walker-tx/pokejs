// src/constants.ts
var BASE_API_URL = "https://pokeapi.co/api/v2";

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

// src/endpoint-groups/pokemon/pokemon.ts
async function _fetchPokemon(nameOrId) {
  const response = await fetch(`${BASE_API_URL}/pokemon/${nameOrId}`);
  if (response.ok) return { ok: true, data: await response.json() };
  return { ok: false, error: await PokeJsHttpError.fromResponse(response) };
}
async function getPokemonByName(name) {
  if (name === "") {
    return {
      ok: false,
      error: new PokeJsClientError("The name of the Pok\xE9mon cannot be empty.")
    };
  }
  return _fetchPokemon(name);
}
async function getPokemonById(id) {
  return _fetchPokemon(id);
}
async function listPokemon(paginationInput = { limit: 20, offset: 0 }) {
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
  const url = new URL(`${BASE_API_URL}/pokemon`);
  if (limit) url.searchParams.append("limit", limit.toString());
  if (offset) url.searchParams.append("offset", offset.toString());
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return {
      ok: true,
      data,
      next: data.next ? () => listPokemon({ limit, offset: offset + limit }) : void 0,
      previous: data.previous ? () => listPokemon({ limit, offset: offset - limit }) : void 0
    };
  }
  return { ok: false, error: await PokeJsHttpError.fromResponse(response) };
}

export { getPokemonById, getPokemonByName, listPokemon };
//# sourceMappingURL=pokemon.js.map
//# sourceMappingURL=pokemon.js.map