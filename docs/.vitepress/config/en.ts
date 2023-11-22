import {
  type DefaultTheme,
  type HeadConfig,
  type LocaleSpecificConfig,
  defineConfig
} from 'vitepress'

import ldjsonEn from './ldjson.en.json'

const enHead: HeadConfig[] = [
  ['meta', { property: 'twitter:description', content: 'The Ristorante da Michele offers a daily changing menu with fresh fish and meat dishes as well as the usual Italian classics.' }],
  ['meta', { property: 'og:description', content: 'The Ristorante da Michele offers a daily changing menu with fresh fish and meat dishes as well as the usual Italian classics.' }],
  ['meta', { property: 'og:locale', content: 'en_US' }],
  ['meta', { property: 'og:locale:alternate', content: 'de_DE' }],

  [ 'script', { type: 'application/ld+json' }, JSON.stringify(ldjsonEn)]
]

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = defineConfig({
  description: 'The Ristorante da Michele offers a daily changing menu with fresh fish and meat dishes as well as the usual Italian classics.',
  head: enHead,
  themeConfig: {
    darkModeSwitchLabel: 'Appearance',
    docFooter: { prev: 'Previous page', next: 'Next page' },
    editLink: { text: 'Edit this page on GitHub', pattern: 'https:/github.com/da-michele/da-michele.com/blob/main/docs/:path' },
    langMenuLabel: 'Change language',
    lastUpdated: {
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      },
      text: 'Last updated'
    },
    nav: [
      // { text: 'Home', link: '/en/' },
      // { text: "Today's menu", link: '/en/menu/' },
      // {
      //   text: 'Ristorante',
      //   activeMatch: '^/en/ristorante/',
      //   items: [
      //     { text: 'About us', link: '/en/ristorante/' },
      //     { text: 'Career', link: '/en/ristorante/career/' },
      //     { text: 'Vouchers', link: '/en/ristorante/voucher/' }
      //   ]
      // },
      // {
      //   text: 'Legal',
      //   activeMatch: '^/en/legal/',
      //   items: [
      //     { text: 'Imprint', link: '/en/legal/imprint/' },
      //     { text: 'Privacy', link: '/en/legal/privacy/' },
      //     { text: 'Terms', link: '/en/legal/terms/' }
      //   ]
      // }
    ],
    outline: {
      label: 'On this page',
      level: [2, 3]
    },
    returnToTopLabel: 'Return to top',
    sidebar: [
      { text: 'Home', link: '/en/' },
      { text: "Today's menu", link: '/en/menu/' },
      {
        text: 'Ristorante',
        items: [
          { text: 'About us', link: '/en/ristorante/' },
          { text: 'Career', link: '/en/ristorante/career/' },
          { text: 'Vouchers', link: '/en/ristorante/voucher/' }
        ]
      },
      {
        text: 'Legal',
        items: [
          { text: 'Imprint', link: '/en/legal/imprint/' },
          { text: 'Privacy', link: '/en/legal/privacy/' },
          { text: 'Terms', link: '/en/legal/terms/' }
        ]
      }
    ],
    sidebarMenuLabel: 'Menu'
  },
  title: 'Ristorante Da Michele Baden-Baden',
  titleTemplate: 'Ristorante Da Michele'
})
