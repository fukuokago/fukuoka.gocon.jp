<i18n>
en:
  title: 'Call for Papers is open'
  date: 'Mar 15, 2019'
  body:
    - Hi, Strong gophers. Now call for papers is open.
    - |-
      We use PaperCall.io to easy anonymous review and feedback.
      If you post proposal early, you can receive feedback from reviewers.
      In addition, we have published the selection criteria this time, so please refer to it.
      Here is a great article on how to write a conference proposal.
  note: The Call for Papers opens today and closes April 30st. We look forward to many proposals!
  button: Go to Call for Papers page
ja:
  title: '登壇者の募集を開始しました'
  date: '2019-03-15'
  body:
    - Strong Gopherの皆さんお待たせいたしました、登壇者の募集をお知らせいたします。
    - |-
      応募には、PaperCall.ioを使うため、匿名投稿とフィードバックが簡単にできます。
      早めに投稿するとレビュアーからのフィードバックを受けることができます。
      また、今回は募集に選択基準を公開していますので、参考にしていただければ幸いです。
      カンファレンスプロポーザルの書き方を書いた素晴らしい記事も合わせてご紹介いたします。
  note: 募集期間は、本日から5月1日の日本時間9時までとなります。たくさんのご応募をお待ちしております！
  button: Call for Papersページへ
</i18n>

<template>
  <article class="blog">
    <h3 v-if="titleTag === 'h3'" class="blog-title"> <nuxt-link :to="permalink">{{ $t('title') }}</nuxt-link> </h3>
    <h2 v-else class="blog-title"> {{ $t('title') }} </h2>
    <p class="date">{{ $t('date') }}</p>
    <p v-for="(v) in $t('body')">{{ v }}</p>
    <ul class="references">
      <li v-for="(v) in references">
        {{ v.title }}<br />
        <a :href="v.url"> {{ v.url }}</a>
      </li>
    </ul>
    <p>{{ $t('note') }}</p>
    <nuxt-link :to="localePath('cfp')" class="button is-inverted is-outlined">{{ $t('button') }}</nuxt-link>
  </article>
</template>

<script lang="ts">
interface Reference {
  title: string,
  url: string
}

import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class CallForPapersIsOpen extends Vue {
  @Prop() public titleTag!: string
  public references: Reference[] = [
    { title: 'How to write a successful conference proposal by Karolina Szczur',
        url: 'https://medium.com/@fox/how-to-write-a-successful-conference-proposal-4461509d3e32' },
    { title: 'How to write a successful conference proposal by Dave Cheney',
        url: 'https://dave.cheney.net/2017/02/12/how-to-write-a-successful-conference-proposal' },
    { title: 'Talking Tech: Getting Your Proposal Through the Door by Russ Olsen',
        url: 'http://russolsen.com/articles/2012/06/21/acing-the-technical-talk-getting-your-proposal-through-the-door.html' },
    { title: '登壇の可能性をあげる！カンファレンスプロポーザルの書き方のススメ - builderscon::blog by Daisuke Maki',
        url: 'https://blog.builderscon.io/entry/2017/05/09/090000' }
  ]
  get permalink(): string {
    return this.localePath({ name: 'blog-slug', params: { slug: 'call-for-papers-is-open' } })
  }
}
</script>
