import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import webspatial from '@webspatial/vite-plugin'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    react(),
    webspatial({
      mode: process.env.XR_ENV === 'avp' ? 'avp' as const : undefined
    }),
    createHtmlPlugin({inject: { data: { XR_ENV: process.env.XR_ENV } }})
  ],
  server: { open: true }
})
