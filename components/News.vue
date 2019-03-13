<i18n>
en:
  news:
    - title: 'fmt.Println("hello gophers")'
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
    - title: 'Released brand kit'
      date: 'Mar 13, 2019'
      body: |-
        We was released brand kit for this event.
        Brand kit included logo data and wallpaper. We will add more.
        And guidelines for assets using is nothing. So use freely.
      button: Go to Brand page
ja:
  news:
    - title: 'fmt.Println("こんにちは ゴーファー")'
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
    - title: 'ブランドキットを公開しました'
      date: '2019-03-13'
      body: |-
        このイベントのブランドキットを公開しました。
        具体的にはイベントのロゴデータやメインビジュアルの壁紙になります。おそらく今後これらは追加していく予定です。
        なお、利用のためのガイドラインは設けいていないので自由に使って大丈夫です。
      button: Brandページへ
</i18n>

<template>
  <div class="news">
    <h2>Latest News</h2>

    <article>
      <h3>{{ $t('news.1.title') }}</h3>
      <p class="date">{{ $t('news.1.date') }}</p>
      <p>{{ $t('news.1.body') }}</p>
      <nuxt-link :to="localePath('brand')" class="button is-inverted is-outlined">{{ $t('news.1.button') }}</nuxt-link>
    </article>

    <article>
      <h3>{{ $t('news.0.title') }}</h3>
      <p class="date">{{ $t('news.0.date') }}</p>
      <i18n path="news.0.body" tag="p">
        <a place="golangjp" href="https://twitter.com/golangjp">@golangjp</a>
      </i18n>
      <ul class="colored">
        <li v-for="(val, i) in $t('news.0.schedule')">{{ val }}</li>
      </ul>
    </article>
  </div>
</template>

<style scoped>
article {
  padding-bottom: 3em;
}
article:last-child {
  padding-bottom: 0;
}
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
