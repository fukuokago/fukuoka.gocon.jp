<i18n>
en:
  title: 'fmt.Println("Bye Gophers")'
  date: 'July 25, 2019'
  body:
    - Go Conference '19 Summer in Fukuokaは盛況のうちに終えることが出来ました。
      このイベントを無事終えることが出来たのも、関わって頂いた方全員のご協力のおかげです。
      ご参加頂きました、登壇者、スポンサー、スタッフ、参加者の皆様ありがとうございました。
      早速ですが、イベントレポートを作成しました。是非御覧ください。
      皆様とまたお会いできる事を楽しみにしております！
      またね ゴーファー！
  report: Go to Event Report
ja:
  title: 'fmt.Println("またね ゴーファー")'
  date: '2019-07-25'
  body:
    - Go Conference '19 Summer in Fukuokaは盛況のうちに終えることが出来ました。
      このイベントを無事終えることが出来たのも、関わって頂いた方全員のご協力のおかげです。
      ご参加頂きました、登壇者、スポンサー、スタッフ、参加者の皆様ありがとうございました。
      早速ですが、イベントレポートを作成しました。是非御覧ください。
      皆様とまたお会いできる事を楽しみにしております！
      またね ゴーファー！

  report: イベントレポートを見る
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
      <nuxt-link class="button is-inverted is-outlined" :to="localePath('report')">{{ $t('report') }}</nuxt-link>
    </p>
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class LunchMap extends Vue {
  @Prop() public titleTag!: string

  get permalink(): string {
    return this.localePath({ name: 'blog-slug', params: { slug: 'thanks-bye' } })
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
