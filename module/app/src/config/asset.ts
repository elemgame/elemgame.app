import { Assets, UnresolvedAsset } from 'pixi.js'
import { DataProvider } from '../data/DataProvider'

const assetManifest = {
  bundles: [
    {
      name: 'preload',
      assets: [
        {
          alias: 'spinner',
          src: 'spinner.png'
        },
        {
          alias: 'jetbrains-300',
          src: 'jetbrains-mono-latin-300-normal.woff',
          data: { family: 'jetbrains', weight: '300', style: 'normal' }
        },
        {
          alias: 'user-avatar',
          src: 'default-avatar.png'
        }
      ]
    },
    {
      name: 'game',
      assets: [
        {
          alias: 'avatar_mask',
          src: 'avatar_mask.png'
        },
        {
          alias: 'background',
          src: 'background.jpg'
        },
        {
          alias: 'SmallProgress-blue',
          src: 'progress/SmallProgress-blue.png'
        },
        {
          alias: 'SmallProgressBarBG',
          src: 'progress/SmallProgressBarBG.png'
        },
        {
          alias: 'MenuWindow',
          src: 'window/MenuWindow.png'
        },
        {
          alias: 'HintDown',
          src: 'window/Hint-down.png'
        },
        {
          alias: 'Window',
          src: 'window/Window.png'
        },
        {
          alias: 'Radio-bg',
          src: 'window/Radio-bg.png'
        },
        {
          alias: 'SmallButton-substrate',
          src: 'window/SmallButton-substrate.png'
        },
        {
          alias: 'Hint',
          src: 'window/Hint.png'
        },
        {
          alias: 'Ribbon',
          src: 'window/Ribbon.png'
        },
        {
          alias: 'LockIcon',
          src: 'icon/LockIcon.png'
        },
        {
          alias: 'CloseIcon',
          src: 'icon/CloseIcon.png'
        },
        {
          alias: 'EnergyIcon',
          src: 'icon/EnergyIcon.png'
        },
        {
          alias: 'StarIcon',
          src: 'icon/star.svg'
        },
        {
          alias: 'SmallButton-disabled',
          src: 'button/SmallButton-disabled.png'
        },
        {
          alias: 'SmallButton-hover',
          src: 'button/SmallButton-hover.png'
        },
        {
          alias: 'SmallButton',
          src: 'button/SmallButton.png'
        },
        {
          alias: 'SmallButton-pressed',
          src: 'button/SmallButton-pressed.png'
        }
      ]
    }
  ]
}

export async function assetInit() {
  await Assets.init({ manifest: assetManifest, basePath: 'assets' })
  await Assets.loadBundle(['preload', 'default'])
  const allBundles = assetManifest.bundles.map((item) => item.name)
  await DataProvider.userAvatar()
  Assets.backgroundLoadBundle(allBundles)
}

export function isBundleLoaded(bundle: string) {
  const bundleManifest = assetManifest.bundles.find((b) => b.name === bundle)

  if (!bundleManifest) {
    return false
  }

  for (const asset of bundleManifest.assets as UnresolvedAsset[]) {
    if (!Assets.cache.has(asset.alias as string)) {
      return false
    }
  }

  return true
}

export function areBundlesLoaded(bundles: string[]) {
  for (const name of bundles) {
    if (!isBundleLoaded(name)) {
      return false
    }
  }

  return true
}
