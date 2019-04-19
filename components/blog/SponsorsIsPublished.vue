<i18n>
en:
  title: 'Sponsors is published'
  date: 'Apr 19, 2019'
  body:
    - We published that our sponsorship companies.
    - |-
      Thank you some companies for sponsorship.
      We are still calling for sponsors because there is empty in sponsorship menu.
      And you can have a proposals other than the sponsor menu.
      Please contact to us.
    - It will be another week until the CFP deadline. Please feel free to register just the title and outline.
  button:
    - Sponsors
    - Subbmit to CFP
ja:
  title: 'スポンサーを公開しました'
  date: '2019-04-19'
  body:
    - 私たちとスポンサーシップを結んでいただいた企業を公開しました。
    - |-
      まずは、スポンサーシップにお申込みいただきました企業様または担当者様、誠にありがとうございます。
      そして、スポンサーメニュー枠にまだ空きがあります。
      このカンファレンスは、スポンサーやボランティアのご協力のもと、盛り上げていきたいと思っていますので、どうぞ宜しくお願い申し上げます！
      また、スポンサーメニューにないご提案も受け付けておりますので、お気軽にお問い合わせいただけると嬉しいです。
    - CFPの締め切りまで、あと1週間ほどとなっております。タイトルやアウトラインだけでも良いので気軽に登録してくださいね！
  button:
    - スポンサーをみる
    - CFPに応募する
</i18n>

<template>
  <article class="blog">
    <h3 v-if="titleTag === 'h3'" class="blog-title"> <nuxt-link :to="permalink">{{ $t('title') }}</nuxt-link> </h3>
    <h2 v-else class="blog-title"> {{ $t('title') }} </h2>
    <p class="date">{{ $t('date') }}</p>
    <p v-for="(v) in $t('body')">{{ v }}</p>
    <nuxt-link :to="localePath('sponsors')" class="button is-inverted is-outlined">{{ $t('button.0') }}</nuxt-link>
    <a href="https://www.papercall.io/gocon-jp-2019-fukuoka" class="button is-inverted is-outlined">{{ $t('button.1') }}</a>
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class SponsorsIsPublished extends Vue {
  @Prop() public titleTag!: string
  get permalink(): string {
    return this.localePath({ name: 'blog-slug', params: { slug: 'sponsors-is-published' } })
  }
}
</script>
