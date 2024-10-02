import { Layout } from '@pixi/layout'
import gsap, { Back } from 'gsap'
import { Sprite } from 'pixi.js'
import { color } from '../config/color'
import { defaultFont } from '../config/text'

export class Hint extends Layout {
  private startY!: number

  constructor(text: string, type: 'up' | 'down' = 'down') {
    const hint = type === 'down' ? Sprite.from('HintDown') : Sprite.from(`Hint`)

    super({
      content: {
        text: {
          content: text,
          styles: {
            position: type === 'down' ? 'center' : 'centerTop',
            color: color.text,
            fontSize: 45,
            fontFamily: defaultFont,
            stroke: { width: 8, color: color.disabledStroke },
            marginTop: 12
          }
        }
      },
      styles: {
        position: 'left',
        background: hint,
        marginLeft: 25,
        marginTop: 120
      }
    })
    this.startY = hint.height - 20
  }

  public async show(force = false) {
    if (this.alpha === 1) return
    gsap.killTweensOf(this)
    if (force) {
      this.alpha = 1
      return
    }
    this.alpha = 0
    this.y = this.startY + 20
    await gsap.to(this, {
      alpha: 1,
      y: '-=20',
      duration: 0.2,
      ease: Back.easeOut.config(1.7)
    })
  }

  public async hide(force = false) {
    if (this.alpha === 0) return
    gsap.killTweensOf(this)
    if (force) {
      this.alpha = 0
      return
    }
    await gsap.to(this, {
      alpha: 0,
      y: `+=20`,
      duration: 0.2,
      ease: Back.easeIn.config(1.7)
    })
    this.y = this.startY - 20
  }
}
