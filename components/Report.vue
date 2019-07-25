<i18n>
en:
  desc: |-
    大盛況に終わったGo Conference'19 Summer in Fukuokaのレポートです。
    参加者へのアンケートを集計した結果や、カメラマン{atani}によるイベントの写真を掲載いたします。
    総括は{blog}に書いています。ぜひご覧ください。
    また、{schedule}のタイトルリンクから表示される登壇者詳細のページに、
    ほぼ全ての発表スライドが埋め込まれています。参加できなかった方にご覧いただければと思います。
  result:
    date: 2019年07月13日 09:30 から {last} 19:30 まで
    attendee: "{limit}157人（登壇者やスタッフ含む）"
    note: 当日は雨（お昼前後は土砂降りに近い）で、キャンセルや無断欠席がありました。スペシャルセッションには、福岡市の高島市長が登壇しました。イベント終了後、シームレスに懇親会を開催できました。懇親会では、LT大会などで盛り上がり予定より終了時刻を30分延長しました。
  scholarship: スカラーシッププログラムを実施し、全国から選ばれた学生３名が参加し、アウトプットとしてブログを書いてくれました。是非ご覧ください。
  blog: いろんな方がブログに、登壇報告やスタッフの感想などを書いてくれています。中にはイベントに刺激を受けてCLIツールを作ったという記事があり、主催者としては嬉しい限りです。
  tweet: イベントが盛り上がったのがわかるTweetを独断と偏見でピックアップしておきます。
ja:
  desc: |-
    大盛況に終わったGo Conference'19 Summer in Fukuokaのレポートです。
    参加者へのアンケートを集計した結果や、カメラマン{atani}によるイベントの写真を掲載いたします。
    総括は{blog}に書いています。ぜひご覧ください。
    また、{schedule}のタイトルリンクから表示される登壇者詳細のページに、
    ほぼ全ての発表スライドが埋め込まれています。参加できなかった方にご覧いただければと思います。
  result:
    date: 2019年07月13日 09:30 から {last} 19:30 まで
    attendee: "{limit}157人（登壇者やスタッフ含む）"
    note: 当日は雨（お昼前後は土砂降りに近い）で、キャンセルや無断欠席がありました。スペシャルセッションには、福岡市の高島市長が登壇しました。イベント終了後、シームレスに懇親会を開催できました。懇親会では、LT大会などで盛り上がり予定より終了時刻を30分延長しました。
  scholarship: スカラーシッププログラムを実施し、全国から選ばれた学生３名が参加し、アウトプットとしてブログを書いてくれました。是非ご覧ください。
  blog: いろんな方がブログに、登壇報告やスタッフの感想などを書いてくれています。中にはイベントに刺激を受けてCLIツールを作ったという記事があり、主催者としては嬉しい限りです。
  tweet: イベントが盛り上がったのがわかるTweetを独断と偏見でピックアップしておきます。
</i18n>

