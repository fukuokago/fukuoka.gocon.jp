<i18n>
en:
  title: 'Schedule and speakers are published'
  date: 'May 23, 2019'
  body0:
    - We published that our event schedule and speakers for sessions.
      Each speaker page has a speaker's biography and an abstract of the session. Please find sessions that interests you.
  schedule: Go to Schedule page
  speakers: Go to Speakers page
  body1:
    - I'm very happy that many session frames, which can be overpacked, have been successfully filled with interesting content.
      Thanks to many people submissions for CFP. 😂
    - Feedback on the early review of proposals, which is one of the initiatives, was generally well received.
      With our feedback we were able to get what we wanted to know and what the audience wanted.
  body2:
    - This time, we used a service called papercall.io to ease CFP-related work.
      Of course, functional things such as "communicate with applicants" and "you can evaluate reviewers" are convenient,
      but we would not have been able to reach if we were recruiting independently "We received submissions from overseas.
      I think the thing is the best to use.
    - In addition, papercall.io is convenient as an applicant, and when you submit a proposal,
      it can be reused with about 3 clicks for each of the recruited events.
      Even proposals with the same contents (which are likely to brush up if dropped) can effectively increase the chances of becoming a speaker,
      such as being dropped in an event called A but winning in B.
      In fact, this time it was covered with "Go Conference 2019 Spring in Tokyo" and CFP period,
      and there were some submissions of the same contents.
    - So, what do you want to say is that the event organizer will actively use papercall.io! See also Papercall Impressions at Go Conference 2019 Spring in Tokyo.
ja:
  title: 'タイムテーブルとスピーカーを公開しました'
  date: '2019-05-23'
  body0:
    - 本イベントのタイムテーブルと登壇者であるスピーカーの一覧を公開しました。
      各スピーカーのページには、スピーカーの自己紹介やセッションの概要が掲載されています。
      ぜひ、興味があるセッションを探してみてください。
  schedule: タイムテーブルを見る
  speakers: スピーカーの一覧を見る
  body1:
    - 詰め込みすぎとも言える多くのセッション枠が、興味深い内容のセッションで無事に埋まったことを大変嬉しく思います。
      たくさんの方がCFPに応募してくださったおかげです。本当にありがとうございまいした。😂
    - 今回の取り組みのひとつであるプロポーザルの早期レビューのフィードバックは、おおむね好評でした。
      フィードバックすることで、私たちが知りたいことまたは聴衆が欲しい情報を得ることができました。
  body2:
    - 今回の募集は、papercall.ioというCFPに関する業務を楽にしてくれるサービスを使用しました。
      「応募者とコミュニケーション」や「レビュアーの評価ができる」といった機能的なことはもちろん便利なのですが、
      私たちが独自に募集していたらリーチ出来なかったであろう「海外からの応募をいただいたこと」が、
      使用して一番良かったなと思っています。
    - また、papercall.ioは応募する側としても便利で、プロポーザルを登録すると募集されている各イベントに3クリック程度で再利用が可能です。
      同じ内容のプロポーザル（落選したらブラッシュアップしそうですが）でも、Aというイベントでは落選したがBは当選するといったように、
      スピーカーになる機会を効率的に増やすことができるのです。
      事実、今回は"Go Conference 2019 Spring in Tokyo"とCFP期間が重なり同じ内容の提出がいくつかありました。
    - ということで、何が言いたいかというと、イベントオーガナイザーは積極的にpapercall.ioを使っていきましょう！
      Go Conference 2019 Spring in TokyoでのPapercall感想の記事もどうぞ。
</i18n>

<template>
  <article class="blog">
    <h3 v-if="titleTag === 'h3'" class="blog-title"> <nuxt-link :to="permalink">{{ $t('title') }}</nuxt-link> </h3>
    <h2 class="blog-title" v-else>
      <span class="blog-index-link"><nuxt-link :to="indexlink">Blog</nuxt-link>/</span>{{ $t('title') }}
    </h2>
    <p class="date">{{ $t('date') }}</p>

    <p v-for="p in $t('body0')">{{ p }}</p>
    <p class="anchors">
      <nuxt-link class="button is-inverted is-outlined" place="schedule" :to="schedulelink">{{ $t('schedule') }}</nuxt-link>
      <nuxt-link class="button is-inverted is-outlined" place="speakers" :to="speakerslink">{{ $t('speakers') }}</nuxt-link>
    </p>

    <p v-for="p in $t('body1')">{{ p }}</p>
    <div class="tweets is-clearfix">
      <Tweet id="1121688710649499648" :options="{ cards: 'hidden' }"><div class="tweet"></div></Tweet>
      <Tweet id="1121712368239595520" :options="{ cards: 'hidden' }"><div class="tweet"></div></Tweet>
      <Tweet id="1122147930691866624" :options="{ cards: 'hidden' }"><div class="tweet"></div></Tweet>
      <Tweet id="1122486326140362753" :options="{ cards: 'hidden' }"><div class="tweet"></div></Tweet>
    </div>

    <p v-for="p in $t('body2')">{{ p }}</p>
    <ul>
      <li><a href="https://ymotongpoo.hatenablog.com/entry/2019/04/25/001319">Go Conference 2019 SpringのPaperCallを初めて使ってみた感想＋α</a> by ymotongpoo</li>
    </ul>
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Tweet } from 'vue-tweet-embed'

@Component({
  components: {
    Tweet
  }
})
export default class ScheduleAndSpeakersArePublished extends Vue {
  @Prop() public titleTag!: string
  get schedulelink(): string {
    return this.localePath('schedule')
  }
  get speakerslink(): string {
    return this.localePath({ name: 'speakers-slug', params: {} })
  }
  get permalink(): string {
    return this.localePath({ name: 'blog-slug', params: { slug: 'schedule-and-speakers-are-published' } })
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
.tweets {
  margin-bottom: 1em;
}
.tweets > div {
  width: 280px;
  height: 350px;
  float: left;
  margin: 0 2em 2em 0;
  overflow: hidden;
}
@media (max-width: 500px) {
  .tweets > div {
    width: 100%;
    height: auto;
    float: none;
    margin: 0 0 1em;
  }
}
</style>
