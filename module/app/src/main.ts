import { Application } from 'pixi.js'
import { app } from './App'
import { assetInit } from './config/asset'
import { color } from './config/color'
import { urlParam } from './util/urlParams'
import { GameScreen } from './screen/GameScreen'
import { LoadScreen } from './screen/LoadScreen'
import { TitleScreen } from './screen/TitleScreen'

export const pixi = new Application()

// Expose that app to the PixiJS Devtools, so we can debug the pixi app layers
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
__PIXI_APP__

function resize() {
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight

  pixi.renderer.canvas.style.width = `${windowWidth}px`
  pixi.renderer.canvas.style.height = `${windowHeight}px`
  window.scrollTo(0, 0)
  pixi.renderer.resize(windowWidth, windowHeight)
  app.resize(windowWidth, windowHeight)
}

async function init() {
  await pixi.init({
    resolution: Math.max(window.devicePixelRatio, 2),
    backgroundColor: color.bg
  })
  document.body.appendChild(pixi.canvas)
  window.addEventListener('resize', resize)
  resize()
  await assetInit()
  app.setLoadScreen(LoadScreen)
  switch (urlParam('scene')) {
    case 'game':
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      await app.showScreen(GameScreen)
      break
    case 'load':
      await app.showScreen(LoadScreen)
      break
    default:
      await app.showScreen(TitleScreen)
      break
  }
}

window.onload = init
