import { LayoutOptions } from '@pixi/layout'

export const Logo = (): LayoutOptions => ({
  content: {
    poweredText: {
      content: __APP_VERSION__,
      styles: {
        position: 'leftTop',
        color: 'white',
        fontSize: 10
      }
    }
  },
  styles: {
    position: 'leftBottom'
  }
})
