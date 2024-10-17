/**
 * Represents an HTTP error specific to the PokeAPI SDK.
 *
 * @extends Error
 *
 * @remarks
 * This error is thrown when an HTTP request to the PokeAPI fails.
 * It includes the HTTP status code and the error message from the response.
 */
export class PokeSdkHttpError extends Error {
  constructor(
    public status: number,
    public override message: string,
  ) {
    super(message);
    this.name = "PokeApiSdkError";
  }

  /**
   * Creates a `PokeHttpError` instance from a given HTTP response.
   *
   * @param response - The HTTP response object.
   * @returns A promise that resolves to a `PokeHttpError` instance.
   */
  static async fromResponse(response: Response): Promise<PokeSdkHttpError> {
    return new PokeSdkHttpError(response.status, await response.text());
  }
}

/**
 * Represents an error specific to the PokeClient or its usage.
 *
 * @extends {Error}
 *
 * @param {string} message - The error message.
 *
 * @remarks
 * This error is thrown when an error occurs in the PokeClient or its usage,
 * such as an invalid parameter.
 */
export class PokeSdkClientError extends Error {
  constructor(public override message: string) {
    super(message);
  }
}
