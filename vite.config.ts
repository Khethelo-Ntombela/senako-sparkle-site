import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tanstackStart({
      // This tells the engine to output for Netlify, bypassing Cloudflare presets entirely
      server: {
        preset: 'netlify'
      }
    })
  ]
})
