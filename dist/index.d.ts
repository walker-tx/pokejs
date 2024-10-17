import { getGenerationById, getGenerationByName } from "./endpoints/games/generation.js";
import { getPokemonById, getPokemonByName } from "./endpoints/pokemon/pokemon.js";
export * from "./types/poke-api.js";
export declare const PokeJS: {
    pokemon: {
        getByName: typeof getPokemonByName;
        getById: typeof getPokemonById;
    };
    games: {
        generation: {
            getByName: typeof getGenerationByName;
            getById: typeof getGenerationById;
        };
    };
};
export * from "./endpoints/games/generation.js";
export * from "./endpoints/pokemon/pokemon.js";
//# sourceMappingURL=index.d.ts.map