// src/errors.ts
var PokeSdkHttpError = class _PokeSdkHttpError extends Error {
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
    return new _PokeSdkHttpError(response.status, await response.text());
  }
};
var PokeSdkClientError = class extends Error {
  constructor(message) {
    super(message);
    this.message = message;
  }
};

// src/constants.ts
var BASE_API_URL = "https://pokeapi.co/api/v2";

// src/endpoints/games/generation.ts
async function _fetchGeneration(nameOrId) {
  const response = await fetch(`${BASE_API_URL}/generation/${nameOrId}`);
  if (response.ok) return [await response.json(), null];
  return [null, await PokeSdkHttpError.fromResponse(response)];
}
async function getGenerationByName(name) {
  if (name === "") {
    return [
      null,
      new PokeSdkClientError("The name of the generation cannot be empty.")
    ];
  }
  return _fetchGeneration(name);
}
async function getGenerationById(id) {
  return _fetchGeneration(id);
}
async function listGenerations() {
  const response = await fetch(`${BASE_API_URL}/generation`);
  if (response.ok) return [await response.json(), null];
  return [null, await PokeSdkHttpError.fromResponse(response)];
}

// src/endpoints/pokemon/pokemon.ts
async function _fetchPokemon(nameOrId) {
  const response = await fetch(`${BASE_API_URL}/pokemon/${nameOrId}`);
  if (response.ok) return [await response.json(), null];
  return [null, await PokeSdkHttpError.fromResponse(response)];
}
async function getPokemonByName(name) {
  if (name === "") {
    return [
      null,
      new PokeSdkClientError("The name of the Pok\xE9mon cannot be empty.")
    ];
  }
  return _fetchPokemon(name);
}
async function getPokemonById(id) {
  return _fetchPokemon(id);
}
async function listPokemon() {
  const response = await fetch(`${BASE_API_URL}/pokemon`);
  if (response.ok) return [await response.json(), null];
  return [null, await PokeSdkHttpError.fromResponse(response)];
}

// src/index.ts
var pokemon = {
  getByName: getPokemonByName,
  getById: getPokemonById
};
var games = {
  generation: {
    getByName: getGenerationByName,
    getById: getGenerationById
  }
};
var PokeJS = {
  pokemon,
  games
};
export {
  PokeJS,
  getGenerationById,
  getGenerationByName,
  getPokemonById,
  getPokemonByName,
  listGenerations,
  listPokemon
};
//# sourceMappingURL=index.js.map