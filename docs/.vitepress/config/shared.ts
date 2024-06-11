import {
  type HeadConfig,
  defineConfig
} from 'vitepress'

const sharedHead: HeadConfig[] = [
  [ 'meta', { charset: 'utf-8' } ],
  [ 'meta', { name: 'Content-Type', content: 'text/html; charset=utf-8' } ],
  [ 'meta', { name: 'robots', content: 'index, follow' } ],

  ['meta', { 'http-equiv': 'Expires', content: '0' }],
  ['meta', { 'http-equiv': 'Pragma', content: 'no-cache' }],
  ['meta', { 'http-equiv': 'Cache', content: 'no-cache' }],
  ['meta', { 'http-equiv': 'Cache-control', content: 'no-store,no-cache,must-revalidate' }],

  ['meta', { name: 'author', content: 'Ristorante Da Michele, Baden-Baden' }],
  ['link', { rel: 'manifest', href: '/manifest.json' }],

  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/images/logo.svg', sizes: 'any' }],
  ['link', { rel: 'mask-icon', type: 'image/svg+xml', href: '/images/logo.svg', color: '#a8b1ff' }],
  ['link', { rel: 'apple-touch-icon', type: 'image/png', href: '/images/logo.png', sizes: '128x128' }],
  ['meta', { name: 'msapplication-TileColor', content: '#a8b1ff' }],
  ['meta', { name: 'theme-color', content: '#a8b1ff' }],

  ['meta', { name: 'application-name', content: 'Ristorante Da Michele' }],
  ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'Ristorante Da Michele' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],

  ['meta', { name: 'geo.position', content: '48.786975;8.1936724' }],
  ['meta', { name: 'geo.region', content: 'DE' }],
  ['meta', { name: 'geo.placename', content: 'Baden-Baden' }],

  ['meta', { name: 'twitter:title', content: 'Ristorante da Michele, Baden-Baden' }],
  // 'twitter:description' differs by locale
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:image:src', content: 'https://da-michele.com/images/social/da_michele_baden-baden.16x9.webp' }],

  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:title', content: 'Ristorante da Michele, Baden-Baden' }],
  // 'og:description' differs by locale
  // 'og:locale' differs by locale
  // 'og:locale:alternate' differs by locale
  ['meta', { property: 'og:site_name', content: 'Ristorante da Michele' }],

  ['meta', { property: 'og:image', content: 'https://da-michele.com/images/social/da_michele_baden-baden.1x1.webp' }],
  ['meta', { property: 'og:image:secure_url', content: 'https://da-michele.com/images/social/da_michele_baden-baden.1x1.webp' }],
  ['meta', { property: 'og:image:width', content: '416' }],
  ['meta', { property: 'og:image:height', content: '416' }],
  ['meta', { property: 'og:image:alt', content: 'Ristorante da Michele, Baden-Baden' }],

  ['meta', { property: 'og:image', content: 'https://da-michele.com/images/social/da_michele_baden-baden.4x3.webp' }],
  ['meta', { property: 'og:image:secure_url', content: 'https://da-michele.com/images/social/da_michele_baden-baden.4x3.webp' }],
  ['meta', { property: 'og:image:width', content: '555' }],
  ['meta', { property: 'og:image:height', content: '416' }],
  ['meta', { property: 'og:image:alt', content: 'Ristorante da Michele, Baden-Baden' }],

  ['meta', { property: 'og:image', content: 'https://da-michele.com/images/social/da_michele_baden-baden.16x9.webp' }],
  ['meta', { property: 'og:image:secure_url', content: 'https://da-michele.com/images/social/da_michele_baden-baden.16x9.webp' }],
  ['meta', { property: 'og:image:width', content: '740' }],
  ['meta', { property: 'og:image:height', content: '416' }],
  ['meta', { property: 'og:image:alt', content: 'Ristorante da Michele, Baden-Baden' }]
]

