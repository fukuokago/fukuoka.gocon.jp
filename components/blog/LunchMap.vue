<i18n>
en:
  title: 'Lunch map is released.'
  date: 'June 16, 2019'
  body:
    - We has released a lunch map which lists our recommendation restaurants for lunch!
    - Our event "Go Conference 19 Summer in Fukuoka" hopes you to learn from each other through Go and to have fun at Fukuoka.
      Let's enjoy tasty foods at Fukuoka!
      (By the way, My recommendations are Hacchan ramen, Kubo-curry, Matsushima and Kibun).
    - We welcome to attend from distance.
      We are looking forward your apply while make increase slots for distance.
ja:
  title: 'ランチマップを公開しました'
  date: '2019-06-18'
  body:
    - 会場近くでランチがオススメの飲食店をランチマップとしてまとめました。
    - Go Conference'19 Summer in Fukuokaでは、Goを通じて様々な技術を学び合うと同時に、楽しい時間を過ごしてもらいたいと考えています。
      ぜひ福岡の美味しいご飯も堪能してください。
      （ちなみに私のオススメは、はっちゃんラーメン、クボカリー、松島、紀文です！）
    - このイベントでは遠方からの参加を歓迎しております。
      Goを肴に福岡で楽しい時間を過ごしてみませんか？あなたの参加登録を遠方枠を増やしてお待ちしています！
  lunchmap: ランチマップへ
  registration: 参加登録の案内へ
</i18n>

<template>
  <article class="blog">
    <h3 v-if="titleTag === 'h3'" class="blog-title"> <nuxt-link :to="permalink">{{ $t('title') }}</nuxt-link> </h3>
    <h2 class="blog-title" v-else>
      <span class="blog-index-link"><nuxt-link :to="indexlink">Blog</nuxt-link>/</span>{{ $t('title') }}
    </h2>
    <p class="date">{{ $t('date') }}</p>

    <p v-for="p in $t('body')">{{ p }}</p>
    <p class="anchors">
      <nuxt-link class="button is-inverted is-outlined" :to="localePath('lunchmap')">{{ $t('lunchmap') }}</nuxt-link>
      <nuxt-link class="button is-inverted is-outlined" :to="localePath('registration')">{{ $t('registration') }}</nuxt-link>
    </p>
  </article>
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class LunchMap extends Vue {
  @Prop() public titleTag!: string

  get permalink(): string {
    return this.localePath({ name: 'blog-slug', params: { slug: 'lunch-map' } })
  }
  get indexlink(): string {
    return this.localePath({name: 'blog-slug'})
  }
}
</script>

<style scoped>
.anchors a {
  margin-bottom: 1em;
  margin-right: 1em;
}
</style>
