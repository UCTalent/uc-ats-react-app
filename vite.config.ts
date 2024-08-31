import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, "./src/components"),
      pages: path.resolve(__dirname, "./src/pages"),
      forms: path.resolve(__dirname, "./src/forms"),
      utils: path.resolve(__dirname, "./src/utils"),
      providers: path.resolve(__dirname, "./src/providers"),
      assets: path.resolve(__dirname, "./src/assets"),
      libs: path.resolve(__dirname, "./src/libs"),
      store: path.resolve(__dirname, "./src/store"),
      constants: path.resolve(__dirname, "./src/constants"),
      hooks: path.resolve(__dirname, "./src/hooks"),
    },
  },
})
