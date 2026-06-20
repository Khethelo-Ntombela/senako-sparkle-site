import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    // The SSR bundle (dist/server/server.js) is wrapped for Netlify by
    // netlify/functions/server.mjs (Netlify Functions v2). No deploy preset
    // is needed on the TanStack plugin itself — Netlify routes all requests
    // through that function and serves dist/client as static assets.
    tanstackStart()
  ],
  build: {
    cssMinify: 'esbuild'
  }
})
