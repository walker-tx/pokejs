import type { Generation, NamedAPIResourceList } from "../../types/poke-api.js";
import { PokeJsClientError, PokeJsHttpError } from "../../errors.js";
import { BASE_API_URL } from "../../constants.js";
import type {
  PaginatedResult,
  PaginationInput,
  Result,
} from "../../types/utility.js";

/**
 * Fetches a Pokémon generation by its name or ID. Intended only for internal
 * use by the SDK.
 *
 * @param {string | number} nameOrId - The name or ID of the Pokémon generation
 * to fetch.
 *
 * @returns {Promise<Result<Generation, PokeJsHttpError>>} A promise that
 * resolves to an object containing either the generation data or an error.
 *
 * @see https://pokeapi.co/docs/v2#generation
 */
async function _fetchGeneration(
  nameOrId: string | number,
): Promise<Result<Generation, PokeJsHttpError>> {
  const response = await fetch(`${BASE_API_URL}/generation/${nameOrId}`);
  if (response.ok) return { ok: true, data: await response.json() };
  return { ok: false, error: await PokeJsHttpError.fromResponse(response) };
}

/**
 * Retrieves a Pokémon generation by its name.
 *
 * @param name - The name of the generation to retrieve.
 *
 * @returns {Promise<Result<Generation, PokeJsClientError | PokeJsHttpError>>} A
 * promise that resolves to an object containing either the generation data or an error.
 *
 * @example
 * ```ts
 * const result = await getGenerationByName("generation-i");
 *
 * if (!result.ok) {
 *  console.error(`Failed to fetch generation: ${result.error.message}`);
 * } else {
 *  console.log(`Fetched generation: ${result.data.name}`);
 * }
 * ```
 */
export async function getGenerationByName(
  name: string,
): Promise<Result<Generation, PokeJsClientError | PokeJsHttpError>> {
  if (name === "") {
    return {
      ok: false,
      error: new PokeJsClientError(
        "The name of the generation cannot be empty.",
      ),
    };
  }

  return _fetchGeneration(name);
}

/**
 * Retrieves a Pokémon generation by its ID.
 *
 * @param id - The ID of the generation to fetch.
 *
 * @returns {Promise<Result<Generation, PokeJsHttpError>>} A promise that
 * resolves to an object containing either the generation data or an error.
 *
 * @example
 * ```ts
 * const result = await getGenerationById(1);
 *
 * if (!result.ok) {
 *  console.error(`Failed to fetch generation: ${result.error.message}`);
 * } else {
 *  console.log(`Fetched generation: ${result.data.name}`);
 * }
 * ```
 *
 * @see https://pokeapi.co/docs/v2#generation
 */
export async function getGenerationById(
  id: number,
): Promise<Result<Generation, PokeJsHttpError>> {
  return _fetchGeneration(id);
}

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
export async function listGenerations(
  paginationInput: PaginationInput = { limit: 20, offset: 0 },
): Promise<
  PaginatedResult<NamedAPIResourceList, PokeJsHttpError | PokeJsClientError>
> {
  const { limit, offset } = paginationInput;

  if (limit < 1) {
    return {
      ok: false,
      error: new PokeJsClientError("The limit must be at least 1"),
    };
  }

  if (offset < 0) {
    return {
      ok: false,
      error: new PokeJsClientError("The offset must be at least 0"),
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
      next: data.next
        ? () => listGenerations({ limit, offset: offset + limit })
        : undefined,
      previous: data.previous
        ? () => listGenerations({ limit, offset: offset - limit })
        : undefined,
    };
  }
  return { ok: false, error: await PokeJsHttpError.fromResponse(response) };
}
