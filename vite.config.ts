import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2022', // Target moderno para eliminar polyfills innecesarios
    cssCodeSplit: true,
    minify: 'esbuild', // Cambio crítico: 'esbuild' no requiere dependencias externas como terser
    modulePreload: {
      polyfill: false
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});