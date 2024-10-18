import { PokeSdkClientError, PokeSdkHttpError } from "../../errors.js";
import type { Generation, NamedAPIResourceList } from "../../types/poke-api.js";
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
import {
  getGenerationById,
  getGenerationByName,
  listGenerations,
} from "./generation.js";
import * as testData from "./generation.test-data.js";

describe("endpoints/games/generation", () => {
  beforeAll(() => {
    // type check the test data
    assertType<Generation>(testData.getOneResult);
    assertType<NamedAPIResourceList>(testData.listResult);
  });

  // MARK: getGenerationByName
  describe("getGenerationByName", () => {
    it("should return the correct generation data when the API call is successful", async () => {
      const [data, error] = await getGenerationByName(
        testData.getOneResult.name
      );

      // There should be data
      assert(data);

      // Check that it's typed correctly
      expectTypeOf(data).toEqualTypeOf<Generation>();

      // If data is present, error should be null
      expect(error).toBeNull();

      // Check that the data is accurate
      // That is, the data returned matches the data stored in the test data file
      expect(data).toEqual(testData.getOneResult);
    });

    it("should return an http error when the API call fails", async () => {
      const [data, error] = await getGenerationByName(
        "non-existent-generation"
      );

      // When there's an error, there should be no data
      expect(data).toBeNull();

      // Check that the error present
      assert(error);

      // The "not found" error should be a PokeHttpError
      assert(error instanceof PokeSdkHttpError);

      // Check that the error message & status are correct
      expect(error.message).toBe("Not Found");
      expect(error.status).toBe(404);
    });

    it("should return a client error when the name is an empty string", async () => {
      const [data, error] = await getGenerationByName("");

      // If there's an error, there should be no data
      expect(data).toBeNull();

      // Check that the error is an error
      assert(error);

      // Validation errors are represented as PokeSdkClientError
      assert(error instanceof PokeSdkClientError);

      // Check that the error message & status are correct
      expect(error.message).toBe("The name of the generation cannot be empty.");
    });
  });

  // MARK: getGenerationById
  describe("getGenerationById", () => {
    it("should return the correct  data when the API call is successful", async () => {
      const [data, error] = await getGenerationById(testData.getOneResult.id);

      // Check that there's data
      assert(data);

      // Check that it's typed correctly
      expectTypeOf(data).toEqualTypeOf<Generation>();

      // If the call was successful, there should be no error
      expect(error).toBeNull();

      // Check that the data is correct
      // That is, the data returned matches the data stored in the test data file
      expect(data).toEqual(testData.getOneResult);
    });

    it("should return an HTTP error when the API call fails", async () => {
      const [data, error] = await getGenerationById(0);

      // Upon error, there should be no data
      expect(data).toBeNull();

      // Check that the error is present
      assert(error);

      // The "not found" error should be a PokeHttpError
      assert(error instanceof PokeSdkHttpError);

      // Check that the error message & status are correct
      expect(error.message).toBe("Not Found");
      expect(error.status).toBe(404);
    });
  });

  // MARK: listGenerations
  describe("listGenerations", () => {
    it("should return an array of NamedAPIResourceList items pointing to generations", async () => {
      const [data, error] = await listGenerations();

      // Upon success, there should be data
      assert(data);

      // Check that the data is typed correctly
      expectTypeOf(data).toEqualTypeOf<NamedAPIResourceList>();

      // When there's data, there should be no error
      expect(error).toBeNull();

      // Check that the data is correct
      // That is, the data returned matches the data stored in the test data file
      expect(data).toEqual(testData.listResult);
    });

    it("should return an HTTP error when the API call fails", async () => {
      // Mock the fetch function to return a 404 error
      globalThis.fetch = vi.fn().mockResolvedValue({
        ok: false,
        status: 404,
        text: () => new Promise((resolve) => resolve("Mock Not Found Message")),
      });

      const [data, error] = await listGenerations();

      // Upon error, there should be no data
      expect(data).toBeNull();

      // Check that the error is present
      assert(error);

      // The "not found" error should be a PokeHttpError
      assert(error instanceof PokeSdkHttpError);

      // Check that the error message & status are correct
      expect(error.message).toBe("Mock Not Found Message");
      expect(error.status).toBe(404);
    });
  });
});
