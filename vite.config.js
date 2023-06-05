// import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
export default defineConfig({
  plugins: [reactRefresh(), react()],
  build: {
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
