import { Layout } from '@pixi/layout'
import { MaskedFrame, ProgressBar } from '@pixi/ui'
import { Sprite } from 'pixi.js'
import { AppScreen } from '../component/basic/AppScreen'
import { CloseButton } from '../component/CloseButton'
import { Hint } from '../component/Hint'
import { color } from '../config/color'
import i18n from '../config/i18n'
import { defaultFont } from '../config/text'
import { SceneData } from '../App'
import { DataProvider } from '../data/DataProvider'

export class GameScreen extends AppScreen {
  public static assetBundles = ['game']

  private energy!: ProgressBar
  private health!: ProgressBar
  private energyModificator = 0
  private healthModificator = 0
  private tutorialMessage!: Hint
  public level = 1

  constructor(options: SceneData) {
    super('GameScreen')
    if (options?.level) {
      this.level = options.level
    }
    this.addLevel()
    this.addEnergyBar()
    this.addTutorialBlock()
  }

  private addLevel() {
    this.addContent({
      content: `${i18n.gameScreen.level} ${this.level}`,
      styles: {
        position: 'centerTop',
        color: color.text,
        fontSize: 50,
        marginTop: -2,
        fontFamily: defaultFont,
        maxWidth: '30%',
        maxHeight: '10%',
        stroke: { width: 8, color: color.disabledStroke }
      }
    })
  }

  private addEnergyBar() {
    this.energy = new ProgressBar({
      bg: 'SmallProgressBarBG',
      fill: 'SmallProgress-blue',
      fillPaddings: {
        top: 23,
        left: 90
      },
      progress: 0
    })

    this.addContent({
      content: {
        energyProgress: this.energy,
        energy: {
          content: Sprite.from('EnergyIcon'),
          styles: {
            position: 'left',
            marginLeft: -10,
            marginTop: -5
          }
        }
      },
      styles: {
        position: 'left',
        maxWidth: '30%',
        maxHeight: '10%',
        margin: 10,
        marginLeft: 20,
        scale: 0.5
      }
    })
  }

  private addTutorialBlock() {
    const avatar = new MaskedFrame({
      target: Sprite.from('user-avatar'),
      mask: 'avatar_mask',
      borderWidth: 5,
      borderColor: color.border
    })
    const user = DataProvider.getUser()
    const text = user ? `@${user.username}` : i18n.gameScreen.tutorial.hello
    this.tutorialMessage = new Hint(text, 'up')
    this.tutorialMessage.hide(true)
    setTimeout(() => {
      this.tutorialMessage.show()
    }, 1000)
    this.addContent({
      tutorialBlock: {
        content: {
          avatar,
          message: {
            content: this.tutorialMessage,
            styles: {
              height: 1,
              position: 'right',
              marginRight: -130,
              marginTop: -230
            }
          },
          closeButton: {
            content: new CloseButton(() => {
              const tutorialBlock = this.getChildByID('tutorialBlock') as Layout
              tutorialBlock.visible = false
            }),
            styles: {
              position: 'rightTop',
              marginRight: -35,
              marginTop: 25,
              scale: 0.5
            }
          }
        },
        styles: {
          marginLeft: 8,
          marginBottom: 8,
          maxWidth: '30%',
          maxHeight: '30%',
          position: 'leftBottom'
        }
      }
    })
  }

  onUpdate() {
    if (this.energy) {
      if (this.energy.progress === 100) {
        this.energyModificator = -1
      } else if (this.energy.progress === 0) {
        this.energyModificator = 1
      }
      this.energy.progress += this.energyModificator
    }

    if (this.health) {
      if (this.health.progress === 100) {
        this.healthModificator = -1
      } else if (this.health.progress === 0) {
        this.healthModificator = 1
      }
      this.health.progress += this.healthModificator
    }
  }
}
