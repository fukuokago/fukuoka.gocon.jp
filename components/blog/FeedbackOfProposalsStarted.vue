<i18n>
en:
  title: 'Feedback of proposals started'
  date: 'Apr 25, 2019'
  body0: |-
    CFPの締め切りが迫ってまいりましたが、よいGopherのみなさんはもう送信済みですよね？
    はい、ありがとうございます。応募済みの方は、たいへん素晴らしいですよ〜。
    早くにCFPを応募していただいた方へのフィードバックを開始しております。
    どんなことをフィードバックしているかというと、だいたい共通していたりしていて、以下のようなメッセージをお送りしています。
  body1: |-
    そう、あらかじめ提示している選択基準の中で改善の余地がある部分に関してフィードバックしています。
    もし、これからギリギリに提出しようと考えている方は今一度選択基準に照らし合わせて再考していだけると、もっとよいプロポーザルになると私たちは考えています。
    ぜひ参考にしてみてくださいね！
  feedback:
    title: フィードバック例
    body:
      - 聴衆はGo言語のどのような特性を用いてこれらの課題を解決したかを知ろうとしています。レビュアーはGo言語との関連性について記述することをお勧めします。
      - 一般的な感覚ではこの内容は20分に話すには多すぎるようです。レビュアーは40分のセッションへの変更をお勧めします。
  notice:
    title: CFPについて追加のお知らせ等
    body:
      - 仮に選考に漏れた場合、ささやかな特典としまして、「必ず一般参加できる権利」と「LT優待」をさせていだきます。
      - 同じ内容のプロポーザルをGo Conference 2019 Springなどの他のカンファレンスで発表していた場合、今回の応募内容はどの辺が異なるかを確認させてもらうことがあります。
  button:
    - Subbmit to CFP
ja:
  title: 'プロポーザルフィードバックとお知らせ'
  date: '2019-04-25'
  body0: |-
    CFPの締め切りが迫ってまいりましたが、よいGopherのみなさんはもう送信済みですよね？
    はい、ありがとうございます。応募済みの方はとても素晴らしいですよ。
    早くにCFPを応募していただいた方へのフィードバックを開始しております。
    どんなことをフィードバックしているかというと、だいたい共通していたりしていて、以下のようなメッセージをお送りしています。
  body1: |-
    そう、あらかじめ提示している選択基準の中で改善の余地がある部分に関してフィードバックしています。
    もし、これからギリギリに提出しようと考えている方は今一度選択基準に照らし合わせて再考していだけると、もっとよいプロポーザルになると私たちは考えています。
    ぜひ参考にしてみてくださいね！
  feedback:
    title: フィードバック例
    body:
      - 聴衆はGo言語のどのような特性を用いてこれらの課題を解決したかを知ろうとしています。レビュアーはGo言語との関連性について記述することをお勧めします。
      - 一般的な感覚ではこの内容は20分に話すには多すぎるようです。レビュアーは40分のセッションへの変更をお勧めします。
  notice:
    title: CFPについて追加のお知らせ等
    body:
      - 仮に選考に漏れた場合、ささやかな特典としまして、「必ず一般参加できる権利」と「LT優待」をさせていだきます。
      - 同じ内容のプロポーザルをGo Conference 2019 Springなどの他のカンファレンスで発表していた場合、今回の応募内容はどの辺が異なるかを確認させてもらうことがあります。
  button:
    - Call for Papersページへ
</i18n>

<template>
  <article class="blog">
    <h3 v-if="titleTag === 'h3'" class="blog-title"> <nuxt-link :to="permalink">{{ $t('title') }}</nuxt-link> </h3>
    <h2 v-else class="blog-title">Blog &#8811; {{ $t('title') }} </h2>
    <p class="date">{{ $t('date') }}</p>
    <p>{{ $t('body0') }}</p>
    <h4>{{ $t('feedback.title') }}</h4>
    <ul class="colored">
      <li v-for="(v) in $t('feedback.body')">{{ v }}</li>
    </ul>
    <p>{{ $t('body1') }}</p>
    <h4>{{ $t('notice.title') }}</h4>
    <ul class="colored">
      <li v-for="(v) in $t('notice.body')">{{ v }}</li>
    </ul>
    <nuxt-link :to="localePath('cfp')" class="button is-inverted is-outlined">{{ $t('button.0') }}</nuxt-link>
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class FeedbackOfProposalsStarted extends Vue {
  @Prop() public titleTag!: string
  get permalink(): string {
    return this.localePath({ name: 'blog-slug', params: { slug: 'feedback-of-proposals-started' } })
  }
}
</script>
