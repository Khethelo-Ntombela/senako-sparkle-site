import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tailwindcss(), // Adds standard Tailwind processing to the build pipeline
    tanstackStart({
      server: {
        preset: 'netlify'
      }
    })
  ],
  build: {
    cssMinify: 'esbuild'
  }
})
