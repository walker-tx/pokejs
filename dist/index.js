var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/endpoint-groups/pokemon/pokemon.ts
var pokemon_exports = {};
__export(pokemon_exports, {
  getPokemonById: () => getPokemonById,
  getPokemonByName: () => getPokemonByName,
  listPokemon: () => listPokemon
});

// src/constants.ts
var BASE_API_URL = "https://pokeapi.co/api/v2";

// src/errors.ts
var PokeJsHttpError = class _PokeJsHttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    this.message = message;
    this.name = "PokeApiSdkError";
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

// src/endpoint-groups/games/generation.ts
var generation_exports = {};
__export(generation_exports, {
  getGenerationById: () => getGenerationById,
  getGenerationByName: () => getGenerationByName,
  listGenerations: () => listGenerations
});
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

// src/index.ts
var PokeJS = {
  pokemon: pokemon_exports,
  games: generation_exports
};

export { PokeJS };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map