import { Layout } from '@pixi/layout'
import { Sprite } from 'pixi.js'
import { color } from '../config/color'
import i18n from '../config/i18n'
import { defaultFont } from '../config/text'

export class LoadingSpinner extends Layout {
  constructor() {
    const spinnerSprite = Sprite.from('spinner')
    spinnerSprite.anchor.set(0.5)

    super({
      id: 'LoadingSpinner',
      content: {
        spinner: {
          content: spinnerSprite,
          styles: {
            marginLeft: spinnerSprite.width / 2,
            marginTop: spinnerSprite.height / 2,
            marginRight: -spinnerSprite.width / 2
          }
        },
        loadingText: {
          content: i18n.loadingScreen.loading,
          styles: {
            position: 'center',
            color: color.text,
            marginTop: 100,
            fontFamily: defaultFont
          }
        }
      },
      styles: {
        position: 'center',
        maxHeight: '50%',
        maxWidth: '60%'
      }
    })
  }
}