export const sharedConfig = defineConfig({
  cleanUrls: true,
  head: sharedHead,
  lastUpdated: true,
  markdown: {                                                                   // https://vitepress.dev/reference/site-config#markdown
    lineNumbers: true,
    theme: {                                                                    // https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
      light: 'github-light',
      dark: 'github-dark'
    },
    toc: {
      level: [2]
    }
  },
  sitemap: {
    hostname: 'https://da-michele.com/',
    lastmodDateOnly: true,
    transformItems: (items) => {
      return items.filter((item) => !item.url.includes('404'))
    }
  },
  srcDir: 'src',
  srcExclude: [
    '**/TODOs?.md'
  ],
  themeConfig: {
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Michele Romano`,
      message: 'Ristorante Da Michele Baden-Baden'
    },
    logo: {
      alt: 'Ristorante Da Michele Baden-Baden',
      dark: '/images/logo.dark.svg',
      light: '/images/logo.light.svg'
    },
    search: {
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonAriaLabel: 'Suche',
                buttonText: 'Suche'
              },
              modal: {
                backButtonTitle: 'backButtonTitle',
                displayDetails: 'detailiertere Ergebnisse anzeigen',
                footer: {
                  closeKeyAriaLabel: 'esc',
                  closeText: 'um Suche zu beenden',
                  navigateDownKeyAriaLabel: 'nach_unten',
                  navigateText: 'um Auswahl zu ändern',
                  navigateUpKeyAriaLabel: 'nach_oben',
                  selectKeyAriaLabel: 'enter',
                  selectText: 'um Auswahl zu bestätigen'
                },
                noResultsText: 'Keine Ergebnisse für',
                resetButtonTitle: 'Sucheingabe zurücksetzen'
              }
            }
          }
        }
      },
      provider: 'local'
    },
    siteTitle: 'Ristorante Da Michele',
    socialLinks: [
      // { icon: 'github', link: 'https:/github.com/da-michele/da-michele.com', ariaLabel: 'Github' },
      { icon: 'facebook', link: 'https://www.facebook.com/pages/category/Italian-Restaurant/Pizzeria-Da-Michele-2293017134358842/', ariaLabel: 'Facebook' },
      { icon: 'instagram', link: 'https://www.instagram.com/da_michele_badenbaden/', ariaLabel: 'Instagram' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.078 23.55c-.473-.316-.893-.703-1.244-1.15-.383-.463-.738-.95-1.064-1.454-.766-1.12-1.365-2.345-1.78-3.636-.5-1.502-.743-2.94-.743-4.347 0-1.57.34-2.94 1.002-4.09.49-.9 1.22-1.653 2.1-2.182.85-.53 1.84-.82 2.84-.84.35 0 .73.05 1.13.15.29.08.64.21 1.07.37.55.21.85.34.95.37.32.12.59.17.8.17.16 0 .39-.05.645-.13.145-.05.42-.14.81-.31.386-.14.692-.26.935-.35.37-.11.728-.21 1.05-.26.39-.06.777-.08 1.148-.05.71.05 1.36.2 1.94.42 1.02.41 1.843 1.05 2.457 1.96-.26.16-.5.346-.725.55-.487.43-.9.94-1.23 1.505-.43.77-.65 1.64-.644 2.52.015 1.083.29 2.035.84 2.86.387.6.904 1.114 1.534 1.536.31.21.582.355.84.45-.12.375-.252.74-.405 1.1-.347.807-.76 1.58-1.25 2.31-.432.63-.772 1.1-1.03 1.41-.402.48-.79.84-1.18 1.097-.43.285-.935.436-1.452.436-.35.015-.7-.03-1.034-.127-.29-.095-.576-.202-.856-.323-.293-.134-.596-.248-.905-.34-.38-.1-.77-.148-1.164-.147-.4 0-.79.05-1.16.145-.31.088-.61.196-.907.325-.42.175-.695.29-.855.34-.324.096-.656.154-.99.175-.52 0-1.004-.15-1.486-.45zm6.854-18.46c-.68.34-1.326.484-1.973.436-.1-.646 0-1.31.27-2.037.24-.62.56-1.18 1-1.68.46-.52 1.01-.95 1.63-1.26.66-.34 1.29-.52 1.89-.55.08.68 0 1.35-.25 2.07-.228.64-.568 1.23-1 1.76-.435.52-.975.95-1.586 1.26z"/></svg>'
        },
        link: 'https://maps.apple.com/?ll=48.786975,8.1936724&address=Ristorante+da+Michele,Sinzheimer+Strasse+4,Baden-Baden,Germany&z=19&dirflg=d',
        ariaLabel: 'Apple Maps'
      },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z"/></svg>'
        },
        link: 'https://www.google.com/maps/dir/?api=1&origin=&destination=Ristorante+Da+Michele%2C+Sinzheimer+Str.+4%2C+76532+Baden-Baden%2C+Germany&travelmode=driving&dir_action=navigate&center=48.786975,8.1936724&zoom=19&basemap=roadmap&layer=traffic',
        ariaLabel: 'Google Maps'
      },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M6.656 19.63l-3.304 3.295L.044 19.63zM11.49 12.108c-.69-.821-.656-1.264-.229-1.69.519-.52 1.047-.306 1.639.274zm7.08-8.993c.518-.519 1.046-.305 1.638.275l-1.41 1.41c-.692-.818-.659-1.258-.229-1.685zm4.271 1.44c-.643.962-1.742 2.52-2.929 1.343l2.97-2.97c-.266-.283-.47-.524-.611-.676-1.614-1.6-3.418-1.62-4.834-.214-.943.943-1.19 2.02-.915 3.051l-.916-1.065a1.935 1.935 0 0 0-.555 2.67l-1.065-.884-1.431 1.406 1.907 1.907c-1.474-1.168-3.051-1.055-4.34.217-1.363 1.361-1.269 3.012-.246 4.37l-.208-.205c-1.349-1.348-2.813-.872-3.54-.146-.561.561-.915 1.33-.762 1.867l-2.918-2.92-1.556 1.556 5.764 5.768h3.095l-2.078-2.09c-1.093-1.111-1.111-1.697-.58-2.225.53-.528 1.104-.192 2.151.851l2.054 2.05 1.562-1.543-1.95-1.947c1.404 1.062 3.088 1.12 4.577-.378l.028-.028a4.43 4.43 0 0 0 1.19-1.678l-1.169-.784c-.647.96-1.76 2.523-2.93 1.364l2.976-2.976 1.855 1.84 1.618-1.617-2.32-2.319c-1.083-1.083-.442-2.1 0-2.484a4.577 4.577 0 0 0 .916 1.27c1.501 1.504 3.439 1.806 5.145.106l.027-.027a4.434 4.434 0 0 0 1.19-1.678z"/></svg>'
        },
        link: 'https://share.here.com/r/mylocation/48.786975,8.1936724?m=d',
        ariaLabel: 'HERE Maps'
      },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.314 1.59c-.225.003-.45.013-.675.03-2.165.155-4.295.924-6.069 2.327-2.194 1.732-3.296 4.325-3.496 7.05h.002c-.093 1.22-.23 2.15-.469 2.63-.238.479-.42.638-1.24.639C.27 14.259-.4 15.612.266 16.482c1.248 1.657 2.902 2.705 4.72 3.364a2.198 2.198 0 00-.033.367 2.198 2.198 0 002.2 2.197 2.198 2.198 0 002.128-1.668c1.307.12 2.607.14 3.824.1.364-.012.73-.045 1.094-.092a2.198 2.198 0 002.127 1.66 2.198 2.198 0 002.2-2.197 2.198 2.198 0 00-.151-.797 12.155 12.155 0 002.303-1.549c2.094-1.807 3.511-4.399 3.302-7.404-.112-1.723-.761-3.298-1.748-4.608-2.143-2.86-5.53-4.309-8.918-4.265zm.366 1.54c.312.008.623.027.933.063 2.48.288 4.842 1.496 6.4 3.577v.001c.829 1.1 1.355 2.386 1.446 3.792v.003c.173 2.477-.965 4.583-2.777 6.147a10.66 10.66 0 01-2.375 1.535 2.198 2.198 0 00-.98-.234 2.198 2.198 0 00-1.934 1.158 9.894 9.894 0 01-1.338.146 27.323 27.323 0 01-3.971-.148 2.198 2.198 0 00-1.932-1.156 2.198 2.198 0 00-1.347.463c-1.626-.553-3.078-1.422-4.155-2.762 1.052-.096 1.916-.6 2.319-1.408.443-.889.53-1.947.625-3.198v-.002c.175-2.391 1.11-4.536 2.92-5.964h.002c1.77-1.402 3.978-2.061 6.164-2.012zm-3.157 4.638c-.688 0-1.252.579-1.252 1.298 0 .72.564 1.297 1.252 1.297.689 0 1.252-.577 1.252-1.297 0-.711-.563-1.298-1.252-1.298zm5.514 0c-.688 0-1.25.579-1.25 1.298-.008.72.554 1.297 1.25 1.297.688 0 1.252-.577 1.252-1.297 0-.711-.564-1.298-1.252-1.298zM9.641 11.78a.72.72 0 00-.588.32.692.692 0 00-.11.54c.345 1.783 2.175 3.129 4.264 3.129h.125c1.056-.032 2.026-.343 2.816-.922.767-.556 1.29-1.316 1.477-2.137a.746.746 0 00-.094-.547.69.69 0 00-.445-.32.714.714 0 00-.867.539c-.22.93-1.299 1.9-2.934 1.94-1.572.046-2.738-.986-2.926-1.956a.72.72 0 00-.718-.586Z"/></svg>'
        },
        link: 'https://www.waze.com/ul?q=Ristorante%20Da%20Michele&ll=48.786975,8.1936724&navigate=yes',
        ariaLabel: 'Google Waze'
      }
    ]
  }
})