<template>
  <section class="report">
    <h2>Report</h2>
    <div class="container">
      <p>{{ $t('desc') }}</p>
    </div>

    <div class="gophers-photos">
      <img class="eyecatch" src="~assets/img/gocon-gophers.jpg" alt="Gophers" />
    </div>

    <div class="container">
      <h3>Overview</h3>
      <p>Date: {{ $t('result.date') }}</p>
      <p>Attendee: {{ $t('result.attendee') }}</p>
      <p>{{ $t('result.note') }}</p>
    </div>

    <div class="container">
      <h3>The Attendees Survey</h3>
      <p>福岡以外からの参加者が想定より多く、初心者の割合は高い印象です。</p>

      <h4>The Attendees</h4>
      <p>福岡以外からの参加者が想定より多く、初心者の割合は高い印象です。</p>

      <h4>Job Type</h4>
      <p>参加者はほぼエンジニアで、今回はScholarshipsプログラムによって3人の学生が参加しています。</p>

      <h4>High Rating Sessions</h4>
      <p>参加者が良かった思うセッションで評価の高いものは以下でした (Special Sessionは除く)。</p>
      <ul>
        <li>1. Hello, Worldまで3ヶ月 Go言語でファミコンエミュレータ実装 by cakephper</li>
        <li>2. Goによる静的解析のはじめかた by tenntenn</li>
        <li>2. なぜ Go はマイクロサービスのための言語なのか by cohhei</li>
        <li>2. Goでコマンドラインツールを量産する僕の方法 by songmu</li>
        <li>3. Golang BFF with GraphQL and gRPC by timakin</li>
      </ul>

      <h4>Count of Good Session</h4>
      <p>参加者は、中央値で5つのセッションを良かったと考えています。これは、全セッションの2割近い値です。</p>

      <h4>Reason Type of Good Session</h4>
      <p>良かったと思うセッションの理由を分類すると右のようになりました。参加者は、学びが多いセッションに「良い」と感じる傾向があります。</p>

      <h4>Reason Sample</h4>
      <ul>
        <li> 話し方が上手く伝えたい内容が伝わりやすかった方、使ったことの無いが、今後ぜひ使っていきたいパッケージや機能を紹介してくださった方が多く、非常に勉強になりました。（楽しい）</li>
        <li> 楽しむことの大切さを改めて認識できたから（楽しい）</li>
        <li> 実際に業務課題を解決するためのたくさんのヒントを得ることができた。（学びがある）</li>
        <li> パフォーマンスやテストや新しい技術や便利なパッケージをハンズオンも交えて知ることができました（学びがある）</li>
        <li> 初心者ということもあって学びが多かった。（学びがある）</li>
        <li> 分かりやすくユーモアもあった（面白い）</li>
        <li> 手をつけてない分野の概要を知り、チェックできた。。（興味深い）</li>
        <li> 身近、および、自分自身がやってみたいテーマだった（興味深い）</li>
      </ul>

      <h4>Attending Again?</h4>
      <p>一般参加者やスポンサーの一部は、次は登壇したいと考えていています。また、ほぼ全員がまた参加したいと考えているようです。

      <h4>Feedback Type</h4>
      <p>多くの参加者は、運営に満足しており、褒める、労い、感謝が目立ちました。改善に関しては、セッション間のゆとり時間がほしいという内容が多かったようです。

      <h4>Feedback Sample</h4>
      <ul>
        <li>熱量が高くて素晴らしいカンファレンスでした。個人的には懇親会LTが無い方が多くの方とお話できるので好きです。（懇親会LTを否定しているわけではありません）尖った発表が多くて、知らないことが知れて良かったです。（褒める）</li>
        <li>はじめての参加でしたが、Goへの興味がますます増えました。（褒める）</li>
        <li>最初スケジュールがタイトで慌ただしそうに思ったけど、終わって見ると逆にテンポよかったと思う。会場の椅子をもう少しゆとりのある配置にすると入れ替えの出入りが楽だったと思った。生ハムとてもおいしかったけど食べ過ぎると塩分やばいのでほどほどで我慢したのが心残りだった（改善）</li>
        <li>クロークがあれば、良いと思いました。私は出張でスーツケースで参加したのですが、身動きがとり辛かったです。遠方枠もあるので、大きな荷物でも参加しやすくなると良いと思いました。（改善）</li>
        <li>とても快適で学びの多いカンファレンスでした。ありがとうございました！！（感謝）</li>
      </ul>
    </div>

    <div class="report-photos is-clearfix">
      <LightGallery :images="images" :index="index" :disable-scroll="false" @close="index = null" />
      <div class="report-photo" v-for="(thumb, thumbIndex) in images" :key="thumbIndex" @click="index = thumbIndex" ><img :src="thumb.url.replace(/src/, 'thumb')"></div>
    </div>

    <div class="container">
      <h3>Scholarships</h3>
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
      </ul>
    </div>

    <div class="container">
      <h3>Tweeeeeeet!</h3>
      <p>{{ $t('tweet') }}</p>
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
@media (max-width: 800px) {
  .report-photo {
    width: 25%;
  }
}
</style>
