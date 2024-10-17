import type { Generation, NamedAPIResourceList } from "../../types/poke-api.js";
import { PokeSdkClientError, PokeSdkHttpError } from "../../errors.js";
import type { Result } from "../../types/utility.js";
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
export declare function getGenerationByName(name: string): Promise<Result<Generation, PokeSdkClientError | PokeSdkHttpError>>;
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
export declare function getGenerationById(id: number): Promise<Result<Generation, PokeSdkHttpError>>;
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
export declare function listGenerations(): Promise<Result<NamedAPIResourceList, PokeSdkHttpError>>;
//# sourceMappingURL=generation.d.ts.map