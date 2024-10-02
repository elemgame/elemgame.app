import {defineConfig} from 'vite'
import {join, resolve} from 'path'
import {readFileSync, existsSync} from 'fs';

const isDevelop = !process.argv.includes('production')
const rootPath = resolve(__dirname)
const assetPath = join(resolve(join(rootPath, '..')), 'asset')
const certPath = join(resolve(join(rootPath, '..', '..')), '.cert')
import {viteStaticCopy} from 'vite-plugin-static-copy'
import replace from '@rollup/plugin-replace';

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
    replace({
      __PIXI_APP__: isDevelop ? 'globalThis.__PIXI_APP__ = pixi;' : '',
      preventAssignment: true,
    }),
    viteStaticCopy({
      targets: [
        {
          src: join(rootPath, 'node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-latin-300-normal.woff'),
          dest: 'assets',
        },
        {
          src: join(assetPath, 'background.jpg'),
          dest: 'assets',
        },
        {
          src: join(assetPath, 'icon/star.svg'),
          dest: 'assets/icon',
        },
        {
          src: join(assetPath, 'background.jpg'),
          dest: 'assets',
        },
        {
          src: join(assetPath, 'logo.svg'),
          dest: '.',
        },
      ],
    }),
  ],
  define: {
    '__APP_VERSION__': JSON.stringify(process.env.npm_package_version),
  },
  base: isDevelop ? '/' : '/app/',
  build: {},
  resolve: {
    alias: {
      '@asset': assetPath,
      '@': rootPath,
    },
  },
})
