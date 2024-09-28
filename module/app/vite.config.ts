import {defineConfig} from 'vite'
import {join, resolve} from 'path'
import {readFileSync, existsSync} from 'fs';
const isProduction = process.argv.includes('production')
const rootPath = resolve(__dirname)
const assetPath = join(resolve(join(rootPath, '..')), 'asset')
const certPath = join(resolve(join(rootPath, '..', '..')), '.cert')

// https://vitejs.dev/config/
let https = null
if (existsSync(certPath)) {
  https = {
    key: readFileSync(join(certPath, 'key.pem')),
    cert: readFileSync(join(certPath, 'cert.pem')),
  }
}
export default defineConfig({
  server: {
    https
  },
  plugins: [
  ],
  base: isProduction ? '/app/' : '/',
  build: {},
  resolve: {
    alias: {
      '@asset': assetPath,
      '@': rootPath,
    },
  },
})
