import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@': path.resolve(__dirname,'./src'),
      '@components': path.resolve(__dirname,'./src/components'),
      '@composables': path.resolve(__dirname,'./src/composables'),
      '@helpers': path.resolve(__dirname,'./src/helpers'),
    }
  },
  plugins: [vue()],
})
