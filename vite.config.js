// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Plasma-Torch/',  // ✅ use new repo name
  plugins: [react()],
  build: { outDir: 'dist' }
})

