import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020', // Target navegadores modernos para reducir polyfills
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false // No necesitamos polyfill para modulepreload en targets modernos
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});