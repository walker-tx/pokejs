import * as pokemon from "./endpoint-groups/pokemon/pokemon.js";
import * as games from "./endpoint-groups/games/generation.js";

export * from "./types/poke-api.js";

export const PokeJS = {
  pokemon,
  games,
};
