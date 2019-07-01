<i18n>
en:
  title: The Go Conference of a programming language Go, will be held in Fukuoka on July 13
  date: July 2, 2019
  press:
    to: 報道関係各位
    date: 2019年7月2日
    from: Go Conference運営委員会
  body1: |-
    プログラミング言語Go（以下、Go）に関する国内最大級のイベント「Go Conference'19 Summer in Fukuoka」が、来る7月13日（土）に、スタートアップで賑わうIT都市、福岡にて開催されます。
  body2: |-
    「Go Conference」は、2013年から開催し今年が7年目になります。今回は13回目のイベントとなり、「Go Conference」初めての地方開催を「エンジニアフレンドリーシティ」をうち出す福岡で行います。
    Goは、プログラミング言語として後発です。そのため、Goは他の言語にないユニークな特徴を持ち、分散システムを実現するコンテナ技術関連のソフトウェアに採用されるなど、多くの人を魅了しています。
    福岡のGoエンジニアはもちろん、東京をはじめ全国からの登壇者により全29セッションを予定しており、来場者は、150〜200名を見込んでおります。
  summary:
    title: カンファレンス概要
    body:
      - 名称：Go Conference'19 Summer in Fukuoka
      - 日時：2019年7月13日（土）
      - 会場：Fukuoka Growth Next（イベントホール、Startup Cafe）
      - 参加費：無料
      - 定員：200名
      - 主催：Go Conference'19 Summer in Fukuoka 運営委員会
      - 協賛：GMOペパボ、サーキュレーション、チームラボ、ディー・エヌ・エー、Fusic、ヌーラボ、メルカリ、アイキューブドシステムズ、LINE（申込み順）
      - 公式サイト：https://fukuoka.gocon.jp/
      - 申し込みサイト：https://fukuokago.connpass.com/event/130797/
ja:
  title: プログラミング言語Goの祭典「Go Conference」が7月13日に福岡で開催
  date: '2019-07-02'
  body1: |-
    プログラミング言語Go（以下、Go）に関する国内最大級のイベント「Go Conference'19 Summer in Fukuoka」が、来る7月13日（土）に、スタートアップで賑わうIT都市、福岡にて開催されます。
  body2: |-
    「Go Conference」は、2013年から開催し今年が7年目になります。今回は13回目のイベントとなり、「Go Conference」初めての地方開催を「エンジニアフレンドリーシティ」をうち出す福岡で行います。
    Goは、プログラミング言語として後発です。そのため、Goは他の言語にないユニークな特徴を持ち、分散システムを実現するコンテナ技術関連のソフトウェアに採用されるなど、多くの人を魅了しています。
    福岡のGoエンジニアはもちろん、東京をはじめ全国からの登壇者により全29セッションを予定しており、来場者は、150〜200名を見込んでおります。
  press:
    to: 報道関係各位
    date: 2019年7月2日
    from: Go Conference運営委員会
  summary:
    title: カンファレンス概要
    body:
      - 名称：Go Conference'19 Summer in Fukuoka
      - 日時：2019年7月13日（土）
      - 会場：Fukuoka Growth Next（イベントホール、Startup Cafe）
      - 参加費：無料
      - 定員：200名
      - 主催：Go Conference'19 Summer in Fukuoka 運営委員会
      - 協賛：GMOペパボ、サーキュレーション、チームラボ、ディー・エヌ・エー、Fusic、ヌーラボ、メルカリ、アイキューブドシステムズ、LINE（申込み順）
      - 公式サイト：https://fukuoka.gocon.jp/
      - 申し込みサイト：https://fukuokago.connpass.com/event/130797/
</i18n>

<template>
  <article class="blog">
    <h3 v-if="titleTag === 'h3'" class="blog-title"> <nuxt-link :to="permalink">{{ $t('title') }}</nuxt-link> </h3>
    <h2 class="blog-title" v-else>
      <span class="blog-index-link"><nuxt-link :to="indexlink">Blog</nuxt-link>/</span>{{ $t('title') }}
    </h2>
    <p class="date">{{ $t('date') }}</p>

    <p class="press-to">{{ $t('press.to') }}</p>
    <p class="press-date">{{ $t('press.date') }}</p>
    <p class="press-from">{{ $t('press.from') }}</p>
    <p>{{ $t('body1') }}</p>
    <p>{{ $t('body2') }}</p>

    <picture class="press-eyecatch">
      <img  class="eyecatch" src="https://fukuoka.gocon.jp/icons/ogimage.png" />
      <figcaption>Go Conference'19 Summer in Fukuokaのアイキャッチ画像</figcaption>
    </picture>

    <h4 v-if="titleTag === 'h3'" >{{ $t('summary.title') }}</h4>
    <h3 v-else>{{ $t('summary.title') }}</h3>

    <ul class="colored">
      <li v-for="l in $t('summary.body')">{{ l }}</li>
    </ul>
  </article>
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class PressRelease extends Vue {
  @Prop() public titleTag!: string

  get permalink(): string {
    return this.localePath({ name: 'blog-slug', params: { slug: 'press-release' } })
  }
  get indexlink(): string {
    return this.localePath({name: 'blog-slug'})
  }
}
</script>

<style scoped>
.press-to {
  font-weight: bold;
  margin: 0;
  padding: 0;
}
.press-date {
  text-align: right;
  margin: 0;
  padding: 0;
}
.press-from {
  text-align: right;
  margin-bottom: 1em;
}
.press-eyecatch {
  position: relative;
  width: 50%;
  margin: 2em auto 3em;
  display: block;
}
.press-eyecatch figcaption {
  padding-bottom: 1.5em;
  color: #666;
  font-size: .8em;
  font-weight: normal;
  font-style: italic;
  text-align: center;
  display: block;
  width: 100%;
}
.press-eyecatch img.eyecatch {
  width: 100%;
  height: auto;
  overflow: visible;
  padding-bottom: .2em;
  border: 3px solid #fff;
}
</style>
