<i18n>
en:
  desc: |-
    Go Conference '19 Summer in Fukuoka was announced and the site was opened to the public.
    The following schedule is scheduled until we hold the event.
    Also, if there is any notice in the future, I will announce it on Twitter. so please follow {golangjp}.
  schedule_1: This Site Published on February 15th
  schedule_2: recruitment of sponsors in early March
  schedule_3: From the end of March to April 30 Call for paper period
  schedule_4: Talks release ,CFP result guidance and general registration will start in mid-May
  schedule_5: Information of Scholarship in June
  schedule_6: Event held in July 2nd week
ja:
  desc: |-
    Go Conference'19 Summer in Fukuokaの開催が告知され、サイトが一般公開されました。
    私たちはイベント開催まで以下のスケジュールを予定しています。
    また、今後何かお知らせがあれば、Twitterの{golangjp}で
    アナウンスいたしますので是非フォローお願い致します。
  schedule_1: 2月15日にサイト公開
  schedule_2: 3月上旬にスポンサー募集開始
  schedule_3: 3月末から4月30日までCFP期間
  schedule_4: 5月中旬にTalks公開(CFPの結果案内)と一般参加登録開始
  schedule_5: 6月にScholarshipの案内
  schedule_6: 7月2週目にイベント開催
</i18n>

<template>
  <section class="news">
    <h2>Latest News</h2>
    <article>
      <h3>fmt.Println("Hello Gophers")</h3>
      <p class="date">Feb 15, 2019</p>
      <i18n path="desc" tag="p">
        <a place="golangjp" href="https://twitter.com/golangjp">@golangjp</a>
      </i18n>
      <ul class="colored">
        <li>{{ $t('schedule_1') }}</li>
        <li>{{ $t('schedule_2') }}</li>
        <li>{{ $t('schedule_3') }}</li>
        <li>{{ $t('schedule_4') }}</li>
        <li>{{ $t('schedule_5') }}</li>
        <li>{{ $t('schedule_6') }}</li>
      </ul>
    </article>
  </section>
</template>

<style scoped>
.news p.date {
  margin-top: -.5em;
  margin-bottom: .2em;
  font-weight: bold;
  color: #bbb;
  font-family: 'Arvo', serif;
}
.news p {
  margin-bottom: .5em;
}
</style>
