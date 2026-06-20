import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      // The SSR bundle is wrapped by netlify/functions/server.mjs (Netlify
      // Functions v2). We keep the default Vite SSR output at dist/server
      // and let the Netlify function import it directly.
      server: {
        preset: 'node-server'
      }
    })
  ],
  build: {
    cssMinify: 'esbuild'
  }
})
