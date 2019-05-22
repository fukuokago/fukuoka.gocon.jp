<i18n>
en:
  title: 'Schedule and speakers are published'
  date: 'May 23, 2019'
  body: |-
    Thank you for your submission.
  schedule: Schedule
  speakers: Speakers
ja:
  title: 'タイムテーブルとスピーカーを公開しました'
  date: '2019-05-23'
  body: |-
    CFPに応募してくださった方々、ありがとうございまいした。
  schedule: タイムテーブルを見る
  speakers: スピーカーの一覧を見る
</i18n>

<template>
  <article class="blog">
    <h3 v-if="titleTag === 'h3'" class="blog-title"> <nuxt-link :to="permalink">{{ $t('title') }}</nuxt-link> </h3>
    <h2 class="blog-title" v-else>
      <span class="blog-index-link"><nuxt-link :to="indexlink">Blog</nuxt-link>/</span>{{ $t('title') }}
    </h2>
    <p class="date">{{ $t('date') }}</p>
    <i18n path="body" tag="p">
      <nuxt-link class="button is-inverted is-outlined" place="schedule" :to="schedulelink">{{ $t('schedule') }}</nuxt-link>
      <nuxt-link class="button is-inverted is-outlined" place="speakers" :to="speakerslink">{{ $t('schedule') }}</nuxt-link>
    </i18n>
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
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
