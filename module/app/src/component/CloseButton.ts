import { FancyButton } from '@pixi/ui'
import { Counter } from './basic/Counter'

export class CloseButton extends FancyButton {
  counter!: Counter

  constructor(onclick: () => void) {
    super({
      defaultView: `SmallButton-pressed`,
      hoverView: `SmallButton-hover`,
      disabledView: `SmallButton-disabled`,
      icon: `CloseIcon`,
      iconOffset: {
        y: -10
      },
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
    this.onPress.connect(onclick)
    this.anchor.set(0.5)
    this.scale.set(0.8)
  }

  set notifications(amount: number) {
    this.counter.number.text = String(amount)
  }
}
