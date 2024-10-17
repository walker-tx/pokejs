declare global {
  declare const __BASE_API_URL__: string;

  declare namespace PokeApi {}

  type Result<TValue, TError> = [TValue, null] | [null, TError];
}

export {};
