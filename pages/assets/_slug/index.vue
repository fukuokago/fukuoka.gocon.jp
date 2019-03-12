<i18n>
en:
  how: Please select "save image" for Assets.
ja:
  how: 画像長押しから保存するを選択してください。
</i18n>

<template>
  <section class="assets">
    <h2>Assets</h2>
    <p><a :href="assetsPath" class="assets-image"><img class="wallpaper" :src="assetsPath" /></a></p>
    <p>{{ $t('how') }}</p>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  async asyncData({ params }) {
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
  width: 20%;
  height: 20%;
  border: 3px solid #fff;
}
a.assets-image {
  border: none;
}
</style>
