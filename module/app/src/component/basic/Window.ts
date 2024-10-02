import { Layout, Styles } from '@pixi/layout'
import gsap, { Back } from 'gsap'
import { Sprite } from 'pixi.js'
import { color } from '../../config/color'
import { defaultFont } from '../../config/text'

export class Window extends Layout {
  constructor(options: { title: string; styles?: Styles; ribbonStyles?: Styles }) {
    super({
      id: `Window-${options.title}`,
      content: {
        ribbon: {
          content: {
            id: 'title',
            content: options.title,
            styles: {
              color: 'white',
              fontFamily: defaultFont,
              fontSize: 70,
              position: 'center',
              marginTop: -6,
              stroke: { width: 8, color: color.disabledStroke },
              maxWidth: '83%',
              maxHeight: '70%',
              overflow: 'hidden'
            }
          },
          styles: {
            background: Sprite.from('Ribbon'),
            display: 'inline',
            position: 'topCenter',
            marginTop: -53,
            zIndex: 100,
            ...options.ribbonStyles
          }
        }
      },
      styles: {
        background: Sprite.from('Window'),
        maxWidth: '100%',
        maxHeight: '100%',
        position: 'center',
        marginTop: 20,
        marginBottom: 100,
        ...options.styles
      }
    })
    this.createContent()
  }

  public createContent() {}

  public async show(force = false) {
    if (this.alpha === 1) return
    gsap.killTweensOf(this)
    if (force) {
      this.alpha = 1
      this.visible = true
      return
    }
    this.alpha = 0
    this.y += 100
    this.visible = true
    await gsap.to(this, {
      alpha: 1,
      y: '-=100',
      duration: 0.2,
      ease: Back.easeOut.config(1.7)
    })
  }

  public async hide(force = false) {
    if (this.alpha === 0) return
    gsap.killTweensOf(this)
    if (force) {
      this.alpha = 0
      this.visible = false
      return
    }
    await gsap.to(this, {
      alpha: 0,
      y: `+=100`,
      duration: 0.2,
      ease: Back.easeIn.config(1.7)
    })
    this.visible = false
    this.y -= 100
  }
}
