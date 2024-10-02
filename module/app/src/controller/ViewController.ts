import { Window } from '../component/basic/Window'
import { Action } from '../config/action'

export class ViewController {
  public history: Action[] = []
  public windows: { [key: string]: Window } = {}
  public active!: Action

  add(id: Action, window: Window, visible = false) {
    this.windows[id] = window
    if (!visible) {
      window.hide(true)
    }
  }

  remove(id: Action) {
    delete this.windows[id]
  }

  async show(id: Action, force = false) {
    if (!this.windows[id]) {
      throw new Error(`Window "${Action[id]}" does not exist`)
    }
    if (this.active === id) return
    this.history.push(id)
    this.active = id
    for (const key in this.windows) {
      await this.windows[key].hide()
    }
    await this.windows[id].show(force)
  }

  async hide(id: Action, force = false) {
    await this.windows[id].hide(force)
  }

  get(id: Action) {
    return this.windows[id]
  }

  async goBack() {
    if (this.history.length > 1) {
      this.history.pop()
    }
    await this.show(this.history[this.history.length - 1])
  }
}
