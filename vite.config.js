import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Plain static site: React for the components, Tailwind for the styling.
// No server, no backend — `npm run build` emits a folder of static files.
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
