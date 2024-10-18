/**
 * Represents an HTTP error specific to PokéJS.
 *
 * @extends Error
 *
 * @remarks
 * This error is thrown when an HTTP request to PokeAPI fails.
 * It includes the HTTP status code and the error message from the response.
 */
export class PokeJsHttpError extends Error {
  constructor(
    public status: number,
    public override message: string
  ) {
    super(message);
    this.name = "PokeJSError";
  }

  /**
   * Creates a `PokeHttpError` instance from a given HTTP response.
   *
   * @param response - The HTTP response object.
   * @returns A promise that resolves to a `PokeHttpError` instance.
   */
  static async fromResponse(response: Response): Promise<PokeJsHttpError> {
    return new PokeJsHttpError(response.status, await response.text());
  }
}

/**
 * Represents an error specific to PokéJS or its usage.
 *
 * @extends {Error}
 *
 * @param {string} message - The error message.
 *
 * @remarks
 * This error is thrown when an error occurs in PokéJS or its usage,
 * such as an invalid parameter.
 */
export class PokeJsClientError extends Error {
  constructor(public override message: string) {
    super(message);
  }
}
