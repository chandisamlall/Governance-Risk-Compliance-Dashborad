import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/botium-toys-dashboard/',
  plugins: [react()],
})
