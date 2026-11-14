import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub project-site preview URL: https://tabassumunnisa19.github.io/mysana-clinic-website/
  base: '/mysana-clinic-website/',
})
