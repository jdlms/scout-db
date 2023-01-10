import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  define: {
    BASE_URL: JSON.stringify("http://localhost:5000/"),
    // JSON.stringify('my-custom-name')
  },
});
