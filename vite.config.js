// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: base must match your repo name for GitHub Pages project sites
export default defineConfig({
  base: '/N2bio/',
  plugins: [react()],
  build: { outDir: 'dist' }
})

