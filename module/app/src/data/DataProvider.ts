import { GameItem } from './GameItem'
import { Assets } from 'pixi.js'
import Telegram from '@twa-dev/sdk'
import { WebAppUser } from '@twa-dev/types'
const isTelegram = Telegram.initData !== ''

export function random(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export class DataProvider {
  gameList: Array<GameItem> = []

  constructor() {
    this.gameList = [
      { id: 1, name: 'Alice', mana: random(0, 50), star: random(0, 3) },
      { id: 2, name: 'Bob', mana: random(0, 50), star: random(0, 3) },
      { id: 3, name: 'Carol', mana: random(0, 50), star: random(0, 3) },
      { id: 4, name: 'Dave', mana: random(0, 50), star: random(0, 3) },
      { id: 5, name: 'Erin', mana: random(0, 50), star: random(0, 3) },
      { id: 6, name: 'Faythe', mana: random(0, 50), star: random(0, 3) }
    ]
  }

  gameById(id: number): GameItem | null {
    for (const game of this.gameList) {
      if (id === game.id) {
        return game
      }
    }
    return null
  }

  static getUser(): WebAppUser | null {
    if (isTelegram) {
      const initData = Telegram.initDataUnsafe
      if (initData && initData.user) {
        return initData.user
      }
    }
    return null
  }

  static async userAvatar(): Promise<void> {
    const user = DataProvider.getUser()
    if (user) {
      if (user.photo_url) {
        return Assets.load({
          alias: 'user-avatar',
          src: user.photo_url
        })
      }
    }
  }
}
