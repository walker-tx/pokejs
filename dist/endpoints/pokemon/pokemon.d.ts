import { PokeSdkClientError, PokeSdkHttpError } from "../../errors.js";
import type { NamedAPIResourceList, Pokemon } from "../../types/poke-api.js";
/**
 * Fetches a Pokémon by its name.
 *
 * @param {string} name - The name of the Pokémon to fetch.

 * @returns {Promise<Result<Pokemon, PokeSdkClientError | PokeSdkHttpError>>} A promise that
 * resolves to a tuple containing the Pokémon data or an error.
 *
 * @example
 * ```ts
 * const [pokemon, error] = await getPokemonByName("pikachu");
 *
 * if (error) {
 *   console.error(`Failed to fetch Pokémon: ${error.message}`);
 * } else {
 *   console.log(`Fetched Pokémon: ${pokemon.name}`);
 * }
 * ```
 * @see https://pokeapi.co/docs/v2#pokemon
 */
export declare function getPokemonByName(name: string): Promise<Result<Pokemon, PokeSdkClientError | PokeSdkHttpError>>;
/**
 * Retrieves a Pokémon by its ID.
 *
 * @param id - The unique identifier of the Pokémon.
 *
 * @returns {Promise<Result<Pokemon, PokeSdkHttpError>>} A promise that resolves
 * to a tuple containing the Pokémon data or an error.
 *
 * @example
 * ```ts
 * const [pokemon, error] = await getPokemonById(25);
 *
 * if (error) {
 *   console.error(`Failed to fetch Pokémon: ${error.message}`);
 * } else {
 *   console.log(`Fetched Pokémon: ${pokemon.name}`);
 * }
 * ```
 * @see https://pokeapi.co/docs/v2#pokemon
 */
export declare function getPokemonById(id: number): Promise<Result<Pokemon, PokeSdkHttpError>>;
/**
 * Fetches a list of Pokémon from the API.
 *
 * @returns {Promise<Result<NamedAPIResourceList, PokeSdkHttpError>>} A
 * promise that resolves to a tuple where the first element is the list of
 * Pokémon resources if the request is successful, or null if it fails.
 *
 * @example
 * ```ts
 * const [pokemonList, error] = await listPokemon();
 *
 * if (error) {
 *  console.error(`Failed to fetch Pokémon: ${error.message}`);
 * } else {
 *  console.log(`Fetched ${pokemonList.length} Pokémon`);
 * }
 * ```
 *
 * @see https://pokeapi.co/docs/v2#pokemon
 * @see https://pokeapi.co/docs/v2#named
 */
export declare function listPokemon(): Promise<Result<NamedAPIResourceList, PokeSdkHttpError>>;
//# sourceMappingURL=pokemon.d.ts.map