<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import type { Drink } from './menu.data'

const { lang } = useData()

withDefaults(
  defineProps<{
    drink: Drink
  }>(),
  {
    drink: {
      desc: null,
      show: false,
      img: null
    }
  }
)
</script>

<template>
  <template v-if="drink.show === true">
    <div :class="$style.menuitemdrink">
      <h3 :id="drink.anchor" tabindex="-1"><a class="header-anchor" :href="'#' + drink.anchor" :aria-label="'Permalink to ' + drink.name"></a> {{ drink.name }}</h3>
      <table>
        <tbody>
          <tr>
            <td width="25%" style="background-color: var(--vp-c-text-3)">
              <img v-if="drink.img" :src="withBase('/images/menu/' + drink.img)" :alt="drink.name" decoding="async" loading="lazy">
            </td>
            <td>
              <ul>
                <li v-if="drink.region">Region: {{ drink.region }}</li>
                <li v-if="drink.winery && lang == 'en-US'">Winery: {{ drink.winery }}</li>
                <li v-else-if="drink.winery && lang == 'de-DE'">Weingut: {{ drink.winery }}</li>
                <li v-if="drink.grapes && lang == 'en-US'">Grapes: {{ drink.grapes }}</li>
                <li v-else-if="drink.grapes && lang == 'de-DE'">Rebsorte: {{ drink.grapes }}</li>
                <li v-if="drink.bottlesize && lang == 'en-US'">Bottle size: {{ drink.bottlesize }}mL</li>
                <li v-else-if="drink.bottlesize && lang == 'de-DE'">Flaschengröße: {{ drink.bottlesize }}mL</li>
                <li v-if="drink.alcoholcontent && lang == 'en-US'">Alcohol content: {{ drink.alcoholcontent }}%</li>
                <li v-else-if="drink.alcoholcontent && lang == 'de-DE'">Alkoholgehalt: {{ drink.alcoholcontent }}%</li>
              </ul>
            </td>
          </tr>
          <tr v-if="drink.desc">
            <td colspan="2">
              <p v-if="drink.desc.en && lang == 'en-US'">{{ drink.desc.en }}</p>
              <p v-else-if="drink.desc.de && lang == 'de-DE'">{{ drink.desc.de }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
</template>

<style module lang="scss">
.menuitemdrink {
}
</style>
