import "vite/modulepreload-polyfill";
import { getGenerationById, getGenerationByName, } from "./endpoints/games/generation.js";
import { getPokemonById, getPokemonByName, } from "./endpoints/pokemon/pokemon.js";
export * from "./types/poke-api.js";
const pokemon = {
    getByName: getPokemonByName,
    getById: getPokemonById,
};
const games = {
    generation: {
        getByName: getGenerationByName,
        getById: getGenerationById,
    },
};
export const PokeJS = {
    pokemon,
    games,
};
export * from "./endpoints/games/generation.js";
export * from "./endpoints/pokemon/pokemon.js";
//# sourceMappingURL=index.js.map