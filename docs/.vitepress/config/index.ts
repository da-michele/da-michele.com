import { defineConfig } from 'vitepress'

import { sharedConfig } from './shared'
import { deConfig } from './de'
import { enConfig } from './en'

export default defineConfig({
  ...sharedConfig,
  locales: {
    root: {
      label: 'Deutsch 🇩🇪',
      lang: 'de-DE',
      link: '/',
      ...deConfig
    },
    en: {
      label: 'English 🇺🇸',
      lang: 'en-US',
      link: '/en/',
      ...enConfig
    }
  }
})
