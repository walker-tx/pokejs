export type Result<TValue, TError> =
  | { ok: false; error: TError }
  | { ok: true; data: TValue };

export type PaginatedResult<TValue, TError> =
  | { ok: false; error: TError }
  | {
      ok: true;
      data: TValue;
      next?: () => Promise<PaginatedResult<TValue, TError>>;
      previous?: () => Promise<PaginatedResult<TValue, TError>>;
    };

export type PaginationInput = {
  limit: number;
  offset: number;
};
