<i18n>
en:
  title: 'Proposal Feedback and Notice'
  date: 'Apr 25, 2019'
  body0: |-
    It is a deadline of CFP soon(April 30st). You guys Gophers have already been sent, right?
    Thank you, Thank you and Thank you. You are so Grate ❤️
    We are starting to provide feedback to those who applied for CFP early.
    The feedback is roughly like this:
  feedback:
    - The audience is trying to know what characteristics of the Go programing language have been used to solve these tasks. The recommendation from the reviewers is to add relevance of Go programing language to your topic.
    - In a general sense this content seems to be too much to talk in 20 minutes. Reviewers are encouraged to change to a 40 minute session.
  body1: |-
    Yes, we give feedback on items that have room for improvement among {criteria} presented in advance.
    If we are planning to submit at the very last minute, we will consider it as a better proposal if we reconsider it against the selection criteria.
    Please try it for reference!
  special:
    title: Proposal submitting benefits
    body: |-
      If you go out of the screening, you will always be able to attend this conference and you will be honored to join LT.
  notice:
    title: Request in proposal reuse
    body: |-
      If you plan to present the same proposal at another conference(ex. {gocon}), or if you have already done so,  Please update the content.
  criteria: The Selection Criteria
  button: Subbmit to CFP
ja:
  title: 'プロポーザルのフィードバックとお知らせ'
  date: '2019-04-25'
  body0: |-
    CFPの締め切り(5月1日の日本時間9時まで)が迫ってまいりましたが、よいGopherのみなさんはもう送信済みですよね？
    はい、ありがとうございます。応募済みの方、とても素晴らしいですよ ❤️
    早くにCFPを応募していただいた方へのフィードバックを開始しております。
    どんなことをフィードバックしているかというと、だいたい共通していたりしていて、以下のようなメッセージをお送りしています。
  feedback:
    - 聴衆はGo言語のどのような特性を用いてこれらの課題を解決したかを知ろうとしています。レビュアーはGo言語との関連性について記述することをお勧めします。
    - 一般的な感覚では、この内容は20分に話すには多すぎるようです。レビュアーは40分のセッションへの変更をお勧めします。
  body1: |-
    そう、あらかじめ提示している{criteria}の中で改善の余地がある部分に関してフィードバックしています。
    もし、これからギリギリに提出しようと考えている方は今一度選択基準に照らし合わせて再考していだけると、もっとよいプロポーザルになると私たちは考えています。
    ぜひ参考にしてみてくださいね！
  special:
    title: CFP応募してくださった方への特典
    body: |-
      CFPの選考に仮に漏れた場合、ささやかな特典としまして、「必ず一般参加できる権利」と「LT優待」をさせていだきます。
  notice:
    title: プロポーザルの使い回しでのお願い
    body: |-
      同じ内容のプロポーザルを{gocon}などの他のカンファレンスで発表する予定、または既にした場合、今回の応募内容との違いを確認する必要があります。
      他のカンファレンスで登壇が決まっている方は、内容をアップデートしていただけると確認の手間が省けて嬉しいです。{st}
  criteria: 選択基準
  button: CFPに応募する
</i18n>

<template>
  <article class="blog">
    <h3 v-if="titleTag === 'h3'" class="blog-title"> <nuxt-link :to="permalink">{{ $t('title') }}</nuxt-link> </h3>
    <h2 class="blog-title" v-else>
      <span class="blog-index-link"><nuxt-link :to="indexlink">Blog</nuxt-link>/</span>{{ $t('title') }}
    </h2>
    <p class="date">{{ $t('date') }}</p>
    <p>{{ $t('body0') }}</p>
    <ol class="colored"> <li v-for="(v) in $t('feedback')">{{ v }}</li> </ol>
    <i18n path="body1" tag="p">
      <nuxt-link place="criteria" :to="localePath('cfp')">{{ $t('criteria') }}</nuxt-link>
    </i18n>
    <h4>{{ $t('special.title') }}</h4>
    <p>{{ $t('special.body') }}</p>
    <h4>{{ $t('notice.title') }}</h4>
    <i18n path="notice.body" tag="p">
      <a place="gocon" href="https://www.papercall.io/gocon-tokyo-2019">Go Conference Tokyo 2019 Spring</a>
    </i18n>
    <a href="https://www.papercall.io/gocon-jp-2019-fukuoka" class="button is-inverted is-outlined">{{ $t('button') }}</a>
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class FeedbackOfProposalsStarted extends Vue {
  @Prop() public titleTag!: string
  get permalink(): string {
    return this.localePath({ name: 'blog-slug', params: { slug: 'proposals-feedback-and-notice' } })
  }
  get indexlink(): string {
    return this.localePath({name: 'blog-slug'})
  }
}
</script>
