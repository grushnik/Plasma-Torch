import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Plasma-Torch/',   // repo name from GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
