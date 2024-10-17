/**
 * Represents an HTTP error specific to the PokeAPI SDK.
 *
 * @extends Error
 *
 * @remarks
 * This error is thrown when an HTTP request to the PokeAPI fails.
 * It includes the HTTP status code and the error message from the response.
 */
export declare class PokeSdkHttpError extends Error {
    status: number;
    message: string;
    constructor(status: number, message: string);
    /**
     * Creates a `PokeHttpError` instance from a given HTTP response.
     *
     * @param response - The HTTP response object.
     * @returns A promise that resolves to a `PokeHttpError` instance.
     */
    static fromResponse(response: Response): Promise<PokeSdkHttpError>;
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
export declare class PokeSdkClientError extends Error {
    message: string;
    constructor(message: string);
}
//# sourceMappingURL=errors.d.ts.map