<i18n>
en:
  how: |-
    Plise click image to download.
    Select "Save Image" after long tap to image if cell phone.
ja:
  how: |-
    画像をクリックするとダウンロードします。
    スマートフォンの場合は、画像をロングタップしてメニューから画像を保存するを選択してください。
</i18n>

<template>
  <section class="container assets">
    <h2>Assets</h2>
    <p>{{ $t('how') }}</p>
    <p><a :href="assetsPath" class="assets-image"><img class="wallpaper" :src="assetsPath" /></a></p>
    <p class="backtohome"><nuxt-link :to="localePath('brand')" class="button">Back to Brand</nuxt-link></p>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  async asyncData({ params }: any) {
    const slug = params.slug
    return { assetsPath: require(`~/static/assets/${slug}.png`) }
  }
})
export default class PageAssets extends Vue {}
</script>

<style scoped>
.assets p {
  text-align: center;
}
img.wallpaper {
  max-width: 90%;
  max-height: 600px;
  border: 3px solid #fff;
}
a.assets-image {
  border: none;
}
</style>
