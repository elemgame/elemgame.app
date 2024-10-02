import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';  // Import the React plugin
import path, { join, resolve } from 'path';

const isProduction = process.argv.includes('production');
const rootPath = resolve(__dirname);
const assetPath = path.join(resolve(join(rootPath, '..')), 'asset');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),  // Use React plugin to handle JSX
  ],
  base: isProduction ? '/app/' : '/',
  build: {},
  resolve: {
    alias: {
      '@asset': assetPath,
      '@': rootPath,
    },
  },
});
