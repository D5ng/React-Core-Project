import { defineConfig } from "vite"
import eslint from "vite-plugin-eslint"

export default defineConfig({
  plugins: [
    eslint(), // ✅ ESLint Vite 플러그인 적용
  ],
})
