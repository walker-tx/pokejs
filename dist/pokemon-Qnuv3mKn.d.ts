import { cx as Result, b9 as Pokemon, cy as PokeJsClientError, cz as PokeJsHttpError, cA as PaginationInput, cB as PaginatedResult, a as NamedAPIResourceList } from './utility-ByCFzQPg.js';

/**
 * Fetches a Pokémon by its name.
 *
 * @param {string} name - The name of the Pokémon to fetch.
 *
 * @returns {Promise<Result<Pokemon, PokeJsClientError | PokeJsHttpError>>} A
 * promise that resolves to a Result containing either the fetched Pokémon data
 * or an error.
 *
 * @example
 * ```ts
 * const result = await getPokemonByName("pikachu");
 *
 * if (!result.ok) {
 *   console.error(`Failed to fetch Pokémon: ${result.error.message}`);
 * } else {
 *   console.log(`Fetched Pokémon: ${result.data.name}`);
 * }
 * ```
 * @see https://pokeapi.co/docs/v2#pokemon
 */
declare function getPokemonByName(name: string): Promise<Result<Pokemon, PokeJsClientError | PokeJsHttpError>>;
/**
 * Retrieves a Pokémon by its ID.
 *
 * @param id - The unique identifier of the Pokémon.
 *
 * @returns {Promise<Result<Pokemon, PokeJsHttpError>>} A promise that resolves
 * to a Result containing either the fetched Pokémon data or an error.
 *
 * @example
 * ```ts
 * const result = await getPokemonById(25);
 *
 * if (!result.ok) {
 *   console.error(`Failed to fetch Pokémon: ${result.error.message}`);
 * } else {
 *   console.log(`Fetched Pokémon: ${result.data.name}`);
 * }
 * ```
 * @see https://pokeapi.co/docs/v2#pokemon
 */
declare function getPokemonById(id: number): Promise<Result<Pokemon, PokeJsHttpError>>;
/**
 * Fetches a list of Pokémon from the API.
 *
 * @param paginationInput - An object containing pagination parameters.
 * @param paginationInput.limit - The number of items to fetch. Defaults to 20.
 * @param paginationInput.offset - The offset from the start of the list. Defaults to 0.
 *
 * @returns {Promise<PaginatedResult<NamedAPIResourceList, PokeJsHttpError |
 * PokeJsClientError>>} A promise that resolves to a PaginatedResult containing
 * the list of Pokémon resources if the request is successful, or an error if it
 * fails.
 *
 * @example
 * ### Base Usage
 * ```ts
 * const result = await listPokemon();
 *
 * if (!result.ok) {
 *  console.error(`Failed to fetch Pokémon: ${result.error.message}`);
 * } else {
 *  console.log(`Fetched ${result.data.results.length} Pokémon`);
 * }
 * ```
 *
 * @example
 * ### Pagination
 * ```ts
 * const result = await listPokemon({ limit: 10, offset: 0 });
 *
 * if (!result.ok) {
 *   console.error(`Failed to fetch Pokémon: ${result.error.message}`);
 * } else {
 *   console.log(`Fetched ${result.data.results.length} Pokémon`);
 *   if (result.next) {
 *     const nextResult = await result.next();
 *     if (!nextResult.ok) {
 *       console.error(`Failed to fetch next page of Pokémon: ${nextResult.error.message}`);
 *     } else {
 *       console.log(`Fetched next ${nextResult.data.results.length} Pokémon`);
 *     }
 *   }
 * }
 * ```
 *
 * @see https://pokeapi.co/docs/v2#pokemon
 * @see https://pokeapi.co/docs/v2#named
 */
declare function listPokemon(paginationInput?: PaginationInput): Promise<PaginatedResult<NamedAPIResourceList, PokeJsHttpError | PokeJsClientError>>;

declare const pokemon_getPokemonById: typeof getPokemonById;
declare const pokemon_getPokemonByName: typeof getPokemonByName;
declare const pokemon_listPokemon: typeof listPokemon;
declare namespace pokemon {
  export { pokemon_getPokemonById as getPokemonById, pokemon_getPokemonByName as getPokemonByName, pokemon_listPokemon as listPokemon };
}

export { getPokemonById as a, getPokemonByName as g, listPokemon as l, pokemon as p };
