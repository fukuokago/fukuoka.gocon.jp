<i18n>
en:
  desc: |-
    It is a report of Go Conference '19 Summer in Fukuoka.
    We will post the results of the questionnaire for the participants and the photos of the events by {atani}.
    The summary is written in {blog}. Please take a look.
    Also, almost all presentation slides are embedded in the speaker's details page displayed from the {schedule} title link.
    I hope you can see it if you can not participate.
  overview:
    venue:
      title: Venue
      body: Growth Next Fukuoka and Fukuoka Startup Cafe
    date:
      title: Date
      body: "Sat July 13th, 2019, Start: 09:30, End: {last} 19:30"
    attendee:
      title: Count
      body: "{limit} 157 (Speakers and Staffs included)"
    note: Unfortunately, it was ☔️ on the day (close to the downpour before and after noon), and there were cancellations and absences without notice. The special session was held by the mayor of {mayor}, Fukuoka. After the event, we were able to hold a social gathering seamlessly. In the banquet, the end time was extended by 30 minutes from the schedule that is going up in LT competitions and so on.
  gophers-go: The Gopher group photo I took at the end, "Go ~!" Surprisingly everyone smiles.
  scholarship: Conducted a scholarship program, and three students from all over the country participated and wrote blogs as output. Please take a look.
  blog: Many people have written on-the-bed reports and staff's comments on the blog. There is an article that I was inspired by the event and created a CLI tool, and I am happy as a organizer.
  survey:
    rate: Response rate
    desc: It is the result of conducting the questionnaire to the event participant and totaling. The response rate is about 50%. Due to the high number of sessions, the number of speakers and sponsors is also high.
    attendees: The number of attendees from outside Fukuoka is higher than expected, and the proportion of beginners is a high impression.
    jobtype: The participants are mostly engineers, this time three students from the Scholarships program.
    goodsession: Among the sessions that attendees felt good were the following (except Special Session).
    histogram: Participants considered the five sessions good at median. This is close to 20% of all sessions.
    goodreason: I classified the reasons for the session that I thought was good. Participants tend to feel “good” for sessions that have a lot of learning.
    again: Some of the general participants and sponsors want to go on stage next time. Also, almost everyone seems to want to participate again.
    feedback: Many of the participants were satisfied with the operation, giving up, giving, and giving thanks. As for the improvement, it seems that there was much content that I wanted time between sessions.
  jobtype: Job Type
  attendees: The Attendees
  highrating: High Rating Sessions
  histogram: Histogram of Good Session Count
  reason-type: Reason type of Good Session
  reason-sample: Reason Sample
  feedback-type: Feedback Type to Organizer
  feedback-sample: Feedback Sample
  again: Attending Again?
  summary: Go to Summary
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
  survey:
    rate: 回答率
    desc: イベント参加者にアンケートを実施し集計した結果です。回答率は約5割。セッション数が多いイベントのため、スピーカーやスポンサースタッフの数も多い結果となっています。
    attendees: 福岡以外からの参加者が想定より多く、初心者の割合は高い印象です。
    jobtype: 参加者はほぼエンジニアで、今回はScholarshipsプログラムによって3人の学生が参加しています。
    goodsession: 参加者が良かった思うセッションで評価の高いものは以下でした (Special Sessionは除く)。
    histogram: 参加者は、中央値で5つのセッションを良かったと考えています。これは、全セッションの2割近い値です。
    goodreason: 良かったと思うセッションの理由を分類しました。参加者は、学びが多いセッションに「良い」と感じる傾向があります。
    again: 一般参加者やスポンサーの一部は、次は登壇したいと考えていています。また、ほぼ全員がまた参加したいと考えているようです。
    feedback: 多くの参加者は、運営に満足しており、褒める、労い、感謝が目立ちました。改善に関しては、セッション間のゆとり時間がほしいという内容が多かったようです。
  jobtype: 職種はなんですか？
  attendees: 参加者について
  highrating: 評価の高いセッション
  histogram: 良いセッション数ヒストグラム
  reason-type: 良い理由の分類
  reason-sample: 良い理由のサンプル
  feedback-type: 運営へフィードバックの分類
  feedback-sample: フィードバックのサンプル
  again: また参加したいですか？
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

    <div class="container survey">
      <h3>The Attendees Survey 📫</h3>
      <p>{{ $t('survey.desc') }}</p>
      <p class="rate"><span class="rate-title">{{ $t('survey.rate') }}:</span><span class="molecule">80</span>/<span class="denominator">157</span></p>
      <img class="graph" src="~/static/report/graph/type.svg" />

      <div class="survey">
        <h4>{{ $t('attendees') }}</h4>
        <p>{{ $t('survey.attendees') }}</p>
        <img class="graph" src="~/static/report/graph/from.svg" />
        <img class="graph" src="~/static/report/graph/level.svg" />

        <h4>{{ $t('jobtype') }}</h4>
        <p>{{ $t('survey.jobtype') }}</p>
        <img class="graph" src="~/static/report/graph/job.svg" />
        <img class="graph" src="~/static/report/graph/job-other.svg" />


        <h4>{{ $t('highrating') }} 🏆</h4>
        <p>{{ $t('survey.goodsession') }}</p>
        <ul class="high-rating-sessions">
          <li class="high-rating-session--1st"><span class="high-rating-session--number">1</span> <nuxt-link class="high-rating-session--title" :to="localePath({ name: 'speakers-slug', params: { slug: 'ichikaway' } })">Hello, Worldまで3ヶ月 Go言語でファミコンエミュレータ実装</nuxt-link> by <span class="high-rating-session--speaker">cakephper</span></li>
          <li class="high-rating-session--2nd"><span class="high-rating-session--number">2</span> <nuxt-link class="high-rating-session--title" :to="localePath({ name: 'speakers-slug', params: { slug: 'tenntenn' } })">Goによる静的解析のはじめかた</nuxt-link> by <span class="high-rating-session--speaker">tenntenn</span></li>
          <li class="high-rating-session--2nd"><span class="high-rating-session--number">2</span> <nuxt-link class="high-rating-session--title" :to="localePath({ name: 'speakers-slug', params: { slug: 'cohhei' } })">なぜ Go はマイクロサービスのための言語なのか</nuxt-link> by <span class="high-rating-session--speaker">cohhei</span></li>
          <li class="high-rating-session--2nd"><span class="high-rating-session--number">2</span> <nuxt-link class="high-rating-session--title" :to="localePath({ name: 'speakers-slug', params: { slug: 'songmu' } })">Goでコマンドラインツールを量産する僕の方法</nuxt-link> by <span class="high-rating-session--speaker">songmu</span></li>
          <li class="high-rating-session--3rd"><span class="high-rating-session--number">3</span> <nuxt-link class="high-rating-session--title" :to="localePath({ name: 'speakers-slug', params: { slug: '__timakin__' } })">Golang BFF with GraphQL and gRPC</nuxt-link> by <span class="high-rating-session--speaker">timakin</span></li>
        </ul>

        <h4>{{ $t('histogram') }}</h4>
        <p>{{ $t('survey.histogram') }}</p>
        <img class="graph" src="~/static/report/graph/goodhistogram.svg" />

        <h4>{{ $t('reason-type') }}</h4>
        <p>{{ $t('survey.goodreason') }}</p>
        <img class="graph" src="~/static/report/graph/good-session-type.svg" />

        <h4>{{ $t('reason-sample') }}</h4>
        <ul class="survey-sample">
          <li> 話し方が上手く伝えたい内容が伝わりやすかった方、使ったことの無いが、今後ぜひ使っていきたいパッケージや機能を紹介してくださった方が多く、非常に勉強になりました。<span class="type">（楽しい）</span></li>
          <li> 楽しむことの大切さを改めて認識できたから<span class="type">（楽しい）</span></li>
          <li> 実際に業務課題を解決するためのたくさんのヒントを得ることができた。<span class="type">（学びがある）</span></li>
          <li> パフォーマンスやテストや新しい技術や便利なパッケージをハンズオンも交えて知ることができました<span class="type">（学びがある）</span></li>
          <li> 初心者ということもあって学びが多かった。<span class="type">（学びがある）</span></li>
          <li> 分かりやすくユーモアもあった<span class="type">（面白い）</span></li>
          <li> 手をつけてない分野の概要を知り、チェックできた。。<span class="type">（興味深い）</span></li>
          <li> 身近、および、自分自身がやってみたいテーマだった<span class="type">（興味深い）</span></li>
        </ul>

        <h4>{{ $t('feedback-type') }}</h4>
        <p>{{ $t('survey.feedback') }}</p>
        <img class="graph" src="~/static/report/graph/feedback-type.svg" />

        <h4>{{ $t('feedback-sample') }}</h4>
        <ul class="survey-sample">
          <li>熱量が高くて素晴らしいカンファレンスでした。個人的には懇親会LTが無い方が多くの方とお話できるので好きです。（懇親会LTを否定しているわけではありません）尖った発表が多くて、知らないことが知れて良かったです。<span class="type">（褒める）</span></li>
          <li>はじめての参加でしたが、Goへの興味がますます増えました。<span class="type">（褒める）</span></li>
          <li>最初スケジュールがタイトで慌ただしそうに思ったけど、終わって見ると逆にテンポよかったと思う。会場の椅子をもう少しゆとりのある配置にすると入れ替えの出入りが楽だったと思った。生ハムとてもおいしかったけど食べ過ぎると塩分やばいのでほどほどで我慢したのが心残りだった（<span class="type">改善）</span></li>
          <li>クロークがあれば、良いと思いました。私は出張でスーツケースで参加したのですが、身動きがとり辛かったです。遠方枠もあるので、大きな荷物でも参加しやすくなると良いと思いました。<span class="type">（改善）</span></li>
          <li>とても快適で学びの多いカンファレンスでした。ありがとうございました！！<span class="type">（感謝）</span></li>
        </ul>

        <h4>{{ $t('again') }}</h4>
        <p>{{ $t('survey.again') }}</p>
        <img class="graph" src="~/static/report/graph/reattendee.svg" />
      </div>
    </div>

    <div class="container">
      <h3>Photos 📸</h3>
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
    </div>
    <div class="tweets is-clearfix">
      <Tweet id="1149990208235954176" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149985705197621248" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149974855942467584" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149944224671862784" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149940928833978369" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149933055349420033" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149931848945946630" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149931061087854592" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149930303579815941" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149928786181275651" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149927840021798912" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149925635701133312" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149918479329267712" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149911817142956032" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149911795529687040" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149907597639573504" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149906074494836736" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149905569798430720" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149886006516043777" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149880967105925120" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149878860810342400" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149873276744687616" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149872608176816128" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149872550249259008" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149871912664723456" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1150042529234137088" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149871783912198144" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149870210284843008" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149869710281826304" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149863794471890945" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149861882028646401" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149860072534577153" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149859779478601728" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149859143726977024" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149855931401773062" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149850177542299648" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149849969295183872" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149847919702376448" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149845836706144258" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149843984895733760" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149842930011529217" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
      <Tweet id="1149587073591984130" :options="{ cards: 'visible' }"><div class="tweet"></div></Tweet>
    </div>

    <div class="container">
      <p class="goto-summary"><nuxt-link :to="localePath({ name: 'blog-slug', params: { slug: 'thanks-bye' }})" class="button large is-inverted is-outlined">🙋‍♂️  {{ $t('summary') }}</nuxt-link></p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Tweet } from 'vue-tweet-embed'

interface Image {
  title: string
  url: string
}

@Component({
  components: {
    Tweet
  }
})
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
.report .survey {
  margin-bottom: 3em;
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
.tweets {
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  height: 500px;
  white-space: nowrap;
  margin-bottom: 1em;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
}
.tweets > div {
  height: 500px;
  margin: 0 0 0 2em;
  overflow: hidden;
  display:inline-block;
  width: 20%;
  vertical-align: top;
  white-space: normal;
}
@media (max-width: 800px) {
  .report-photo {
    width: 25%;
  }
  .report .rate {
    float: none;
    margin: 0;
  }
  .report .graph {
    display: block;
    text-align: center;
    width: 100%;
  }
  .survey-sample {
    font-size: .8em;
  }
  .report .colored {
    margin: 0;
  }
  .tweets > div {
    margin-left: 1em;
    width: 70%;
  }
}
</style>
