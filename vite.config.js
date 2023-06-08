// import fs from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import * as esbuild from "esbuild";
import svgr from "vite-plugin-svgr";
// import path from "node:path";

// js and jsx
const sourceJSPattern = /\.(js|jsx)$/;
// const rollupPlugin = (matchers) => ({
//   name: "js-in-jsx",

//   load(id) {
//     if (matchers.some((matcher) => matcher.test(id))) {
//       const file = fs.readFileSync(id, { encoding: "utf-8" });
//       return esbuild.transformSync(file, { loader: "jsx" });
//     }
//   },
// });

export default defineConfig({
  plugins: [react(), svgr({ svgrOptions: { icon: true } })],
  server: {
    host: "localhost",
    port: 3000,
    strictPort: true,
    open: true,
  },
  base: "",
  build: {
    rollupOptions: {
      plugins: [react()],
    },
  },

  optimizeDeps: {
    enable: false,
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  esbuild: {
    loader: "jsx",
    include: [sourceJSPattern],
    exclude: [],
  },
});
