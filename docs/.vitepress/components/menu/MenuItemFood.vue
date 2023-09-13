<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import type { Food } from './menu.data'

const { lang } = useData()

withDefaults(
  defineProps<{
    food: Food
  }>(),
  {
    food: {
      desc: null,
      show: false,
      tags: null,
      img: null
    }
  }
)
</script>

<template>
  <template v-if="food.show === true">
    <div :class="$style.menuitemfood">
      <h3 :id="food.anchor" tabindex="-1"><a class="header-anchor" :href="'#' + food.anchor" :aria-label="'Permalink to ' + food.name"></a> {{ food.name }} <template v-if="food.tags"><Badge v-if="food.tags.includes('vegan')" type="info" text="vegan" /><Badge v-if="food.tags.includes('vegetarian') && lang == 'en-US'" type="info" text="vegetarian" /><Badge v-else-if="food.tags.includes('vegetarian') && lang == 'de-DE'" type="info" text="vegetarisch" /></template></h3>
      <p v-if="food.img">
        <img v-if="food.img" :src="withBase('/images/menu/' + food.img)" :alt="food.name" decoding="async" loading="lazy">
      </p>
      <blockquote v-if="food.desc">
        <p v-if="food.desc.en && lang == 'en-US'">{{ food.desc.en }}</p>
        <p v-else-if="food.desc.de && lang == 'de-DE'">{{ food.desc.de }}</p>
      </blockquote>
      <p v-if="food.priceeuro">{{ food.priceeuro }} €</p>
    </div>
  </template>
</template>

<style module lang="scss">
.menuitemfood {
  p img {
    margin: 0.5rem 0.5rem 0rem 0.5rem;
    box-sizing: border-box;
    border-radius: 10px;
  }
}
</style>
