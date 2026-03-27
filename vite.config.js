import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Relative base works on GitHub Pages project sites without hard-coding the repo name.
export default defineConfig({
  plugins: [react()],
  base: './',
})
