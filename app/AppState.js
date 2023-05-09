import { Gachamon } from "./Models/Gachamon.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  // NOTE the class/model is what I want my data to LOOK like...the AppState is where that data is stored


  /** @type {import('./Models/Gachamon').Gachamon[]} */
  gachamon = [
    new Gachamon({ name: 'Oslo', emoji: '🦧', rarity: '⭐' }),
    new Gachamon({ name: 'Xanther', emoji: '🦈', rarity: '⭐⭐' }),
    new Gachamon({ name: 'Koko', emoji: '🦍', rarity: '⭐' }),
  ]

  /** @type {import('./Models/Gachamon').Gachamon|null} */
  activeGachamon = null
  // NOTE null is truthy/falsy(null; undefined)
  // NOTE null means it is either there or its not


  /** @type {import('./Models/Gachamon').Gachamon[]} */
  myGachamon = loadState('myGachamon', [Gachamon])
  // NOTE first argument is the name of the collection that I want to load, second argument is what I want that found data to be parsed into

  /** @type {number} */
  coins = 0
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
