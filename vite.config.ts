import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Increase the warning limit for large output chunks.
    // Adjust this value if you see `chunkSizeWarningLimit` warnings during builds.
    chunkSizeWarningLimit: 2000, // in KB (default is 500)
  },
})
