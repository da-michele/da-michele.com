<template>
  <ParentLayout>
    <template #page-bottom>
      <hr>
      <div class="addressfooter" align="center">
        <a :href="$withBase($localePath + 'imprint.html')">
          <span v-if="$lang == 'en-US'">Imprint</span>
          <span v-else>Impressum</span>
        </a>&nbsp;
        <a :href="$withBase($localePath + 'legal/privacy.html')">
          <span v-if="$lang == 'en-US'">Privacy</span>
          <span v-else>Datenschutz</span>
        </a>&nbsp;
        <a :href="$withBase($localePath + 'legal/terms.html')">
          <span v-if="$lang == 'en-US'">Terms</span>
          <span v-else>Bedingungen</span>
        </a><br>
        <br>
        <br>
        <address>
          Ristorante Da Michele<br>
          Sinzheimer Str. 4<br>
          76532 Baden-Baden
        </address><br>
        <br>
        <br>
        <a :href="$withBase($localePath + 'vcards/Da_Michele_Baden-Baden.vcf')" target="_blank" rel="noopener noreferrer" class="vcard">
          <svg role="img" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M2,3H22C23.05,3 24,3.95 24,5V19C24,20.05 23.05,21 22,21H2C0.95,21 0,20.05 0,19V5C0,3.95 0.95,3 2,3M14,6V7H22V6H14M14,8V9H21.5L22,9V8H14M14,10V11H21V10H14M8,13.91C6,13.91 2,15 2,17V18H14V17C14,15 10,13.91 8,13.91M8,6A3,3 0 0,0 5,9A3,3 0 0,0 8,12A3,3 0 0,0 11,9A3,3 0 0,0 8,6Z" />
          </svg>
          <span v-if="$lang == 'en-US'">Download vCard</span>
          <span v-else>Visitenkarte herunterladen</span>
        </a>&nbsp;
        <a href="tel:+49722161541" target="_blank" rel="noopener noreferrer" class="footer-phone">
          <svg role="img" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
          </svg>
          <span>+49 - (0)7221 - 61541</span>
        </a>
<!--
        &nbsp;
        <a href="mailto:info@da-michele.com" target="_blank" rel="noopener noreferrer" class="footer-email">
          <svg role="img" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
          </svg>
          <span>info@da-michele.com</span>
        </a>
