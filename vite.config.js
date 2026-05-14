import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["@vercel/analytics"],
  },
  ssr: {
    // This prevents Vite from trying to transform the peer deps incorrectly
    noExternal: ["@vercel/analytics", "next"],
  },
});
