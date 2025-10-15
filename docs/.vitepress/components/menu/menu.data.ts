import { defineLoader } from 'vitepress'

import { vinobianco } from './drinks.vinobianco.json'
import { vinorosato } from './drinks.vinorosato.json'
import { vinorosso } from './drinks.vinorosso.json'
import { franciacorta } from './drinks.franciacorta.json'

import { antipasti } from './food.antipasti.json'
import { carne } from './food.carne.json'
import { dolci } from './food.dolci.json'
import { pasta } from './food.pasta.json'
import { pesce } from './food.pesce.json'
import { pizze } from './food.pizze.json'
import { riso } from './food.riso.json'

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
  readonly franciacorta: Drink[]

  readonly antipasti: Food[]
  readonly carne: Food[]
  readonly dolci: Food[]
  readonly pasta: Food[]
  readonly pesce: Food[]
  readonly pizze: Food[]
  readonly riso: Food[]
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
      franciacorta: franciacorta,
      antipasti: antipasti,
      carne: carne,
      dolci: dolci,
      pasta: pasta,
      pesce: pesce,
      pizze: pizze,
      riso: riso
    }
  }
})
