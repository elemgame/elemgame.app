import { AppScreen } from '../component/basic/AppScreen'
import { Window } from '../component/basic/Window'
import { LevelsWindow } from '../component/window/LevelsWindow'
import { Action } from '../config/action'
import { ViewController } from '../controller/ViewController'
import { app, SceneData } from '../App'
import { urlParam } from '../util/urlParams'

export class TitleScreen extends AppScreen {
  public static assetBundles = ['game']
  private views: ViewController
  static defaultWindow = Action.levels

  constructor(options?: SceneData) {
    super('TitleScreen')
    app.addBackground()
    this.views = new ViewController()
    this.createWindows(options?.window)
  }

  private createWindows(activeWindow?: Action) {
    this.addWindow(Action.levels, new LevelsWindow())
    this.showActiveWindow(activeWindow)
  }

  private addWindow(window: Action, content: Window) {
    this.views.add(window, content)
    this.addContent({
      [window]: this.views.get(window)
    })
  }

  private async showActiveWindow(activeWindow?: Action) {
    const window = urlParam('window')
    if (window) {
      try {
        await this.views.show(Action[window as keyof typeof Action])
        return
      } catch (e) {
        const error: Error = e as Error
        console.error(error.message.replace('"undefined"', window))
      }
    }
    await this.views.show(activeWindow ?? TitleScreen.defaultWindow)
  }
}
