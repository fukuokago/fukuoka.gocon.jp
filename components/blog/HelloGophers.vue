<i18n>
en:
  title: 'fmt.Println("hello gophers")'
  date: 'Feb 15, 2019'
  body: |-
    Go Conference '19 Summer in Fukuoka was announced and the site was opened to the public.
    The following schedule is scheduled until we hold the event.
    Also, if there is any notice in the future, I will announce it on Twitter. so please follow {golangjp}.
  schedule:
    - This Site Published on February 15th
    - recruitment of sponsors in early March
    - From the end of March to April 30 Call for paper period
    - Talks release ,CFP result guidance and general registration will start in mid-May
    - Information of Scholarship in June
    - Event held in July 2nd week
ja:
  title: 'fmt.Println("こんにちは ゴーファー")'
  date: '2019-02-15'
  body: |-
    Go Conference'19 Summer in Fukuokaの開催が告知され、サイトが一般公開されました。
    私たちはイベント開催まで以下のスケジュールを予定しています。
    また、今後何かお知らせがあれば、Twitterの{golangjp}でアナウンスいたしますので是非フォローお願い致します。
  schedule:
    - 2月15日にサイト公開
    - 3月上旬にスポンサー募集開始
    - 3月末から4月30日までCFP期間
    - 5月中旬にTalks公開(CFPの結果案内)と一般参加登録開始
    - 6月にScholarshipの案内
    - 7月2週目にイベント開催
</i18n>

<template>
  <article class="blog">
    <h3 v-if="titleTag === 'h3'" class="blog-title"> <nuxt-link :to="permalink">{{ $t('title') }}</nuxt-link> </h3>
    <h2 class="blog-title" v-else>
      <span class="blog-index-link"><nuxt-link :to="indexlink">Blog</nuxt-link>/</span>{{ $t('title') }}
    </h2>
    <p class="date">{{ $t('date') }}</p>
    <i18n path="body" tag="p">
      <a place="golangjp" href="https://twitter.com/golangjp">@golangjp</a>
    </i18n>
    <ul class="colored">
      <li v-for="(val, i) in $t('schedule')">{{ val }}</li>
    </ul>
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class BlogHelloGophers extends Vue {
  @Prop() public titleTag!: string
  get permalink(): string {
    return this.localePath({ name: 'blog-slug', params: { slug: 'hello-gophers' } })
  }
  get indexlink(): string {
    return this.localePath({name: 'blog-slug'})
  }
}
</script>
