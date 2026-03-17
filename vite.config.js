import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ REPLACE 'your-repo-name' with your actual GitHub repository name
// Example: if your repo is github.com/username/my-portfolio, set base: '/my-portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/estelaportfolio/',
})
