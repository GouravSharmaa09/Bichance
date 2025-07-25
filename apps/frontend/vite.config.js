import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'https://bichance-production-a30f.up.railway.app',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    outDir: 'build',
    sourcemap: true
  }
}) 