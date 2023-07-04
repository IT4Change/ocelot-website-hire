import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ocelot-website-hire/',
  build: {
    rollupOptions: {
      input: './src/main.js' // Passe den Einstiegspunkt entsprechend an
    }
  },
  plugins: [vue()],
})
