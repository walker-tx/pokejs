import { PokeSdkClientError, PokeSdkHttpError } from "../../errors.js";
import type { NamedAPIResourceList, Pokemon } from "../../types/poke-api.js";
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
import { getPokemonById, getPokemonByName, listPokemon } from "./pokemon.js";
import * as testData from "./pokemon.test-data.js";

describe("endpoints/pokemon/pokemon", () => {
  beforeAll(() => {
    // type check the test data
    assertType<Pokemon>(testData.getOneResult);
    assertType<NamedAPIResourceList>(testData.listResult);
  });

  // MARK: getPokemonByName
  describe("getPokemonByName", () => {
    it("should return the correct Pokémon data when the API call is successful", async () => {
      const [data, error] = await getPokemonByName(testData.getOneResult.name);

      // Upon success, there should be data
      assert(data);

      // If data is present, error should be null
      expect(error).toBeNull();

      // Check that the data is typed correctly
      expectTypeOf(data).toEqualTypeOf<Pokemon>();

      // Check that the data is correct
      // That is, the data returned matches the data stored in the test data file
      expect(data).toEqual(testData.getOneResult);
    });

    it("should return an http error when the API call fails", async () => {
      const [data, error] = await getPokemonByName("non-existent-pokemon");

      // Upon failure, there should be no data
      expect(data).toBeNull();

      // Check that there's an error
      assert(error);

      // A "not found" error should be a PokeHttpError
      assert(error instanceof PokeSdkHttpError);

      // Check that the error message & status are correct
      expect(error.message).toBe("Not Found");
      expect(error.status).toBe(404);
    });

    it("should return a client error when the name is an empty string", async () => {
      const [data, error] = await getPokemonByName("");

      // Upon failure, there should be no data
      expect(data).toBeNull();

      // Check that there's an error
      assert(error);

      // For validation errors, we use PokeSdkClientError
      assert(error instanceof PokeSdkClientError);

      // Check that the error message is correct
      expect(error.message).toBe("The name of the Pokémon cannot be empty.");
    });
  });

  // MARK: getPokemonById
  describe("getPokemonById", () => {
    it("should return the correct  data when the API call is successful", async () => {
      const [data, error] = await getPokemonById(testData.getOneResult.id);

      // Check that there's data
      assert(data);

      // Check that the data is typed correctly
      expectTypeOf(data).toEqualTypeOf<Pokemon>();

      // Upon success, error should be null
      expect(error).toBeNull();

      // Check that the data is correct
      // That is, the data returned matches the data stored in the test data file
      expect(data).toEqual(testData.getOneResult);
    });

    it("should return an HTTP error when the API call fails", async () => {
      const [data, error] = await getPokemonById(0);

      // Upon error, there should be no data
      expect(data).toBeNull();

      // Check that there's an error
      assert(error);

      // A "not found" error should be a PokeHttpError
      assert(error instanceof PokeSdkHttpError);

      // Check that the error message & status are correct
      expect(error.message).toBe("Not Found");
      expect(error.status).toBe(404);
    });
  });

  // MARK: listPokemon
  describe("listPokemon", () => {
    it("should return the correct list of Pokémon when the API call is successful", async () => {
      const [data, error] = await listPokemon();

      // Check that there's data
      assert(data);

      // Check that the data is typed correctly
      expectTypeOf(data).toEqualTypeOf<NamedAPIResourceList>();

      // Upon success, error should be null
      expect(error).toBeNull();

      // Check that the data is correct
      // That is, the data returned matches the data stored in the test data file
      expect(data).toEqual(testData.listResult);
    });

    it("should return an HTTP error when the API call fails", async () => {
      // Mock the fetch function to return a 404 error
      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
        status: 404,
        text: () => new Promise((resolve) => resolve("Mock Not Found Message")),
      });

      const [data, error] = await listPokemon();

      // Upon error, there should be no data
      expect(data).toBeNull();

      // Check that there's an error
      assert(error);

      // A "not found" error should be a PokeHttpError
      assert(error instanceof PokeSdkHttpError);

      // Check that the error message & status are correct
      expect(error.message).toBe("Mock Not Found Message");
      expect(error.status).toBe(404);
    });
  });
});
