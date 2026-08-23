import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the same build works on a GitHub Pages project path
// (/portfolio-dyki/) and on the dyki.design custom domain.
export default defineConfig({
  base: './',
  plugins: [react()],
})
