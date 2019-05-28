<i18n>
en:
  title: 'Registration and Scholarship is open'
  date: 'May 28, 2019'
  body:
    - Registration for this event, which will be held on July 13, is now oepn on Connpass.
      We also started recruiting sponsorships to support students in travel and accommodation expenses on Google Form.
    - Participation fee is free, and some priority seats are prepared to make it easier for more people to participate.
      We are looking forward to your registration! 🤗
    - There is also a description in the registration information,
      but if you are unable to participate due to unavoidable circumstances,
      please be sure to process cancellations to allow other people to hold your seat. 🙏
    - The event is run by a small group of Go loving volunteer staff and supported by a sponsor company.
      We always look forward to your cooperation. 
    - Let's make the best event with everyone ❤️ 𝝣GO 𝝣GO 𝝣GO ʕ⊙౪⚆ʔ
  registration: Go to Registration
  scholarships: Go to Scholarships
ja:
  title: '参加登録とスカラーシップ募集を開始しました'
  date: '2019-05-28'
  body:
    - 7/13に開催される本イベントの参加登録をConnpassで開始しました。
      また、学生に対して交通費や宿泊費のサポートを行うスポンサーシップの募集もGoogle Formで開始しました。
    - より様々な人が参加しやすいように参加費は無料、そしていくつかの優先枠をご用意しています。
      みなさんのたくさんのご登録をお待ちしております！🤗
    - 参加登録案内にも記載がありますが、参加が決定している方がやむ得ない事情で参加できなくなった場合、
      他の人へ席をおゆずりいただくために必ずキャンセル処理をお願いいたします。🙏
    - このイベントは、少人数のGoを愛するボランティアのスタッフにより運営され、スポンサー企業によって支えられています。
      私たちはいつでもみなさんの協力をお待ちしています。
    - みんなで最高のイベントにしましょう❤️ 𝝣GO 𝝣GO 𝝣GO ʕ⊙౪⚆ʔ
  registration: 参加登録の案内へ
  scholarships: スカラーシップの案内へ
</i18n>

<template>
  <article class="blog">
    <h3 v-if="titleTag === 'h3'" class="blog-title"> <nuxt-link :to="permalink">{{ $t('title') }}</nuxt-link> </h3>
    <h2 class="blog-title" v-else>
      <span class="blog-index-link"><nuxt-link :to="indexlink">Blog</nuxt-link>/</span>{{ $t('title') }}
    </h2>
    <p class="date">{{ $t('date') }}</p>

    <p v-for="p in $t('body')">{{ p }}</p>
    <p class="anchors">
      <nuxt-link class="button is-inverted is-outlined" :to="localePath('registration')">{{ $t('registration') }}</nuxt-link>
      <nuxt-link class="button is-inverted is-outlined" :to="localePath('scholarships')">{{ $t('scholarships') }}</nuxt-link>
    </p>
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class RegistrationIsOpen extends Vue {
  @Prop() public titleTag!: string

  get permalink(): string {
    return this.localePath({ name: 'blog-slug', params: { slug: 'registration-is-open' } })
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
</style>
