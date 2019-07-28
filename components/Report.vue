<i18n>
en:
  desc: |-
    Go Conference'19 Summer in Fukuokaの開催レポートです。
    参加者へのアンケートを集計した結果や、カメラマン{atani}によるイベントの写真を掲載いたします。
    総括は{blog}に書いています。ぜひご覧ください。
    また、{schedule}のタイトルリンクから表示される登壇者詳細のページに、
    ほぼ全ての発表スライドが埋め込まれています。参加できなかった方にご覧いただければと思います。
  overview:
    venue:
      title: 会場
      body: Growth Next Fukuoka と 福岡市Startup Cafe
    date:
      title: 日時
      body: "2019年07月13日(土) 09:30 から {last} 19:30 まで"
    attendee:
      title: 参加者数
      body: "{limit} 157人（登壇者やスタッフ含む）"
    note: 当日はあいにくの☔️（お昼前後は土砂降りに近い）で、キャンセルや無断欠席がありました。スペシャルセッションには、福岡市の{mayor}が登壇しました。イベント終了後、シームレスに懇親会を開催できました。懇親会では、LT大会などで盛り上がり予定より終了時刻を30分延長しました。
  gophers-go: 最後にダサく「Go~!」って撮ったGopher集合写真。意外とみんな笑顔。
  scholarship: スカラーシッププログラムを実施し、全国から選ばれた学生３名が参加し、アウトプットとしてブログを書いてくれました。是非ご覧ください。
  blog: いろんな方がブログに、登壇報告やスタッフの感想などを書いてくれています。中にはイベントに刺激を受けてCLIツールを作ったという記事があり、主催者としては嬉しい限りです。
  tweet: イベントが盛り上がったのがわかるTweetを独断と偏見でピックアップしておきます。
  survey:
    rate: 回答率
    desc: イベント参加者にアンケートを実施し集計した結果です。回答率は約5割。セッション数が多いイベントのため、スピーカーやスポンサースタッフの数も多い結果となっています。
  summary: 総括を見る
ja:
  desc: |-
    Go Conference'19 Summer in Fukuokaの開催レポートです。
    参加者へのアンケートを集計した結果や、カメラマン{atani}によるイベントの写真を掲載いたします。
    総括は{blog}に書いています。ぜひご覧ください。
    また、{schedule}のタイトルリンクから表示される登壇者詳細のページに、
    ほぼ全ての発表スライドが埋め込まれています。参加できなかった方にご覧いただければと思います。
  overview:
    venue:
      title: 会場
      body: Growth Next Fukuoka と 福岡市Startup Cafe
    date:
      title: 日時
      body: "2019年07月13日(土) 09:30 から {last} 19:30 まで"
    attendee:
      title: 参加者数
      body: "{limit} 157人（登壇者やスタッフ含む）"
    note: 当日はあいにくの☔️（お昼前後は土砂降りに近い）で、キャンセルや無断欠席がありました。スペシャルセッションには、福岡市の{mayor}が登壇しました。イベント終了後、シームレスに懇親会を開催できました。懇親会では、LT大会などで盛り上がり予定より終了時刻を30分延長しました。
  gophers-go: 最後にダサく「Go~!」って撮ったGopher集合写真。意外とみんな笑顔。
  scholarship: スカラーシッププログラムを実施し、全国から選ばれた学生３名が参加し、アウトプットとしてブログを書いてくれました。是非ご覧ください。
  blog: いろんな方がブログに、登壇報告やスタッフの感想などを書いてくれています。中にはイベントに刺激を受けてCLIツールを作ったという記事があり、主催者としては嬉しい限りです。
  tweet: イベントが盛り上がったのがわかるTweetを独断と偏見でピックアップしておきます。
  survey:
    rate: 回答率
    desc: イベント参加者にアンケートを実施し集計した結果です。回答率は約5割。セッション数が多いイベントのため、スピーカーやスポンサースタッフの数も多い結果となっています。
  summary: 総括を見る
</i18n>

