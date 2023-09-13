import { defineLoader } from 'vitepress'

import { team } from './team.json'

export interface TeamMember {
  readonly show: boolean
  readonly anchor: string
  readonly img?: string | null
  readonly name: string
  readonly desc?: {
    readonly de?: string | null
    readonly en?: string | null
  } | null
  readonly links: {
    readonly icon: string
    readonly link: string
  }[]
}

export interface Data {
  readonly team: TeamMember[]
}

declare const data: Data
export { data }

export default defineLoader({
  watch: [
    './team.json'
  ],
  async load(): Promise<Data> {
    return {
      team: team
    }
  }
})
