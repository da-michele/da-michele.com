<script setup lang="ts">
import { useData, withBase } from 'vitepress'
const { lang } = useData()
</script>

<template>
  <div :class="$style.customsidebarnavbefore" align="center">
    <br>
    <HeroImage />
    <br>
    <VPButton
      tag="a"
      size="medium"
      theme="brand"
      text="Tel. 07221-61541"
      href="tel:+49722161541"
      target="_blank"
      rel="noopener noreferrer"
    />
    <br>
    <br>
    <VPButton
      tag="a"
      size="medium"
      theme="alt"
      :text="lang == 'en-US' ? 'Download vCard' : 'Visitenkarte herunterladen'"
      :href="withBase(lang == 'en-US' ? '/en/vcards/Da_Michele_Baden-Baden.vcf' : '/vcards/Da_Michele_Baden-Baden.vcf')"
      target="_blank"
      rel="noopener noreferrer"
    />
  </div>
</template>

<style module lang="scss">
.customsidebarnavbefore {
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 40px;
  margin-bottom: 15px;
}
</style>
