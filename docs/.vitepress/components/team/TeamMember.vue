<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import type { TeamMember } from './team.data'

const { lang } = useData()

withDefaults(
  defineProps<{
    teammember: TeamMember
  }>(),
  {
    teammember: {
      show: false,
      desc: null,
      img: null,
      links: null
    }
  }
)
</script>

<template>
  <template v-if="teammember.show === true">
    <h3 :id="teammember.anchor" tabindex="-1"><a class="header-anchor" :href="'#' + teammember.anchor" :aria-label="'Permalink to ' + teammember.name"></a> {{ teammember.name }}</h3>
    <blockquote v-if="teammember.desc">
      <p v-if="teammember.desc.en && lang == 'en-US'">{{ teammember.desc.en }}</p>
      <p v-else-if="teammember.desc.de && lang == 'de-DE'">{{ teammember.desc.de }}</p>
<!--
      <p><VPSocialLink v-if="teammember.links" v-for="{ icon, link } in teammember.links" :icon="icon" :link="link" /></p>
-->
    </blockquote>
  </template>
</template>
