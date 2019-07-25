<i18n>
en:
  title: 'fmt.Println("Bye Gophers")'
  date: 'July 25, 2019'
  body:
    - With a lot of cooperation, we were able to successfully finish the Go Conference's first regional event in Fukuoka.
      Although it was unfortunately rainy on the day, We are grateful to the many visitors coming from inside and outside the prefecture.
      All the members of the executive committee worked together to prepare for the event with the desire to create a conference with lots of learning and enjoyment.
      We think that there was a point that did not reach, but the voice “I was glad to participate” in the questionnaire is very encouraging.
      How was the content unique to Fukuoka, such as the platform of Mayor Takashima and the lunch map? In addition to the mission to make the event a success, the management actually had the back theme of conveying the attraction of Fukuoka.
      As far as judging from the atmosphere and Twitter of the place, We feel that you enjoyed the event.
      We hope that we can keep up the Go community in Fukuoka so that we can hold the Go Conference again in Fukuoka and we can enhance it.
      Thank you very much for all the sponsors and speakers who supported us.
      Then thank you for the autumn Go Conference!
      Bye Gophers! \ ʕ⊙౪⚆ʔ /
  report: Go to Event Report
ja:
  title: 'fmt.Println("またね ゴーファー")'
  date: '2019-07-25'
  body:
    - 多くのご協力のもと、Go Conference初の地方開催を福岡で無事に終えることができました。
      当日はあいにくの雨でしたが、県内外からたくさんのかたにお越しいただいたことに感謝しています。
      学びが多く、楽しめるカンファンレンスにしたいという思いをもって、実行委員一同で協力して準備を進めました。
      至らない点もあったかと思いますが、アンケートでいただいた「参加してよかった」という声はとても励みになります。
      高島市長の登壇、ランチマップなど、福岡ならではのコンテンツはいかがでしたでしょうか。
      運営は、イベントを成功させるミッション以外に、実は福岡の魅力を伝えるという裏テーマを持っていました。
      その場の雰囲気やTwitterから判断する限り、イベントを楽しんでいただけた気がしています。
      Go Conferenceをまた福岡で開催できるように、そしてパワーアップできるように、私たちは、今後も福岡のGoコミュニティを盛り上げていきたいと思っております。
      支えてくださったスポンサーや登壇者のみなさま、参加して一緒に盛り上げてくれたみなさま、本当にありがとうGoざいました。それでは、秋のGo Conferenceをよろしくお願いいたします！
      またね ゴーファー! \ʕ⊙౪⚆ʔ/
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
