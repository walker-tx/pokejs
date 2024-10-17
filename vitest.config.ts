import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    __BASE_API_URL__: JSON.stringify("https://pokeapi.co/api/v2"),
  },
});
