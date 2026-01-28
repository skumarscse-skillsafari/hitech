import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/v2/',   // ✅ because site runs inside /v2
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})