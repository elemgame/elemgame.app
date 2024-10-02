import { FancyButton } from '@pixi/ui'
import { Sprite, Text } from 'pixi.js'
import { color } from '../config/color'
import { defaultFont } from '../config/text'

export class SmallButton extends FancyButton {
  constructor(text: string, onclick: () => void, locked = false) {
    let icon

    if (locked) {
      icon = Sprite.from('LockIcon')
    }
    const textElement = locked
      ? undefined
      : new Text({
          text: text,
          style: {
            fill: color.text,
            fontSize: 75,
            fontFamily: defaultFont,
            stroke: { width: 10, color: color.disabledStroke }
          }
        })

    super({
      defaultView: `SmallButton`,
      hoverView: `SmallButton-hover`,
      pressedView: `SmallButton-pressed`,
      disabledView: `SmallButton-disabled`,
      text: textElement,
      icon,
      iconOffset: { y: -10 },
      textOffset: { y: -7 },
      padding: 11,
      animations: {
        hover: {
          props: {
            scale: { x: 1.03, y: 1.03 },
            y: 0
          },
          duration: 100
        },
        pressed: {
          props: {
            scale: { x: 0.9, y: 0.9 },
            y: 10
          },
          duration: 100
        }
      }
    })
    this.enabled = !locked
    this.scale.set(0.9)
    this.anchor.set(0.5)
    this.onPress.connect(onclick)
  }
}
