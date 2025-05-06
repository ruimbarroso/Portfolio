import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), visualizer()],
  build: {
    outDir: path.resolve(__dirname, '../docs'), // Adjust this to your parent folder
    emptyOutDir: true
  }
})


