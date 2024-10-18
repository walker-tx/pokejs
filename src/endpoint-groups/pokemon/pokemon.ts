import { BASE_API_URL } from "../../constants.js";
import { PokeJsClientError, PokeJsHttpError } from "../../errors.js";
import type { NamedAPIResourceList, Pokemon } from "../../types/poke-api.js";
import type {
  PaginatedResult,
  PaginationInput,
  Result,
} from "../../types/utility.js";

/**
 * Fetches a Pokémon by its name or ID from the Pokémon API. Intended only for
 * internal use by the SDK.
 *
 * @param {string} nameOrId - The name or ID of the Pokémon to fetch.
 *
 * @returns {Promise<Result<Pokemon, PokeJsHttpError>>} A promise that resolves
 * to a Result containing either the fetched Pokémon data or an error.
 */
async function _fetchPokemon(
  nameOrId: string | number,
): Promise<Result<Pokemon, PokeJsHttpError>> {
  const response = await fetch(`${BASE_API_URL}/pokemon/${nameOrId}`);

  if (response.ok) return { ok: true, data: await response.json() };

  return { ok: false, error: await PokeJsHttpError.fromResponse(response) };
}

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
export async function getPokemonByName(
  name: string,
): Promise<Result<Pokemon, PokeJsClientError | PokeJsHttpError>> {
  if (name === "") {
    return {
      ok: false,
      error: new PokeJsClientError("The name of the Pokémon cannot be empty."),
    };
  }

  return _fetchPokemon(name);
}

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
export async function getPokemonById(
  id: number,
): Promise<Result<Pokemon, PokeJsHttpError>> {
  return _fetchPokemon(id);
}

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
export async function listPokemon(
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

  const url = new URL(`${BASE_API_URL}/pokemon`);

  if (limit) url.searchParams.append("limit", limit.toString());
  if (offset) url.searchParams.append("offset", offset.toString());

  const response = await fetch(url);

  if (response.ok) {
    const data: NamedAPIResourceList = await response.json();

    return {
      ok: true,
      data,
      next: data.next
        ? () => listPokemon({ limit, offset: offset + limit })
        : undefined,
      previous: data.previous
        ? () => listPokemon({ limit, offset: offset - limit })
        : undefined,
    };
  }

  return { ok: false, error: await PokeJsHttpError.fromResponse(response) };
}
