import type { EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

import CustomDocAfter from './components/CustomDocAfter.vue'
import CustomNavScreenContentBefore from './components/CustomNavScreenContentBefore.vue'
import CustomSidebarNavBefore from './components/CustomSidebarNavBefore.vue'
import CustomSidebarNavAfter from './components/CustomSidebarNavAfter.vue'

import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'
import VPSocialLink from 'vitepress/dist/client/theme-default/components/VPSocialLink.vue'

import MenuItems from '../components/menu/MenuItems.vue'

import HeroImage from '../components/global/HeroImage.vue'
import RistoranteAddress from '../components/global/RistoranteAddress.vue'

import './styles/custom.scss'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(CustomDocAfter),
      'nav-screen-content-before': () => h(CustomNavScreenContentBefore),
      'sidebar-nav-before': () => h(CustomSidebarNavBefore),
      'sidebar-nav-after': () => h(CustomSidebarNavAfter)
    })
  },
  enhanceApp(context: EnhanceAppContext) {
    context.app.component('VPButton', VPButton)
    context.app.component('VPSocialLink', VPSocialLink)

    context.app.component('MenuItems', MenuItems)

    context.app.component('HeroImage', HeroImage)
    context.app.component('RistoranteAddress', RistoranteAddress)
  }
}
