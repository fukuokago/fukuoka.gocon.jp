<i18n>
en:
  title: 'Released brand kit'
  date: 'Mar 13, 2019'
  body: |-
    We was released brand kit for this event.
    Brand kit included logo data and wallpaper. We will add more.
    And guidelines for assets using is nothing. So use freely.
  button: Go to Brand page
ja:
  title: 'ブランドキットを公開しました'
  date: '2019-03-13'
  body: |-
    このイベントのブランドキットを公開しました。
    具体的にはイベントのロゴデータやメインビジュアルの壁紙になります。おそらく今後これらは追加していく予定です。
    なお、利用のためのガイドラインは設けいていないので自由に使って大丈夫です。
  button: Brandページへ
</i18n>

<template>
  <article class="blog">
    <h3 v-if="titleTag === 'h3'" class="blog-title"> <nuxt-link :to="permalink">{{ $t('title') }}</nuxt-link> </h3>
    <h2 v-else class="blog-title"> {{ $t('title') }} </h2>
    <p class="date">{{ $t('date') }}</p>
    <p>{{ $t('body') }}</p>
    <nuxt-link :to="localePath('brand')" class="button is-inverted is-outlined">{{ $t('button') }}</nuxt-link>
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class BrandKitReleases extends Vue {
  @Prop() public titleTag!: string
  get permalink(): string {
    return this.localePath({ name: 'blog-slug', params: { slug: 'brand-kit-releases' } })
  }
}
</script>
