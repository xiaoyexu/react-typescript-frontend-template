import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    open: true,
    proxy: {
      '/api/v1': {
        target: 'http://localhost:6666',
        changeOrigin: true,
        secure: true
      }
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  base: '/tadmin/',
  envDir: './env',
  build: {
    target: 'esnext',
    outDir: 'dist'
  }
});
