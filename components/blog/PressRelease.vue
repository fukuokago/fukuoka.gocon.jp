<i18n>
en:
  title: The Go Conference of a programming language Go, will be held in Fukuoka on July 13
  date: July 2, 2019
  press: For Immediate Release
  contact:
    title: 'Contact Information:'
    name: Go Conference'19 Summer in Fukuoka Committee
    address: 2-7-21 Tenjin, Chuo-ku, Fukuoka, Japan 810-0001
  subhead: |-
    Go Conference '19 Summer in Fukuoka, Japan's largest event on Go, a programming language, will be held on July 13, 2019 (Sat) in Fukuoka.
  body: |-
    The Go Conference has been held since 2013, and this is the seventh year.
    This is the 13th time this year's first local event will be held in Fukuoka,
    where The Engineer Friendly City Fukuoka*1 will be unveiled.
    Go attracts many engineers, including unique features not found in other programming languages*2 and container technology-related software that realizes distributed systems*3.
    A total of 29 sessions are scheduled by the Go engineers in Fukuoka, as well as by speakers from around the country,
    including Tokyo, and the number of visitors is expected to be 150-200.
  annotation:
    - 1：Efforts that lead to visualization of the engineer community, increased motivation for engineers, and collaboration between engineers and companies, schools, and students in multiple industries. https://efc.isit.or.jp/about
    - 2：Go was developed by Google and released as open source in 2009. Simple, reliable and efficient software construction. https://golang.org/
    - 3：Go is used to implement Docker, Kubernetes, and Prometheus, which support distributed systems.
  caption: A image of Go Conference'19 Summer in Fukuoka
  summary:
    title: Overview of Conference
    body:
      - Name：Go Conference'19 Summer in Fukuoka
      - Date：Saturday July 13th, 2019
      - Venue：Fukuoka Growth Next (Event hall, Startup Cafe)
      - Fee：Free
      - Capacity：200 seats
      - Organizer：Go Conference'19 Summer in Fukuoka Committee
      - Sponsores：GMO Pepabo, Circulation, teamLab, DeNA, Fusic, Nulab, Mercari, i³Systems and LINE
      - Official：https://fukuoka.gocon.jp/
      - Join：https://fukuokago.connpass.com/event/130797/
ja:
  title: プログラミング言語Goに関する技術会議「Go Conference」が7月13日に福岡で開催
  date: '2019-07-02'
  press: 報道関係各位
  contact:
    title: お問い合わせ先
    name: Go Conference'19 Summer in Fukuoka 運営委員会（GMOペパボ内）
    address: 810-0001 福岡市中央区天神2-7-21 天神プライム8F
  subhead: |-
    プログラミング言語Go（以下、Go）に関する国内最大級のイベント「Go Conference'19 Summer in Fukuoka」が、2019年7月13日（土）に、福岡で開催されます。
  body: |-
    「Go Conference」は、2013年から開催し今年が7年目になります。13回目となる今回、初めての地方開催を「エンジニアフレンドリーシティ*1」をうち出す福岡で行います。
    Goは、他のプログラム言語にないユニークな特徴を持ち*2、分散システムを実現するコンテナ技術関連のソフトウェアに採用されるなど*3、多くのエンジニアを魅了しています。
    福岡のGoエンジニアはもちろん、東京をはじめ全国からの登壇者により全29セッションを予定しており、来場者は、150〜200名となる見込みです。
  annotation:
    - 注1：エンジニアコミュニティの見える化や、エンジニアのモチベーションアップ、また、エンジニアと多業種の企業や学校、学生との連携等に繋がる取組み。 https://efc.isit.or.jp/about
    - 注2：GoはGoogleによって開発され2009年にオープンソースとして公開された。シンプルで信頼性があり、効率的にソフトウェアを構築することができる。 https://golang.org/
    - 注3：分散システムを支えるDockerやKubernetes、Prometheusの実装にGoが使われている。
  caption: Go Conference'19 Summer in Fukuokaのアイキャッチ画像
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
      - 公式サイト：https://fukuoka.gocon.jp/ja/
      - 申し込みサイト：https://fukuokago.connpass.com/event/130797/
</i18n>

<template>
  <article class="blog">
    <h3 v-if="titleTag === 'h3'" class="blog-title"> <nuxt-link :to="permalink">{{ $t('title') }}</nuxt-link> </h3>
    <h2 class="blog-title" v-else>
      <span class="blog-index-link"><nuxt-link :to="indexlink">Blog</nuxt-link>/</span>{{ $t('title') }}
    </h2>
    <p class="date">{{ $t('date') }}</p>

    <section class="press-release">
      <p class="press">{{ $t('press') }}</p>

      <div class="press-contact-info">
        <h4 class="press-contact-info--h4">{{ $t('contact.title') }}</h4>
        <p class="press-contact-info--p">{{ $t('contact.name') }}</p>
        <p class="press-contact-info--p">{{ $t('contact.address') }}</p>
        <p class="press-contact-info--p">fu&#107;&#117;&#111;&#107;&#97;&#64;g&#111;c&#111;n.&#106;&#112;</p>
      </div>

      <p class="press-title">{{ $t('title') }}</p>

      <p class="press-subhead">{{ $t('subhead') }}</p>

      <p class="press-body">{{ $t('body') }}</p>

      <ul class="press-annotation">
        <li v-for="v in $t('annotation')">{{ v }}</li>
      </ul>

      <picture class="press-eyecatch">
        <img  class="eyecatch" src="https://fukuoka.gocon.jp/icons/ogimage.png" />
        <figcaption>{{ $t('caption') }}</figcaption>
      </picture>

      <h4 v-if="titleTag === 'h3'" >{{ $t('summary.title') }}</h4>
      <h3 v-else>{{ $t('summary.title') }}</h3>

      <ul class="colored">
        <li v-for="l in $t('summary.body')">{{ l }}</li>
      </ul>

      <p class="press-end">***</p>
    </section>
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
.press-release {
  background-color: #fff;
  padding: 6em 4em 0;
  opacity: 0.7;
}
.press {
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  color: #00ADD8;
  font-size: .9em;
}
.press-contact-info {
  text-align: left;
  font-size: .85em;
  margin: 1em 0 3em auto;
  display: table;
}
.press-contact-info--h4 {
  margin: 0 0 .5em;
  padding: 0;
}
.press-contact-info--p {
  font-size: 1em;
  margin: 0;
  padding: 0;
}
.press-title {
  font-weight: bold;
  padding: 1.5em 0 3em;
  text-align: center;
  margin: 0 auto;
  color: #000;
}
.press-subhead {
  color: #000;
  padding-bottom: 3em;
}
.press-subhead:after {
  content: ' ';
  border-bottom: 1px dashed #ccc;
  display: block;
  width: 50%;
  margin: 3em auto 0;
}
.press-annotation {
  font-size: .8em;
}
.press-eyecatch {
  position: relative;
  width: 50%;
  margin: 3em auto 2em;
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
.press-end {
  text-align: center;
  padding: 2em 0 3em;
  color: #ccc;
  letter-spacing: 1em;
}
</style>
