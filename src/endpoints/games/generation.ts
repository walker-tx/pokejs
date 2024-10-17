import type { Generation, NamedAPIResourceList } from "../../types/poke-api.js";
import { PokeSdkClientError, PokeSdkHttpError } from "../../errors.js";
import { BASE_API_URL } from "../../constants.js";

/**
 * Fetches a Pokémon generation by its name or ID. Intended only for internal
 * use by the SDK.
 *
 * @param {string | number} nameOrId - The name or ID of the Pokémon generation
 * to fetch.
 *
 * @returns {Promise<Result<Generation, PokeSdkHttpError>>} A promise that
 * resolves to a tuple containing the generation data or an error.
 *
 * @see https://pokeapi.co/docs/v2#generation
 */
async function _fetchGeneration(
  nameOrId: string | number
): Promise<Result<Generation, PokeSdkHttpError>> {
  const response = await fetch(`${BASE_API_URL}/generation/${nameOrId}`);
  if (response.ok) return [await response.json(), null];
  return [null, await PokeSdkHttpError.fromResponse(response)];
}

/**
 * Retrieves a Pokémon generation by its name.
 *
 * @param name - The name of the generation to retrieve.
 *
 * @returns {Promise<Result<Generation, PokeSdkClientError | PokeSdkHttpError>>}
 * A promise that resolves to a tuple containing the generation data or an
 * error.
 *
 * @example
 * ```ts
 * const [generation, error] = await getGenerationByName("generation-i");
 *
 * if (error) {
 *  console.error(`Failed to fetch generation: ${error.message}`);
 * } else {
 *  console.log(`Fetched generation: ${generation.name}`);
 * }
 */
export async function getGenerationByName(
  name: string
): Promise<Result<Generation, PokeSdkClientError | PokeSdkHttpError>> {
  if (name === "") {
    return [
      null,
      new PokeSdkClientError("The name of the generation cannot be empty."),
    ];
  }

  return _fetchGeneration(name);
}

/**
 * Retrieves a Pokémon generation by its ID.
 *
 * @param id - The ID of the generation to fetch.
 *
 * @returns {Promise<Result<Generation, PokeSdkHttpError>>} A promise that
 * resolves to a tuple containing the generation data or an error.
 *
 * @example
 * ```ts
 * const [generation, error] = await getGenerationById(1);
 *
 * if (error) {
 *  console.error(`Failed to fetch generation: ${error.message}`);
 * } else {
 *  console.log(`Fetched generation: ${generation.name}`);
 * }
 * ```
 *
 * @see https://pokeapi.co/docs/v2#generation
 */
export async function getGenerationById(
  id: number
): Promise<Result<Generation, PokeSdkHttpError>> {
  return _fetchGeneration(id);
}

/**
 * Fetches a list of Pokémon generations from the API.
 *
 * @returns {Promise<Result<NamedAPIResourceList, PokeSdkHttpError>>} A
 * promise that resolves to a tuple containing the generation list or an error.
 *
 * @example
 * ```ts
 * const [generations, error] = await listGenerations();
 *
 * if (error) {
 *  console.error(`Failed to fetch generations: ${error.message}`);
 * } else {
 *  console.log(`Fetched ${generations.length} generations.`);
 * }
 * ```
 *
 * @see https://pokeapi.co/docs/v2#generation
 * @see https://pokeapi.co/docs/v2#named
 */
export async function listGenerations(): Promise<
  Result<NamedAPIResourceList, PokeSdkHttpError>
> {
  const response = await fetch(`${BASE_API_URL}/generation`);
  if (response.ok) return [await response.json(), null];
  return [null, await PokeSdkHttpError.fromResponse(response)];
}
