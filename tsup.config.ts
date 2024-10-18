import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    pokemon: "src/endpoint-groups/pokemon/pokemon.ts",
    games: "src/endpoint-groups/games/generation.ts",
  },
  outDir: "dist",
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ["esm"],
  treeshake: true,
});