<template>
  <section class="report">
    <h2>Report</h2>
    <div class="container">
      <i18n path="desc" tag="p">
        <a place="atani" href="https://twitter.com/atani">@atani</a>
        <nuxt-link place="blog" :to="localePath({ name: 'blog-slug', params: { slug: 'thanks-bye' }})">Blog</nuxt-link>
        <nuxt-link place="schedule" :to="localePath('schedule')">Schedule</nuxt-link>
      </i18n>
    </div>

    <picture class="gophers-photo">
      <figure class="gophers-go">
        <div class="gophers-photo--inner">
          <source type="image/webp" srcset="~static/img/gocon-gophers.webp">
          <img class="eyecatch" src="~assets/img/gocon-gophers.jpg" alt="Gophers" />
        </div>
        <figcaption>{{ $t('gophers-go') }}</figcaption>
      </figure>
    </picture>

    <div class="container">
      <h3>Overview 🎪</h3>
      <dl class="dl-table">
        <dt>{{ $t('overview.venue.title') }}</dt>
        <dd>{{ $t('overview.venue.body') }}</dd>
        <dt>{{ $t('overview.date.title') }}</dt>
        <i18n path="overview.date.body" tag="dd">
          <s place="last">19:00</s>
        </i18n>
        <dt>{{ $t('overview.attendee.title') }}</dt>
        <i18n path="overview.attendee.body" tag="dd">
          <s place="limit">200</s>
        </i18n>
      </dl>
      <i18n path="overview.note" tag="p">
        <nuxt-link place="mayor" :to="localePath({ name: 'speakers-slug', params: { slug: 'mayor' } })">高島市長</nuxt-link>
      </i18n>
    </div>

    <div class="container">
      <h3>The Attendees Survey 📫</h3>
      <p>{{ $t('survey.desc') }}</p>
      <p class="rate"><span class="rate-title">{{ $t('survey.rate') }}:</span><span class="molecule">80</span>/<span class="denominator">157</span></p>
      <img src="~/static/report/graph/type.svg" />

      <div class="survey">
        <h4>The Attendees</h4>
        <p>福岡以外からの参加者が想定より多く、初心者の割合は高い印象です。</p>
        <img src="~/static/report/graph/from.svg" />
        <img src="~/static/report/graph/level.svg" />

        <h4>Job Type</h4>
        <p>参加者はほぼエンジニアで、今回はScholarshipsプログラムによって3人の学生が参加しています。</p>
        <img src="~/static/report/graph/job.svg" />
        <img src="~/static/report/graph/job-other.svg" />

        <h4>High Rating Sessions 🏆</h4>
        <p>参加者が良かった思うセッションで評価の高いものは以下でした (Special Sessionは除く)。</p>
        <ul class="high-rating-sessions">
          <li class="high-rating-session--1st"><span class="high-rating-session--number">1</span> <nuxt-link class="high-rating-session--title" :to="localePath({ name: 'speakers-slug', params: { slug: 'ichikaway' } })">Hello, Worldまで3ヶ月 Go言語でファミコンエミュレータ実装</nuxt-link> by <span class="high-rating-session--speaker">cakephper</span></li>
          <li class="high-rating-session--2nd"><span class="high-rating-session--number">2</span> <nuxt-link class="high-rating-session--title" :to="localePath({ name: 'speakers-slug', params: { slug: 'tenntenn' } })">Goによる静的解析のはじめかた</nuxt-link> by <span class="high-rating-session--speaker">tenntenn</span></li>
          <li class="high-rating-session--2nd"><span class="high-rating-session--number">2</span> <nuxt-link class="high-rating-session--title" :to="localePath({ name: 'speakers-slug', params: { slug: 'cohhei' } })">なぜ Go はマイクロサービスのための言語なのか</nuxt-link> by <span class="high-rating-session--speaker">cohhei</span></li>
          <li class="high-rating-session--2nd"><span class="high-rating-session--number">2</span> <nuxt-link class="high-rating-session--title" :to="localePath({ name: 'speakers-slug', params: { slug: 'songmu' } })">Goでコマンドラインツールを量産する僕の方法</nuxt-link> by <span class="high-rating-session--speaker">songmu</span></li>
          <li class="high-rating-session--3rd"><span class="high-rating-session--number">3</span> <nuxt-link class="high-rating-session--title" :to="localePath({ name: 'speakers-slug', params: { slug: '__timakin__' } })">Golang BFF with GraphQL and gRPC</nuxt-link> by <span class="high-rating-session--speaker">timakin</span></li>
        </ul>

        <h4>Count of Good Session</h4>
        <p>参加者は、中央値で5つのセッションを良かったと考えています。これは、全セッションの2割近い値です。</p>
        <img src="~/static/report/graph/goodhistogram.svg" />

        <h4>Reason Type of Good Session</h4>
        <p>良かったと思うセッションの理由を分類すると右のようになりました。参加者は、学びが多いセッションに「良い」と感じる傾向があります。</p>
        <img src="~/static/report/graph/good-session-type.svg" />

        <h4>Reason Sample</h4>
        <ul>
          <li> 話し方が上手く伝えたい内容が伝わりやすかった方、使ったことの無いが、今後ぜひ使っていきたいパッケージや機能を紹介してくださった方が多く、非常に勉強になりました。<span class="type">（楽しい）</span></li>
          <li> 楽しむことの大切さを改めて認識できたから<span class="type">（楽しい）</span></li>
          <li> 実際に業務課題を解決するためのたくさんのヒントを得ることができた。<span class="type">（学びがある）</span></li>
          <li> パフォーマンスやテストや新しい技術や便利なパッケージをハンズオンも交えて知ることができました<span class="type">（学びがある）</span></li>
          <li> 初心者ということもあって学びが多かった。<span class="type">（学びがある）</span></li>
          <li> 分かりやすくユーモアもあった<span class="type">（面白い）</span></li>
          <li> 手をつけてない分野の概要を知り、チェックできた。。<span class="type">（興味深い）</span></li>
          <li> 身近、および、自分自身がやってみたいテーマだった<span class="type">（興味深い）</span></li>
        </ul>

        <h4>Attending Again?</h4>
        <p>一般参加者やスポンサーの一部は、次は登壇したいと考えていています。また、ほぼ全員がまた参加したいと考えているようです。</p>
        <img src="~/static/report/graph/reattendee.svg" />

        <h4>Feedback Type</h4>
        <p>多くの参加者は、運営に満足しており、褒める、労い、感謝が目立ちました。改善に関しては、セッション間のゆとり時間がほしいという内容が多かったようです。</p>
        <img src="~/static/report/graph/feedback-type.svg" />

        <h4>Feedback Sample</h4>
        <ul>
            <li>熱量が高くて素晴らしいカンファレンスでした。個人的には懇親会LTが無い方が多くの方とお話できるので好きです。（懇親会LTを否定しているわけではありません）尖った発表が多くて、知らないことが知れて良かったです。<span class="type">（褒める）</span></li>
          <li>はじめての参加でしたが、Goへの興味がますます増えました。<span class="type">（褒める）</span></li>
          <li>最初スケジュールがタイトで慌ただしそうに思ったけど、終わって見ると逆にテンポよかったと思う。会場の椅子をもう少しゆとりのある配置にすると入れ替えの出入りが楽だったと思った。生ハムとてもおいしかったけど食べ過ぎると塩分やばいのでほどほどで我慢したのが心残りだった（<span class="type">改善）</span></li>
          <li>クロークがあれば、良いと思いました。私は出張でスーツケースで参加したのですが、身動きがとり辛かったです。遠方枠もあるので、大きな荷物でも参加しやすくなると良いと思いました。<span class="type">（改善）</span></li>
          <li>とても快適で学びの多いカンファレンスでした。ありがとうございました！！<span class="type">（感謝）</span></li>
        </ul>
      </div>
    </div>

    <div class="report-photos is-clearfix">
      <LightGallery :images="images" :index="index" :disable-scroll="false" @close="index = null" />
      <div class="report-photo" v-for="(thumb, thumbIndex) in images" :key="thumbIndex" @click="index = thumbIndex" ><img :src="thumb.url.replace(/src/, 'thumb')"></div>
    </div>

    <div class="container">
      <h3>Scholarships 🎓</h3>
      <p>{{ $t('scholarship') }}</p>
      <ul class="colored">
        <li><a href="http://bit.ly/32PZHxy">Go Conference’19 summer in Fukuokaに行ってきた</a> by tomocy</li>
        <li><a href="http://bit.ly/2GnQPFJ">Go Conference in Fukuokaに参加してきました！</a> by pirohiropiro</li>
        <li><a href="http://bit.ly/2Zk7rFX">Go Conference in Fukuoka に参加してきました！</a> by dobuzora</li>
      </ul>
    </div>

    <div class="container">
      <h3>Blog written by everyone</h3>
      <p>{{ $t('blog') }}</p>
      <ul class="colored">
        <li><a href="http://bit.ly/2K6Gxeb">初心者がGo Conference’19 Summer in Fukuokaに行って、飛び込みLTしてきた</a> by sinofseven</li>
        <li><a href="http://bit.ly/2Mew2s2">[発表資料] GoCon Fukuokaでgoogle/wireを使った Goらしいアーキテクチャへの取り組みを発表した #gocon</a> by <budougumi0617</li>
        <li><a href="http://bit.ly/2JOLglC">Go Conference'19 Summer in Fukuokaで登壇してきた</a> by songmu</li>
        <li><a href="http://bit.ly/2Gtnr0V">Go Conference'19 Summer in Fukuoka にて登壇、費用対効果のいいユニットテストの考え方と実践について話しました #gocon</a> by hgsgtk</li>
        <li><a href="http://bit.ly/2JRe9gY">Go Conference Fukuoka 2019から刺激を受けてanalysis toolを作った</a> by nakamura244</li>
        <li><a href="http://bit.ly/2GreXqS">ＧＯ ｃｏｎｆｅｒｅｎｃｅ’１９ ｓｕｍｍｅｒ ｉｎ ｆｕｋｕｏｋａに出席しました</a> by 福岡市政だより</li>
        <li><a href="http://bit.ly/2YotsWC">Go Conference '19 Summer in Fukuoka にて登壇とスタッフしてきました #gocon</a> by seike460</li>
        <li><a href="http://bit.ly/30Ze5BR">Go Conference’19 Summer in Fukuoka、スタッフとして参加しました</a> by kunit</li>
        <li><a href="http://bit.ly/2yhj1FL">Go Conference'19 Summer in Fukuoka レポート</a> by ペパボテックブログ</li>
      </ul>
    </div>

    <div class="container">
      <h3>Tweeeeeeet!</h3>
      <p>{{ $t('tweet') }}</p>
    </div>

    <div class="container">
      <p class="goto-summary"><nuxt-link :to="localePath({ name: 'blog-slug', params: { slug: 'thanks-bye' }})" class="button large is-inverted is-outlined">🙋‍♂️  {{ $t('summary') }}</nuxt-link></p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

