<template>
  <div :class="$style.addressristorante">
    <address>
      Ristorante Da Michele<br>
      Inhaber: <strong>Vincenzo Romano</strong><br>
      Rheinstr. 109<br>
      76532 Baden-Baden<br>
      Tel. <a href="tel:+49722161541" target="_blank" rel="noopener noreferrer">07221 - 61541</a>
    </address>
  </div>
</template>

<style module lang="scss">
.addressristorante {
  address {
    font-style: normal;

    a {
      text-decoration: underline;
    }
  }
}
</style>
