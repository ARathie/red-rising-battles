import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// '/' for local dev; the Pages workflow builds with VITE_BASE=/red-rising-battles/
const base = process.env.VITE_BASE ?? '/'

export default defineConfig({
  base,
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon-180.png'],
      manifest: {
        name: 'Red Rising Battles',
        short_name: 'RR Battles',
        description:
          "Interactive tactical replays of the great battles of Pierce Brown's Red Rising saga — scrub the timeline, follow characters, watch the battle log unfold.",
        display: 'standalone',
        background_color: '#0d1117',
        theme_color: '#0d1117',
        start_url: base,
        scope: base,
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icon-512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
    }),
  ],
})
