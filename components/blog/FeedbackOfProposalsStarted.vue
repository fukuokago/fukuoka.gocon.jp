<i18n>
en:
  title: 'Feedback of proposals started'
  date: 'Apr 25, 2019'
  body:
    - feeedback
  button:
    - Subbmit to CFP
ja:
  title: 'プロポーサルのフィードバックを開始しています'
  date: '2019-04-25'
  body:
    - フィードバック
    - 共通の内容
  button:
    - CFPに応募する
</i18n>

<template>
  <article class="blog">
    <h3 v-if="titleTag === 'h3'" class="blog-title"> <nuxt-link :to="permalink">{{ $t('title') }}</nuxt-link> </h3>
    <h2 v-else class="blog-title">Blog &#8811; {{ $t('title') }} </h2>
    <p class="date">{{ $t('date') }}</p>
    <p v-for="(v) in $t('body')">{{ v }}</p>
    <a href="https://www.papercall.io/gocon-jp-2019-fukuoka" class="button is-inverted is-outlined">{{ $t('button.0') }}</a>
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
