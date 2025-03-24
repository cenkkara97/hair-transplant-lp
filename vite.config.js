import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path-browserify";
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(import.meta.url, "./src"),
        },
    },
});
