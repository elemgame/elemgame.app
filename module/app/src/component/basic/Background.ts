import { Rectangle, Sprite } from 'pixi.js'
import { Layout } from '@pixi/layout'
import { Logo } from '../Logo'

export class Background extends Layout {
  constructor(screen: Rectangle) {
    const background = Sprite.from('background')
    background.scale = Math.max(screen.width / background.width, screen.height / background.height)
    background.y = screen.height / 2 - background.height / 2
    super({
      id: 'background',
      content: {
        bg: {
          content: background,
          styles: {}
        },
        pixiLogo: Logo()
      },
      styles: {
        width: '100%',
        height: '100%'
      }
    })
  }
}
