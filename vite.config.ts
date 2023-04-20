import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/empel_site/',///deletar em produção
  server: {///deletar em produção
    host: true
  }
})
