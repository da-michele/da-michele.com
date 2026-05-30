import { defineLoader } from 'vitepress'

import { vinobianco } from './drinks.vinobianco.json'
import { vinorosato } from './drinks.vinorosato.json'
import { vinorosso } from './drinks.vinorosso.json'
import { vinospumante } from './drinks.vinospumante.json'

import { antipasti } from './food.antipasti.json'
import { zuppe } from './food.zuppe.json'
import { pasta } from './food.pasta.json'
import { riso } from './food.riso.json'
import { pinse } from './food.pinse.json'
import { pizze } from './food.pizze.json'
import { pesce } from './food.pesce.json'
import { carne } from './food.carne.json'
import { dolci } from './food.dolci.json'

export interface Drink {
  readonly show: boolean
  readonly anchor: string
  readonly name: string
  readonly desc?: {
    readonly de?: string | null
    readonly en?: string | null
  } | null
  readonly img?: string | null
  readonly region: string
  readonly winery: string
  readonly grapes: string
  readonly bottlesize: number
  readonly alcoholcontent: number
}

export interface Food {
  readonly show: boolean
  readonly anchor: string
  readonly name: string
  readonly desc?: {
    readonly de?: string | null
    readonly en?: string | null
  } | null
  readonly img?: string | null
  readonly tags?: string[] | null
  readonly priceeuro: number
}

export interface Data {
  readonly vinobianco: Drink[]
  readonly vinorosato: Drink[]
  readonly vinorosso: Drink[]
  readonly vinospumante: Drink[]

  readonly antipasti: Food[]
  readonly zuppe: Food[]
  readonly pasta: Food[]
  readonly riso: Food[]
  readonly pinse: Food[]
  readonly pizze: Food[]
  readonly pesce: Food[]
  readonly carne: Food[]
  readonly dolci: Food[]
}

declare const data: Data
export { data }

export default defineLoader({
  watch: [
    './drinks.*.json',
    './food.*.json'
  ],
  async load(): Promise<Data> {
    return {
      vinobianco: vinobianco,
      vinorosato: vinorosato,
      vinorosso: vinorosso,
      vinospumante: vinospumante,
      antipasti: antipasti,
      zuppe: zuppe,
      pasta: pasta,
      riso: riso,
      pinse: pinse,
      pizze: pizze,
      pesce: pesce,
      carne: carne,
      dolci: dolci
    }
  }
})
