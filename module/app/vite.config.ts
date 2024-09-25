import { defineConfig } from 'vite'
import path, { join, resolve } from 'path'

const isProduction = process.argv.includes('production')
const rootPath = resolve(__dirname)
const assetPath = path.join(resolve(join(rootPath, '..')), 'asset')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
  ],
  base: isProduction ? '/app/' : '/',
  build: {
  },
  resolve: {
    alias: {
      '@asset': assetPath,
      '@': rootPath,
    },
  },
})
