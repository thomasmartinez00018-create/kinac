import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2022', // Target moderno para eliminar 36KiB de polyfills Babel
    cssCodeSplit: true,
    minify: 'terser',
    modulePreload: {
      polyfill: false
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});