import {
  type DefaultTheme,
  type HeadConfig,
  type LocaleSpecificConfig,
  defineConfig
} from 'vitepress'

import ldjsonDe from './ldjson.de.json'

const deHead: HeadConfig[] = [
  ['meta', { property: 'twitter:description', content: 'Das Ristorante da Michele bietet eine täglich wechselnde Karte mit frischen Fisch- und Fleischgerichten sowie den üblichen italienischen Klassikern.' }],
  ['meta', { property: 'og:description', content: 'Das Ristorante da Michele bietet eine täglich wechselnde Karte mit frischen Fisch- und Fleischgerichten sowie den üblichen italienischen Klassikern.' }],
  ['meta', { property: 'og:locale', content: 'de_DE' }],
  ['meta', { property: 'og:locale:alternate', content: 'en_US' }],

  [ 'script', { type: 'application/ld+json' }, JSON.stringify(ldjsonDe, undefined, 4)]
]

export const deConfig: LocaleSpecificConfig<DefaultTheme.Config> = defineConfig({
  description: 'Das Ristorante da Michele bietet eine täglich wechselnde Karte mit frischen Fisch- und Fleischgerichten sowie den üblichen italienischen Klassikern.',
  head: deHead,
  themeConfig: {
    darkModeSwitchLabel: 'Aussehen verändern',
    docFooter: { prev: 'Vorherige Seite', next: 'Nächste Seite' },
    editLink: { text: 'Editiere diese Seite auf GitHub', pattern: 'https:/github.com/da-michele/da-michele.com/blob/main/docs/:path' },
    langMenuLabel: 'Ändere die Sprache',
    lastUpdated: {
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      },
      text: 'Zuletzt aktualisiert'
    },
    nav: [
      // { text: 'Startseite', link: '/' },
      // { text: 'Tageskarte', link: '/menu/' },
      // {
      //   text: 'Ristorante',
      //   activeMatch: '^/ristorante/',
      //   items: [
      //     { text: 'Über uns', link: '/ristorante/' },
      //     { text: 'Karriere', link: '/ristorante/career/' },
      //     { text: 'Gutscheine', link: '/ristorante/voucher/' }
      //   ]
      // },
      // {
      //   text: 'Legal',
      //   activeMatch: '^/legal/',
      //   items: [
      //     { text: 'Impressum', link: '/legal/imprint/' },
      //     { text: 'Datenschutz', link: '/legal/privacy/' },
      //     { text: 'Bedingungen', link: '/legal/terms/' }
      //   ]
      // }
    ],
    outline: {
      label: 'Auf dieser Seite',
      level: [2, 3]
    },
    returnToTopLabel: 'Zurück zum Seitenanfang',
    sidebar: [
      { text: 'Startseite', link: '/' },
      { text: 'Tageskarte <span class="VPBadge warning small">aktuell!</span>', link: '/menu/' },
      {
        text: 'Ristorante',
        items: [
          { text: 'Über uns', link: '/ristorante/' },
          { text: 'Karriere', link: '/ristorante/career/' },
          { text: 'Gutscheine', link: '/ristorante/voucher/' }
        ]
      },
      {
        text: 'Legal',
        items: [
          { text: 'Impressum', link: '/legal/imprint/' },
          { text: 'Datenschutz', link: '/legal/privacy/' },
          { text: 'Bedingungen', link: '/legal/terms/' }
        ]
      }
    ],
    sidebarMenuLabel: 'Menü'
  },
  title: 'Ristorante Da Michele Baden-Baden',
  titleTemplate: 'Ristorante Da Michele'
})
