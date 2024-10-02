import { Container, Sprite, Text } from 'pixi.js'
import { color } from '../../config/color'
import { defaultFont } from '../../config/text'

export class Counter extends Container {
  number: Text

  constructor(text: number) {
    super()
    const bg = Sprite.from(`Radio-hover`)
    bg.anchor.set(0.5)
    this.number = new Text({
      text: String(text),
      style: {
        fill: color.text,
        fontSize: 25,
        fontFamily: defaultFont,
        stroke: { width: 5, color: color.hoverStroke }
      }
    })
    this.number.anchor.set(0.5)
    this.addChild(bg, this.number)
  }
}
