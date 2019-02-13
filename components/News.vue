<template>
  <section class="news">
    <h2>Latest News</h2>
    <article>
      <h3>fmt.Println("Hello Gophers")</h3>
      <p class="date">Feb 15, 2019</p>
      <p>Go Conference 2019 Summer in Fukuokaの開催が告知され、サイトが一般公開されました。
      私たちはイベント開催まで以下のスケジュールを予定しています。
      また、今後何かお知らせがあれば、Twitterの<a href="https://twitter.com/golangjp">@golangjp</a>で
      アナウンスいたしますので是非フォローお願い致します。</p>
      <ul>
        <li>2月15日にサイト公開</li>
        <li>3月上旬にスポンサー募集開始</li>
        <li>3月末から4月30日までCFP期間</li>
        <li>5月中旬にTalks公開(CFPの結果案内)と一般参加登録開始</li>
        <li>6月にScholarshipの案内</li>
        <li>7月2週目にイベント開催</li>
      </ul>
    </article>
  </section>
</template>

<style scoped>
.news p.date {
  margin-top: -.5em;
  margin-bottom: .2em;
  font-weight: bold;
  color: #ccc;
  font-family: 'Arvo', serif;
}
.news p {
  margin-bottom: .5em;
}
.news ul {
  list-style-type: circle;
  padding-left: 1em;
}
.news li {
  line-height: 1.8;
  color: #888;
}
</style>
