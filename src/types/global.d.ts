declare global {
  declare namespace PokeApi {}

  type Result<TValue, TError> = [TValue, null] | [null, TError];
}

export {};
