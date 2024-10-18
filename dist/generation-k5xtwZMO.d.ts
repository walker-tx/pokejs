import { cx as Result, Q as Generation, cy as PokeJsClientError, cz as PokeJsHttpError, cA as PaginationInput, cB as PaginatedResult, a as NamedAPIResourceList } from './utility-ByCFzQPg.js';

/**
 * Retrieves a Pokémon generation by its name.
 *
 * @param name - The name of the generation to retrieve.
 *
 * @returns {Promise<Result<Generation, PokeJsClientError | PokeJsHttpError>>} A
 * promise that resolves to a tuple containing the generation data or an error.
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
declare function getGenerationByName(name: string): Promise<Result<Generation, PokeJsClientError | PokeJsHttpError>>;
/**
 * Retrieves a Pokémon generation by its ID.
 *
 * @param id - The ID of the generation to fetch.
 *
 * @returns {Promise<Result<Generation, PokeJsHttpError>>} A promise that
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
declare function getGenerationById(id: number): Promise<Result<Generation, PokeJsHttpError>>;
/**
 * Fetches a paginated list of Pokémon generations from the API.
 *
 * @param paginationInput - An object containing pagination parameters.
 * @param paginationInput.limit - The number of items to fetch. Defaults to 20.
 * @param paginationInput.offset - The offset from the start of the list.
 * Defaults to 0.
 *
 * @returns A promise that resolves to a `PaginatedResult` containing a list of
 * `NamedAPIResourceList` or a `PokeSdkHttpError`.
 *
 * @example
 * ```typescript
 * const generations = await listGenerations({ limit: 10, offset: 0 });
 * if (generations.ok) {
 *   console.log(generations.data);
 * } else {
 *   console.error(generations.error);
 * }
 * ```
 *
 * @example
 * ### Pagination
 * ```ts
 * const result = await listGenerations({ limit: 10, offset: 0 });
 *
 * if (!result.ok) {
 *   console.error(`Failed to fetch generations: ${result.error.message}`);
 * } else {
 *   console.log(`Fetched ${result.data.results.length} generations`);
 *   if (result.next) {
 *     const nextResult = await result.next();
 *     if (!nextResult.ok) {
 *       console.error(`Failed to fetch next page of generations: ${nextResult.error.message}`);
 *     } else {
 *       console.log(`Fetched next ${nextResult.data.results.length} generations`);
 *     }
 *   }
 * }
 * ```
 *
 * @see https://pokeapi.co/docs/v2#generation
 * @see https://pokeapi.co/docs/v2#named
 */
declare function listGenerations(paginationInput?: PaginationInput): Promise<PaginatedResult<NamedAPIResourceList, PokeJsHttpError | PokeJsClientError>>;

declare const games_getGenerationById: typeof getGenerationById;
declare const games_getGenerationByName: typeof getGenerationByName;
declare const games_listGenerations: typeof listGenerations;
declare namespace games {
  export { games_getGenerationById as getGenerationById, games_getGenerationByName as getGenerationByName, games_listGenerations as listGenerations };
}

export { getGenerationByName as a, getGenerationById as b, games as g, listGenerations as l };
