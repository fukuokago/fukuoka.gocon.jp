<i18n>
en:
  desc: |-
    以下、会場のフロアマップになります。会場のことで何かわからないことがあれば、黒いT-ShirtsのFGNのスタッフにお尋ねください。
  1f: |-
    まず建物中央から入り、正面が受付となります。左手がStartup Cafeで、右手がFGNのイベントスペースになります。
    トイレは左右の端にあり、左側は男性トイレがなく多目的トイレになっています。また、喫煙スペースもその横テラスにあります。
  2f: |-
    ２階は、基本スピーカーが利用する控え室のみとなります。
ja:
  desc: |-
    以下、会場のフロアマップになります。会場のことで何かわからないことがあれば、黒いT-ShirtsのFGNのスタッフにお尋ねください。
  1f: |-
    まず建物中央から入り、正面が受付となります。左手がStartup Cafeで、右手がFGNのイベントスペースになります。
    トイレは左右の端にあり、左側は男性トイレがなく多目的トイレになっています。また、喫煙スペースもその横テラスにあります。
  2f: |-
    ２階は、基本スピーカーが利用する控え室のみとなります。
</i18n>

<template>
  <section class="venue">
    <h2>Venue</h2>
    <div class="container">
      <p>{{ $t('desc') }}</p>
    </div>
    <img class="venue-map" src="~/static/img/venue-map-1f.svg" />
    <div class="container">
      <p>{{ $t('1f') }}</p>
    </div>
    <img class="venue-map" src="~/static/img/venue-map-2f.svg" />
    <div class="container">
      <p>{{ $t('2f') }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Venue extends Vue {
}
</script>

<style scoped>
.venue-map {
  width: 100%;
  height: auto;
}
</style>
