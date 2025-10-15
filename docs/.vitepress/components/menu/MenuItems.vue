<script setup lang="ts">
import MenuItemFood from './MenuItemFood.vue'
import MenuItemDrink from './MenuItemDrink.vue'
import { data } from './menu.data.ts'

import { useData } from 'vitepress'
const { lang } = useData()
</script>

<template>
  <h2 id="antipasti" tabindex="-1"><a class="header-anchor" href="#antipasti" aria-label="Permalink to Antipasti"></a> Antipasti</h2>
  <blockquote>
    <p v-if="lang == 'en-US'">Starters</p>
    <p v-else>Vorspeisen</p>
  </blockquote>
  <MenuItemFood
    v-for="item in data.antipasti"
    :food="item"
  ></MenuItemFood>
  <h2 id="pesce" tabindex="-1"><a class="header-anchor" href="#pesce" aria-label="Permalink to Pesce"></a> Pesce</h2>
  <template v-if="lang == 'en-US'">
    <blockquote>
      <p>Fish</p>
    </blockquote>
    <div class="info custom-block">
      <p class="custom-block-title">Note</p>
      <p>As a sidedish we either serve pasta or braised vegetables.</p>
    </div>
  </template>
  <template v-else>
    <blockquote>
      <p>Fisch</p>
    </blockquote>
    <div class="info custom-block">
      <p class="custom-block-title">Hinweis</p>
      <p>Als Beilage servieren wir Pasta oder geschmortes Gemüse.</p>
    </div>
  </template>
  <MenuItemFood
    v-for="item in data.pesce"
    :food="item"
  ></MenuItemFood>
  <h2 id="carne" tabindex="-1"><a class="header-anchor" href="#carne" aria-label="Permalink to Carne"></a> Carne</h2>
  <template v-if="lang == 'en-US'">
    <blockquote>
      <p>Meat</p>
    </blockquote>
    <div class="info custom-block">
      <p class="custom-block-title">Note</p>
      <p>As a sidedish we either serve pasta or braised vegetables.</p>
    </div>
  </template>
  <template v-else>
    <blockquote>
      <p>Fleisch</p>
    </blockquote>
    <div class="info custom-block">
      <p class="custom-block-title">Hinweis</p>
      <p>Als Beilage servieren wir Pasta oder geschmortes Gemüse.</p>
    </div>
  </template>
  <MenuItemFood
    v-for="item in data.carne"
    :food="item"
  ></MenuItemFood>
<!--
  <h2 id="riso" tabindex="-1"><a class="header-anchor" href="#riso" aria-label="Permalink to Riso"></a> Riso</h2>
  <blockquote>
    <p v-if="lang == 'en-US'">Rice</p>
    <p v-else>Reis</p>
  </blockquote>
  <MenuItemFood
    v-for="item in data.riso"
    :food="item"
  ></MenuItemFood>
-->
  <h2 id="pasta" tabindex="-1"><a class="header-anchor" href="#pasta" aria-label="Permalink to Pasta"></a> Pasta</h2>
  <template v-if="lang == 'en-US'">
    <blockquote>
      <p>Noodles</p>
    </blockquote>
    <div class="info custom-block">
      <p class="custom-block-title">Note</p>
      <p>We also serve gluten free pasta.</p>
    </div>
  </template>
  <template v-else>
    <blockquote>
      <p>Nudeln</p>
    </blockquote>
    <div class="info custom-block">
      <p class="custom-block-title">Hinweis</p>
      <p>Wir servieren auch glutenfreie Pasta.</p>
    </div>
  </template>
  <MenuItemFood
    v-for="item in data.pasta"
    :food="item"
  ></MenuItemFood>
  <h2 id="pizze" tabindex="-1"><a class="header-anchor" href="#pizze" aria-label="Permalink to Pizze"></a> Pizze</h2>
  <blockquote>
    <p v-if="lang == 'en-US'">Pizza</p>
    <p v-else>Pizza</p>
  </blockquote>
  <MenuItemFood
    v-for="item in data.pizze"
    :food="item"
  ></MenuItemFood>
<!--
  <h2 id="dolci" tabindex="-1"><a class="header-anchor" href="#dolci" aria-label="Permalink to Dolci"></a> Dolci</h2>
  <blockquote>
    <p v-if="lang == 'en-US'">Desserts</p>
    <p v-else>Nachspeisen</p>
  </blockquote>
  <MenuItemFood
    v-for="item in data.dolci"
    :food="item"
  ></MenuItemFood>
-->
  <h2 id="vinobianco" tabindex="-1"><a class="header-anchor" href="#vinobianco" aria-label="Permalink to Vino bianco"></a> Vino bianco</h2>
  <blockquote>
    <p v-if="lang == 'en-US'">White wine</p>
    <p v-else>Weißwein</p>
  </blockquote>
  <MenuItemDrink
    v-for="item in data.vinobianco"
    :drink="item"
  ></MenuItemDrink>
  <h2 id="vinorosato" tabindex="-1"><a class="header-anchor" href="#vinorosato" aria-label="Permalink to Vino rosato"></a> Vino rosato</h2>
  <blockquote>
    <p v-if="lang == 'en-US'">Rosé wine</p>
    <p v-else>Roséwein</p>
  </blockquote>
  <MenuItemDrink
    v-for="item in data.vinorosato"
    :drink="item"
  ></MenuItemDrink>
  <h2 id="vinorosso" tabindex="-1"><a class="header-anchor" href="#vinorosso" aria-label="Permalink to Vino rosso"></a> Vino rosso</h2>
  <blockquote>
    <p v-if="lang == 'en-US'">Red wine</p>
    <p v-else>Rotwein</p>
  </blockquote>
  <MenuItemDrink
    v-for="item in data.vinorosso"
    :drink="item"
  ></MenuItemDrink>
  <h2 id="vinospumante" tabindex="-1"><a class="header-anchor" href="#vinospumante" aria-label="Permalink to Vino spumante"></a> Vino spumante</h2>
  <blockquote>
    <p v-if="lang == 'en-US'">Sparkling wine</p>
    <p v-else>Schaumwein</p>
  </blockquote>
  <MenuItemDrink
    v-for="item in data.vinospumante"
    :drink="item"
  ></MenuItemDrink>
</template>
