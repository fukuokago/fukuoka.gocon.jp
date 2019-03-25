<i18n>
en:
  title: 'Call for Sponsors is open'
  date: 'Mar 25, 2019'
  body:
    - Call for sponsors is open now. To make our conference a better experience.
    - |-
      Again, as we have also described sponsorships,
      we are organizing conferences as volunteers, so we avoid managing money balances as much as possible.
      So, we ask the sponsors to provide the necessary goods, not money support.
      The experience of those participating in the conference depends on the sponsors.
      Please cooperate with us to make Go Conference'19 Summer in Fukuoka successful.
  button: Become a Sponsor
ja:
  title: 'スポンサーの募集を開始しました'
  date: '2019-03-25'
  body:
    - カンファレンスに参加していただく人々の体験を、より良いものにするために、スポンサーの募集をいたします。
    - |-
      このカンファレンスは有志のボランティアによって開催しようとしています。
      スポンサーシップにも記述していますが、私たちがお金の収支を管理しないでいいようにスポンサーへは、お金での支援でなく必要な品物の提供をお願いしています。
      カンファレンスに参加する人たちの体験は、スポンサーの皆様にかかっています。
      どうぞ、私たちにご協力お願いします。
      また、一緒にGo Conference'19 Summer in Fukuokaを成功させましょう。
  button: スポンサーになる
</i18n>

<template>
  <article class="blog">
    <h3 v-if="titleTag === 'h3'" class="blog-title"> <nuxt-link :to="permalink">{{ $t('title') }}</nuxt-link> </h3>
    <h2 v-else class="blog-title"> {{ $t('title') }} </h2>
    <p class="date">{{ $t('date') }}</p>
    <p v-for="(v) in $t('body')">{{ v }}</p>
    <a href="https://docs.google.com/forms/d/17v0fB3UxTLpf6G_th-TMyJTSOBMgVBlPogNk0iubxnQ/" class="button is-inverted is-outlined">{{ $t('button') }}</a>
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class CallForSponsorsIsOpen extends Vue {
  @Prop() public titleTag!: string
  get permalink(): string {
    return this.localePath({ name: 'blog-slug', params: { slug: 'call-for-sponsors-is-open' } })
  }
}
</script>
