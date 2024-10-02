import { Layout, Styles } from '@pixi/layout'
import gsap from 'gsap'
import { Ticker } from 'pixi.js'

export class AppScreen extends Layout {
  constructor(id: string, styles?: Styles) {
    super({
      id,
      styles: {
        width: '100%',
        height: '100%',
        color: 'white',
        ...styles
      }
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public onUpdate(_ticker: Ticker) {}

  public resize(_w: number, _h: number) {
    super.resize(_w, _h) // propagate resize to the layout system
  }

  public async show() {
    gsap.killTweensOf(this)
    this.alpha = 0
    await gsap.to(this, { alpha: 1, duration: 0.2, ease: 'linear' })
  }

  public async hide() {
    gsap.killTweensOf(this)
    await gsap.to(this, { alpha: 0, duration: 0.2, ease: 'linear' })
  }
}
