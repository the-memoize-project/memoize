import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@directive": resolve(__dirname, "packages/directive"),
    },
  },
  test: {
    coverage: {
      include: ["packages/**/*.{js,ts}"],
      exclude: ["{src,packages}/**/index.{js,ts}"],
      reporter: ["text", "lcov", "html"],
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
    environment: "happy-dom",
    setupFiles: resolve(__dirname, "happydom.js"),
  },
});
