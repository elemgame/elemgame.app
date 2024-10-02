import { Layout } from '@pixi/layout'
import { AppScreen } from '../component/basic/AppScreen'
import { LoadingSpinner } from '../component/LoadingSpinner'
import { Logo } from '../component/Logo'
import { color } from '../config/color'

export class LoadScreen extends AppScreen {
  public static assetBundles = ['preload']

  constructor() {
    super('LoadScreen')
    this.addContent({
      spinnerLayout: new LoadingSpinner(),
      pixiLogo: Logo()
    })

    this.setStyles({
      background: color.bg
    })
  }

  public onUpdate() {
    const spinner = this.getChildByID('spinner')
    if (spinner && spinner instanceof Layout) {
      const spinnerSprite = spinner.content.firstChild
      spinnerSprite.rotation += 0.05
    }
  }
}