interface Image {
  title: string
  url: string
}

@Component
export default class report extends Vue {
  public data() {
    let images: Image[] = []
    for (let i = 1; i <= 70; i++) {
      images.push({ title: '', url: `/report/src/gocon-${i}.jpg` })
    }
    const index = null
    return { images, index }
  }
}
</script>

<style scoped>
.report-map {
  width: 100%;
  height: auto;
}
.report-photos {
  line-height: 1;
}
.report-photo {
  width: 10%;
  height: auto;
  float: left;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.report-photo img {
  margin: 0;
  padding: 0;
}
.gophers-photo {
  position: relative;
}
.gophers-photo figcaption {
  padding-bottom: 1.5em;
  color: #666;
  font-size: .8em;
  font-weight: normal;
  font-style: italic;
  text-align: center;
  display: block;
  width: 100%;
}
.report h4 {
  margin: 2em 0 .5em;
  font-size: 1.5em;
  text-align: center;
}
.report .rate {
  font-size: 3em;
  float: left;
  margin: 0 3em;
}
.report .rate-title {
  font-size: .3em;
  padding-right: 2em;
  vertical-align: middle;
}
.report .denominator {
  font-size: .5em;
  font-weight: bold;
  font-family: 'Arvo', serif;
  color: #000;
}
.report .molecule {
  font-size: 3em;
  font-weight: bold;
  font-family: 'Arvo', serif;
  color: #00ADD8;
}
.high-rating-sessions {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.high-rating-sessions li {
  position: relative;
  padding-bottom: .5em;
}
.high-rating-session--1st:before,
.high-rating-session--2nd:before,
.high-rating-session--3rd:before {
  z-index: -1;
  width: 2em;
  height: 2em;
  content: ' ';
  border-radius: 50%;
  background-color: #888;
  display: block;
  position: absolute;
}
.high-rating-session--1st:before {
  background-color: #00ADD8;
}
.high-rating-session--2nd:before {
  background-color: #000;
}
.high-rating-session--number {
  font-family: 'Arvo', serif;
  font-weight: bold;
  padding: 0 1em 0 .7em;
  color: #fff;
}
.high-rating-session--speaker {
  font-family: 'Arvo', serif;
}
.high-rating-session--1st .high-rating-session--number {
  padding-left: .85em;
}
.high-rating-session--1st .high-rating-session--title {
  font-weight: bold;
}
.high-rating-session--1st .high-rating-session--speaker {
  font-weight: bold;
}
.type {
  color: #AAA;
  font-style: italic;
  font-weight: bold;
  font-size: .8em;
}
.dl-table {
  padding-bottom: 1em;
}
.dl-table dt {
  float: left;
  clear: left;
  width: 100px;
  font-weight: bold;
  color: #000;
}
.dl-table dd {
  margin: 0 0 0 110px;
  padding: 0 0 0.5em 0;
}
.goto-summary {
  text-align: center;
}
@media (max-width: 800px) {
  .report-photo {
    width: 25%;
  }
}
</style>
