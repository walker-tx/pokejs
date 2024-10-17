import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: "./src/index.ts",
    },
  },
  define: {
    __BASE_API_URL__: JSON.stringify("https://pokeapi.co/api/v2"),
  },
});
