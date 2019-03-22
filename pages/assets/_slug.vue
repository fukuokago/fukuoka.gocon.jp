<i18n>
en:
  how: |-
    Plise click image to download.
    Select "Save Image" after long tap to image if cell phone.
ja:
  how: |-
    画像をクリックするとダウンロードします。
    スマートフォンの場合は、画像をロングタップしてメニューから"イメージを保存"を選択してください。
</i18n>

<template>
  <section class="container assets">
    <h2>Assets &#8811; {{ name }}</h2>
    <p>{{ $t('how') }}</p>
    <p><a :href="downloadPath" class="assets-image"><img class="wallpaper" :src="assetsPath" /></a></p>
    <p class="backtohome"><nuxt-link :to="localePath('brand')" class="button">Back to Brand</nuxt-link></p>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PageAssets extends Vue {
  private async asyncData({ params }: any) {
    const kepabToPascal = ((s: string) => {
      return s.replace(/(^\w|\-\w)/g, (m) => {
        return m.length === 1 ? m[0].toUpperCase() : ` ${m[1].toUpperCase()}`
      })
    })
    const slug = params.slug
    return {
      name: kepabToPascal(slug),
      assetsPath: require(`~/static/download/${slug}.png`),
      downloadPath: `/download/${slug}.png`
    }
  }
}
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
