import {
  assert,
  assertType,
  beforeAll,
  describe,
  expect,
  expectTypeOf,
  it,
  vi,
} from "vitest";
import { PokeJsClientError, PokeJsHttpError } from "../../errors.js";
import { getPokemonById, getPokemonByName, listPokemon } from "./pokemon.js";
import * as testData from "./pokemon.test-data.js";
import {
  NamedAPIResourceList_Response,
  Pokemon,
  Pokemon_Response,
} from "../../generated.js";

describe("endpoints/pokemon/pokemon", () => {
  beforeAll(() => {
    // type check the test data
    assertType<Pokemon_Response>(testData.getOneResult);
    assertType<NamedAPIResourceList_Response>(testData.listResult);
  });

  // MARK: getPokemonByName
  describe("getPokemonByName", () => {
    it("should return the correct Pokémon data when the API call is successful", async () => {
      const result = await getPokemonByName(testData.getOneResult.name);

      // Upon success, ok should be true
      assert(result.ok === true);

      // Data should be present
      expect(result.data).toBeDefined();

      // If data is present, error should be null
      expect("error" in result).toBeFalsy();

      // Check that the data is typed correctly
      expectTypeOf(result.data).toEqualTypeOf<Pokemon>();

      // Check that the data is correct
      // That is, the data returned matches the data stored in the test data file
      expect(result.data).toEqual(testData.getOneResult);
    });

    it("should return an http error when the API call fails", async () => {
      const result = await getPokemonByName("non-existent-pokemon");

      // Upon failure, ok should be false
      assert(result.ok === false);

      // Upon failure, there should be no data
      expect("data" in result).toBeFalsy();

      // Check that there's an error
      expect(result.error).toBeDefined();

      // A "not found" error should be a PokeHttpError
      assert(result.error instanceof PokeJsHttpError);

      // Check that the error message & status are correct
      expect(result.error.message).toBe("Not Found");
      expect(result.error.status).toBe(404);
    });

    it("should return a client error when the name is an empty string", async () => {
      const result = await getPokemonByName("");

      // Upon failure, ok should be false
      assert(result.ok === false);

      // Upon failure, there should be no data
      expect("data" in result).toBeFalsy();

      // Check that there's an error
      expect(result.error).toBeDefined();

      // For validation errors, we use PokeSdkClientError
      assert(result.error instanceof PokeJsClientError);

      // Check that the error message is correct
      expect(result.error.message).toBe(
        "The name of the Pokémon cannot be empty."
      );
    });
  });

  // MARK: getPokemonById
  describe("getPokemonById", () => {
    it("should return the correct  data when the API call is successful", async () => {
      const result = await getPokemonById(testData.getOneResult.id);

      // Upon success, ok should be true
      assert(result.ok === true);

      // Check that there's data
      expect(result.data).toBeDefined();

      // Check that the data is typed correctly
      expectTypeOf(result.data).toEqualTypeOf<Pokemon>();

      // Upon success, error should be null
      expect("error" in result).toBeFalsy();

      // Check that the data is correct
      // That is, the data returned matches the data stored in the test data file
      expect(result.data).toEqual(testData.getOneResult);
    });

    it("should return an HTTP error when the API call fails", async () => {
      const result = await getPokemonById(0);

      // Upon error, ok should be false
      assert(result.ok === false);

      // Upon error, there should be no data
      expect("data" in result).toBeFalsy();

      // Check that there's an error
      expect(result.error).toBeDefined();

      // A "not found" error should be a PokeHttpError
      assert(result.error instanceof PokeJsHttpError);

      // Check that the error message & status are correct
      expect(result.error.message).toBe("Not Found");
      expect(result.error.status).toBe(404);
    });
  });

  // MARK: listPokemon
  describe("listPokemon", () => {
    it("should return the correct list of Pokémon when the API call is successful", async () => {
      const result = await listPokemon();

      // Upon success, ok should be true
      assert(result.ok === true);

      // Check that there's data
      expect(result.data).toBeDefined();

      // Check that the data is typed correctly
      expectTypeOf(result.data).toEqualTypeOf<NamedAPIResourceList_Response>();

      // From the first page, there should be a `next` function
      expect(result.next).toBeDefined();

      // From the first page, there should be NO `previous` function
      expect(result.previous).toBeUndefined();

      // Upon success, error should be null
      expect("error" in result).toBeFalsy();

      // Check that the data is correct
      // That is, the data returned matches the data stored in the test data file
      expect(result.data).toEqual(testData.listResult);
    });

    it("should handle pagination correctly", async () => {
      const limit = 50;
      const result = await listPokemon({ limit, offset: 0 });

      // Upon success, ok should be true
      assert(result.ok === true);

      // There should be the correct number of records in the page
      expect(result.data.results.length).toBe(limit);

      // From the first page, there should NOT be a `previous` function
      expect(result.previous).toBeUndefined();

      // From the first page, there should be a `next` function
      assert(result.next);

      const nextResult = await result.next();

      // Upon success, ok should be true
      assert(nextResult.ok === true);

      expect(nextResult.data.results.length).toBe(limit);

      // From the second page, there should be a `previous` function
      assert(nextResult.previous);

      const previousResult = await nextResult.previous();

      // Upon success, ok should be true
      assert(previousResult.ok === true);

      // Since we stepped forward, then back, the original data and previous
      // data should be the same
      expect(previousResult.data).toEqual(result.data);
    });

    it("should return a client error when the limit is less than 1", async () => {
      const result = await listPokemon({ limit: 0, offset: 0 });

      // Upon failure, ok should be false
      assert(result.ok === false);

      // Check that there's an error
      expect(result.error).toBeDefined();

      // For validation errors, we use PokeSdkClientError
      assert(result.error instanceof PokeJsClientError);

      // Check that the error message is correct
      expect(result.error.message).toBe("The limit must be at least 1");
    });

    it("should return a client error when the offset is negative", async () => {
      const result = await listPokemon({ limit: 1, offset: -1 });

      // Upon failure, ok should be false
      assert(result.ok === false);

      // Check that there's an error
      expect(result.error).toBeDefined();

      // For validation errors, we use PokeSdkClientError
      assert(result.error instanceof PokeJsClientError);

      // Check that the error message is correct
      expect(result.error.message).toBe("The offset must be at least 0");
    });

    it("should return an HTTP error when the API call fails", async () => {
      // Mock the fetch function to return a 404 error
      globalThis.fetch = vi.fn().mockResolvedValue({
        ok: false,
        status: 404,
        text: () => new Promise((resolve) => resolve("Mock Not Found Message")),
      });

      const result = await listPokemon();

      // Upon error, ok should be false
      assert(result.ok === false);

      // Upon error, some fields should not be defined
      expect("data" in result).toBeFalsy();
      expect("next" in result).toBeFalsy();
      expect("previous" in result).toBeFalsy();

      // Check that there's an error
      expect(result.error).toBeDefined();

      // A "not found" error should be a PokeHttpError
      assert(result.error instanceof PokeJsHttpError);

      // Check that the error message & status are correct
      expect(result.error.message).toBe("Mock Not Found Message");
      expect(result.error.status).toBe(404);
    });
  });
});
