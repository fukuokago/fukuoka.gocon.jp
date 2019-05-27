<i18n>
en:
  title: 'Registration and Scholarship is open'
  date: 'May 28, 2019'
  body:
    - Registration is now open on Connpass.
  registration: Go to Registration
  scholarships: Go to Scholarships
ja:
  title: '参加登録とスカラーシップの募集を開始しました'
  date: '2019-05-28'
  body:
    - イベントの参加登録をConnpassで開始しました。
  registration: 参加登録案内へ
  scholarships: スカラーシップ案内へ
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