-->
        <br>
        <br>
        <br>
        <a alt="Apple Maps" href="https://maps.apple.com/?ll=48.786975,8.1936724&amp;address=Ristorante+da+Michele,Sinzheimer+Strasse+4,Baden-Baden,Germany&amp;z=19&amp;dirflg=d" target="_blank" rel="noopener noreferrer" class="gps-nav-app">
          <svg role="img" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.078 23.55c-.473-.316-.893-.703-1.244-1.15-.383-.463-.738-.95-1.064-1.454-.766-1.12-1.365-2.345-1.78-3.636-.5-1.502-.743-2.94-.743-4.347 0-1.57.34-2.94 1.002-4.09.49-.9 1.22-1.653 2.1-2.182.85-.53 1.84-.82 2.84-.84.35 0 .73.05 1.13.15.29.08.64.21 1.07.37.55.21.85.34.95.37.32.12.59.17.8.17.16 0 .39-.05.645-.13.145-.05.42-.14.81-.31.386-.14.692-.26.935-.35.37-.11.728-.21 1.05-.26.39-.06.777-.08 1.148-.05.71.05 1.36.2 1.94.42 1.02.41 1.843 1.05 2.457 1.96-.26.16-.5.346-.725.55-.487.43-.9.94-1.23 1.505-.43.77-.65 1.64-.644 2.52.015 1.083.29 2.035.84 2.86.387.6.904 1.114 1.534 1.536.31.21.582.355.84.45-.12.375-.252.74-.405 1.1-.347.807-.76 1.58-1.25 2.31-.432.63-.772 1.1-1.03 1.41-.402.48-.79.84-1.18 1.097-.43.285-.935.436-1.452.436-.35.015-.7-.03-1.034-.127-.29-.095-.576-.202-.856-.323-.293-.134-.596-.248-.905-.34-.38-.1-.77-.148-1.164-.147-.4 0-.79.05-1.16.145-.31.088-.61.196-.907.325-.42.175-.695.29-.855.34-.324.096-.656.154-.99.175-.52 0-1.004-.15-1.486-.45zm6.854-18.46c-.68.34-1.326.484-1.973.436-.1-.646 0-1.31.27-2.037.24-.62.56-1.18 1-1.68.46-.52 1.01-.95 1.63-1.26.66-.34 1.29-.52 1.89-.55.08.68 0 1.35-.25 2.07-.228.64-.568 1.23-1 1.76-.435.52-.975.95-1.586 1.26z"/>
          </svg>
          <span>Apple Maps</span>
        </a>&nbsp;
        <a alt="Google Maps" href="https://www.google.com/maps/dir/?api=1&amp;origin=&amp;destination=Ristorante+Da+Michele%2C+Sinzheimer+Str.+4%2C+76532+Baden-Baden%2C+Germany&amp;travelmode=driving&amp;dir_action=navigate&amp;center=48.786975,8.1936724&amp;zoom=19&amp;basemap=roadmap&amp;layer=traffic" target="_blank" rel="noopener noreferrer" class="gps-nav-app">
          <svg role="img" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z"/>
          </svg>
          <span>Google Maps</span>
        </a>&nbsp;
        <a alt="HERE Maps" href="https://share.here.com/r/mylocation/48.786975,8.1936724?m=d" target="_blank" rel="noopener noreferrer" class="gps-nav-app">
          <svg role="img" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.656 19.63l-3.304 3.295L.044 19.63zM11.49 12.108c-.69-.821-.656-1.264-.229-1.69.519-.52 1.047-.306 1.639.274zm7.08-8.993c.518-.519 1.046-.305 1.638.275l-1.41 1.41c-.692-.818-.659-1.258-.229-1.685zm4.271 1.44c-.643.962-1.742 2.52-2.929 1.343l2.97-2.97c-.266-.283-.47-.524-.611-.676-1.614-1.6-3.418-1.62-4.834-.214-.943.943-1.19 2.02-.915 3.051l-.916-1.065a1.935 1.935 0 0 0-.555 2.67l-1.065-.884-1.431 1.406 1.907 1.907c-1.474-1.168-3.051-1.055-4.34.217-1.363 1.361-1.269 3.012-.246 4.37l-.208-.205c-1.349-1.348-2.813-.872-3.54-.146-.561.561-.915 1.33-.762 1.867l-2.918-2.92-1.556 1.556 5.764 5.768h3.095l-2.078-2.09c-1.093-1.111-1.111-1.697-.58-2.225.53-.528 1.104-.192 2.151.851l2.054 2.05 1.562-1.543-1.95-1.947c1.404 1.062 3.088 1.12 4.577-.378l.028-.028a4.43 4.43 0 0 0 1.19-1.678l-1.169-.784c-.647.96-1.76 2.523-2.93 1.364l2.976-2.976 1.855 1.84 1.618-1.617-2.32-2.319c-1.083-1.083-.442-2.1 0-2.484a4.577 4.577 0 0 0 .916 1.27c1.501 1.504 3.439 1.806 5.145.106l.027-.027a4.434 4.434 0 0 0 1.19-1.678z"/>
          </svg>
          <span>HERE Maps</span>
        </a>&nbsp;
        <a alt="Google Waze" href="https://www.waze.com/ul?q=Ristorante%20Da%20Michele&amp;ll=48.786975,8.1936724&amp;navigate=yes" target="_blank" rel="noopener noreferrer" class="gps-nav-app">
          <svg role="img" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.314 1.59c-.225.003-.45.013-.675.03-2.165.155-4.295.924-6.069 2.327-2.194 1.732-3.296 4.325-3.496 7.05h.002c-.093 1.22-.23 2.15-.469 2.63-.238.479-.42.638-1.24.639C.27 14.259-.4 15.612.266 16.482c1.248 1.657 2.902 2.705 4.72 3.364a2.198 2.198 0 00-.033.367 2.198 2.198 0 002.2 2.197 2.198 2.198 0 002.128-1.668c1.307.12 2.607.14 3.824.1.364-.012.73-.045 1.094-.092a2.198 2.198 0 002.127 1.66 2.198 2.198 0 002.2-2.197 2.198 2.198 0 00-.151-.797 12.155 12.155 0 002.303-1.549c2.094-1.807 3.511-4.399 3.302-7.404-.112-1.723-.761-3.298-1.748-4.608-2.143-2.86-5.53-4.309-8.918-4.265zm.366 1.54c.312.008.623.027.933.063 2.48.288 4.842 1.496 6.4 3.577v.001c.829 1.1 1.355 2.386 1.446 3.792v.003c.173 2.477-.965 4.583-2.777 6.147a10.66 10.66 0 01-2.375 1.535 2.198 2.198 0 00-.98-.234 2.198 2.198 0 00-1.934 1.158 9.894 9.894 0 01-1.338.146 27.323 27.323 0 01-3.971-.148 2.198 2.198 0 00-1.932-1.156 2.198 2.198 0 00-1.347.463c-1.626-.553-3.078-1.422-4.155-2.762 1.052-.096 1.916-.6 2.319-1.408.443-.889.53-1.947.625-3.198v-.002c.175-2.391 1.11-4.536 2.92-5.964h.002c1.77-1.402 3.978-2.061 6.164-2.012zm-3.157 4.638c-.688 0-1.252.579-1.252 1.298 0 .72.564 1.297 1.252 1.297.689 0 1.252-.577 1.252-1.297 0-.711-.563-1.298-1.252-1.298zm5.514 0c-.688 0-1.25.579-1.25 1.298-.008.72.554 1.297 1.25 1.297.688 0 1.252-.577 1.252-1.297 0-.711-.564-1.298-1.252-1.298zM9.641 11.78a.72.72 0 00-.588.32.692.692 0 00-.11.54c.345 1.783 2.175 3.129 4.264 3.129h.125c1.056-.032 2.026-.343 2.816-.922.767-.556 1.29-1.316 1.477-2.137a.746.746 0 00-.094-.547.69.69 0 00-.445-.32.714.714 0 00-.867.539c-.22.93-1.299 1.9-2.934 1.94-1.572.046-2.738-.986-2.926-1.956a.72.72 0 00-.718-.586Z"/>
          </svg>
          <span>Google Waze</span>
        </a><br>
        <br>
        <br>
        <a href="https://www.facebook.com/pages/category/Italian-Restaurant/Pizzeria-Da-Michele-2293017134358842/" hreflang="en" target="_blank" rel="noopener noreferrer" class="contact-buttons">
          <svg role="img" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/>
          </svg>
          <span v-if="$lang == 'en-US'">Like us on Facebook</span>
          <span v-else>Like uns auf Facebook</span>
        </a>&nbsp;
        <a href="https://www.instagram.com/da_michele_badenbaden/" hreflang="en" target="_blank" rel="noopener noreferrer" class="contact-buttons">
          <svg role="img" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
          </svg>
          <span v-if="$lang == 'en-US'">Follow us on Instagram</span>
          <span v-else>Folge uns auf Instagram</span>
        </a>
      </div>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  name: 'Layout',
  components: {
    ParentLayout
  },
  computed: {
    defaultTheme() {
      const _overrideTheme = this.$themeConfig.overrideTheme
      const _prefersTheme = this.$themeConfig.prefersTheme
      const _noPreference =
        !window.matchMedia('(prefers-color-scheme: light)').matches &&
        !window.matchMedia('(prefers-color-scheme: dark)').matches
      if (typeof _overrideTheme === 'object') {
        const hours = new Date().getHours()
        let _key = false
        for (const key in _overrideTheme) {
          const value = _overrideTheme[key]
          if (value[0] <= value[1]) {
            if (value[0] <= hours && hours < value[1]) {
              _key = key
              break
            }
          } else {
            if ((value[0] <= hours && hours < 24) || (0 <= hours && hours < value[1])) {
              _key = key
              break
            }
          }
        }
        return _key
      } else if (typeof _overrideTheme === 'string') {
        return _overrideTheme
      } else if (_prefersTheme && _noPreference) {
        return _prefersTheme
      } else {
        return false
      }
    }
  },
  created () {
    if (this.$ssrContext) {
      const extra = `
<script type="application/ld+json">
{
    "@context": "http://schema.org",
    "@type": "Restaurant",
    "@id": "https://da-michele.com",
    "name": "Ristorante da Michele, Baden-Baden",
    "email": "info@da-michele.com",
    "author": {
        "@type": "Person",
        "name": "Vincenzo Romano"
    },
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sinzheimer Str. 4",
        "addressLocality": "Baden-Baden",
        "addressRegion": "Baden-Württemberg",
        "postalCode": "76532",
        "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.786975,
      "longitude": 8.1936724
    },
    "url": "https://da-michele.com/en/",
    "image": [
        "https://da-michele.com/search_preview.webp"
    ],
    "thumbnailUrl": "https://da-michele.com/logo.png",
    "logo": "https://da-michele.com/logo.png",
    "telephone": "+49722161541",
    "acceptsReservation": true,
    "servesCuisine": "Italian",
    "priceRange": "$$",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card, Debit Card",
    "smokingAllowed": false,
    "openingHoursSpecification": [
        {
            "@type": "openingHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "12:00",
            "closes": "14:00"
        },
        {
            "@type": "openingHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "17:30",
            "closes": "20:00"
        },
        {
            "@type": "openingHoursSpecification",
            "dayOfWeek": "Tuesday",
            "opens": "00:00",
            "closes": "00:00"
        }
    ],
    "menu": "https://da-michele.com/en/menu.html",
    "description": "The Ristorante da Michele offers a daily changing menu with fresh fish and meat dishes as well as the usual Italian classics.",
    "license": "MIT License"
}
<\/script>
      `;
      // this.$ssrContext.userHeadTags += extra
      this.$ssrContext.pageMeta += extra;
    }
  },
  beforeMount() {
    if (this.defaultTheme) {
      document.getElementsByTagName('html')[0].setAttribute('theme', this.defaultTheme)
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/components.styl'

.addressfooter
  background-color var(--kbdBgColor)
  padding 1.5rem 0rem

  a
    &.contact-buttons, &.footer-email, &.footer-phone, &.gps-nav-app, &.vcard
      background-color var(--blockquoteBorderColor)
      border-radius 4px
      color var(--textColor)
      display inline-block
      font-size 1.2rem
      padding .4rem .8rem
      box-sizing border-box
    span
      color var(--textColor)
    svg
      fill var(--textColor)

  address
    a
      color var(--textColor)
      svg
        fill var(--textColor)
        max-width 100%
</style>
