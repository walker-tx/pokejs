import { BASE_API_URL } from "../../constants.js";
import { PokeSdkClientError, PokeSdkHttpError } from "../../errors.js";
import type { NamedAPIResourceList, Pokemon } from "../../types/poke-api.js";
import type { Result } from "../../types/utility.js";

/**
 * Fetches a Pokémon by its name or ID from the Pokémon API.
 * Intended only for internal use by the SDK.
 *
 * @param {string} nameOrId - The name or ID of the Pokémon to fetch.
 *
 * @returns {Promise<Result<Pokemon, PokeSdkHttpError>>} A promise that resolves
 * to a Result containing either the fetched Pokémon data or an error.
 */
async function _fetchPokemon(
  nameOrId: string | number
): Promise<Result<Pokemon, PokeSdkHttpError>> {
  const response = await fetch(`${BASE_API_URL}/pokemon/${nameOrId}`);

  if (response.ok) return [await response.json(), null];

  return [null, await PokeSdkHttpError.fromResponse(response)];
}

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
export async function getPokemonByName(
  name: string
): Promise<Result<Pokemon, PokeSdkClientError | PokeSdkHttpError>> {
  if (name === "") {
    return [
      null,
      new PokeSdkClientError("The name of the Pokémon cannot be empty."),
    ];
  }

  return _fetchPokemon(name);
}

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
export async function getPokemonById(
  id: number
): Promise<Result<Pokemon, PokeSdkHttpError>> {
  return _fetchPokemon(id);
}

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
export async function listPokemon(): Promise<
  Result<NamedAPIResourceList, PokeSdkHttpError>
> {
  const response = await fetch(`${BASE_API_URL}/pokemon`);

  if (response.ok) return [await response.json(), null];

  return [null, await PokeSdkHttpError.fromResponse(response)];
}
