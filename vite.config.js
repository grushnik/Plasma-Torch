// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Plasma-Torch/',   // ← repo name must match exactly (case-sensitive)
  plugins: [react()],
  build: { outDir: 'dist' }
})

