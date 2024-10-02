import { Layout } from '@pixi/layout'
import { FancyButton } from '@pixi/ui'
import { Text } from 'pixi.js'
import { color } from '../../config/color'
import { defaultFont } from '../../config/text'

export class Button extends Layout {
  constructor(text: string, onclick: () => void) {
    const button = new FancyButton({
      defaultView: `Button`,
      hoverView: `Button-hover`,
      pressedView: `Button-pressed`,
      disabledView: `Button-disabled`,
      text: new Text({
        text: text,
        style: {
          fill: color.text,
          fontSize: 55,
          fontFamily: defaultFont,
          stroke: { width: 8, color: color.disabledStroke }
        }
      }),
      textOffset: { y: -5 },
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
    button.onPress.connect(onclick)
    button.anchor.set(0.5)
    super({
      content: button,
      styles: {
        marginTop: 80,
        marginLeft: 180,
        marginBottom: 10
      }
    })
  }
}
