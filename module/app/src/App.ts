import { Layout } from '@pixi/layout'
import { Assets, Rectangle } from 'pixi.js'
import { AppScreen } from './component/basic/AppScreen'
import { Background } from './component/basic/Background'
import { areBundlesLoaded } from './config/asset'
import { Action } from './config/action'
import { pixi } from './main'

export type SceneData = {
  window?: Action
  level?: number
  restart?: boolean
}

interface AppScreenConstructor {
  new (data?: SceneData): AppScreen
  assetBundles?: string[]
}

class App {
  private currentScreen?: AppScreen
  private currentScreenResize?: () => void
  private loadScreen?: AppScreen

  private width!: number
  private height!: number

  public background!: Layout

  public setLoadScreen(screen: AppScreenConstructor) {
    this.loadScreen = new screen()
  }

  addBackground() {
    this.background = new Background({
      width: this.width,
      height: this.height
    } as Rectangle)

    this.background.resize(this.width, this.height)
    pixi.stage.addChild(this.background)
  }

  private async addScreen(screen: AppScreen) {
    pixi.stage.addChild(screen)
    if (screen.resize) {
      this.currentScreenResize = () => screen.resize
      screen.resize(this.width, this.height)
    }

    if (screen.onUpdate) {
      pixi.ticker.add(screen.onUpdate, screen)
    }

    if (screen.show) {
      await screen.show()
    }
  }

  private async removeScreen(screen: AppScreen) {
    if (screen.hide) {
      await screen.hide()
    }

    if (this.currentScreenResize) {
      window.removeEventListener('resize', this.currentScreenResize)
    }

    if (screen.onUpdate) {
      pixi.ticker.remove(screen.onUpdate, screen)
    }

    if (screen.parent) {
      screen.parent.removeChild(screen)
    }
  }

  public async showScreen(screen: AppScreenConstructor, data?: SceneData) {
    if (this.currentScreen) {
      await this.removeScreen(this.currentScreen)
      this.currentScreen.destroy()
    }

    if (screen.assetBundles && !areBundlesLoaded(screen.assetBundles)) {
      if (this.loadScreen) {
        this.addScreen(this.loadScreen)
      }
      await Assets.loadBundle(screen.assetBundles)
      if (this.loadScreen) {
        this.removeScreen(this.loadScreen)
      }
    }
    this.currentScreen = new screen(data)
    await this.addScreen(this.currentScreen)
  }

  public resize(width: number, height: number) {
    this.width = width
    this.height = height
    this.currentScreen?.resize?.(width, height)
    this.background?.resize(width, height)
  }
}

export const app = new App()
