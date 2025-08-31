import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // IMPORTANT for project pages: must match repo name + trailing slashes as shown
  base: '/Website/',
  build: { outDir: 'dist' }
})

