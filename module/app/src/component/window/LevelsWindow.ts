import { ScrollBox } from '@pixi/ui'
import { Container, Sprite } from 'pixi.js'
import { color } from '../../config/color'
import i18n from '../../config/i18n'
import { app } from '../../App'
import { GameScreen } from '../../screen/GameScreen'
import { Window } from '../basic/Window'
import { SmallButton } from '../SmallButton'

export class LevelsWindow extends Window {
  constructor() {
    super({
      title: i18n.titleScreen.title,
      styles: {
        maxWidth: '80%',
        marginTop: -30,
        marginBottom: 350
      }
    })
  }

  override createContent() {
    this.createLevelButtons()
    this.createNavigationButtons()
  }

  private createLevelButtons() {
    this.addContent({
      levels: {
        content: new ScrollBox({
          width: 800,
          height: 558,
          items: this.levels,
          radius: 70,
          horPadding: 7,
          elementsMargin: 6,
          background: color.levelBG
        }),
        styles: {
          position: 'center',
          width: '85%',
          height: '70%',
          marginTop: -20,
          zIndex: -10
        }
      }
    })
  }

  private get levels(): Container[] {
    const levels: Container[] = []
    const levelsAmount = 50
    const openLevels = 13

    for (let i = 0; i < levelsAmount; i += 1) {
      const levelBlock = new Container()
      levelBlock.addChild(Sprite.from('SmallButton-substrate'))
      const locked = openLevels < i + 1
      const button = new SmallButton(
        `${i + 1}`,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        () => app.showScreen(GameScreen, { level: i + 1 }),
        locked
      )
      button.x = levelBlock.width / 2
      button.y = levelBlock.height / 2 - 15
      levelBlock.addChild(button) // FIXME Deprecation Warning: addChild: Only Containers will be allowed to add children in v8.0.0Deprecated since v8.0.0
      levelBlock.scale.set(0.87)
      const holes: Container[] = []
      for (let i = 0; i < 3; i++) {
        const hole = new Container()
        const holeSprite = Sprite.from('Radio-bg')
        holeSprite.anchor.set(0.5)
        hole.addChild(holeSprite)
        if (i === 0) {
          hole.x = 40
          hole.y = levelBlock.height - 5
        }
        if (i === 1) {
          hole.x = levelBlock.width / 2 + 10
          hole.y = levelBlock.height + 5
        }
        if (i === 2) {
          hole.x = levelBlock.width - 20
          hole.y = levelBlock.height - 5
        }
        holes.push(hole)
        levelBlock.addChild(hole)
      }

      if (!locked) {
        const stars = Math.round(Math.random() * 3)
        for (let i = 0; i < stars; i++) {
          const star = Sprite.from('StarIcon')
          const size = 32
          star.width = size
          star.height = size
          const hole = holes[i]
          star.x = hole.width / 2 - 29
          star.y = hole.height / 2 - 33
          holes[i].addChild(star)
        }
      }
      levels.push(levelBlock)
    }
    return levels
  }

  private createNavigationButtons() {
    this.addContent({
      bottomMenu: {
        content: 'navigation',
        styles: {
          position: 'bottomCenter',
          marginBottom: -110,
          marginLeft: -10,
          width: '70%',
          height: 100
        }
      }
    })
  }
}
