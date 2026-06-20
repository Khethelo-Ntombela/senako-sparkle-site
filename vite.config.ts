import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tanstackStart({
      server: {
        preset: 'netlify'
      }
    })
  ],
  // This forces Vite to use esbuild instead of lightningcss, 
  // bypassing the syntax errors completely
  build: {
    cssMinify: 'esbuild'
  }
})
