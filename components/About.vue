<template>
  <div>
    <p>「<strong>Go Conference</strong>」は、世界的に見ても初期から行われており、Goコミュニティにとって意義のあるイベントです。カンファレンスでは毎年数百名のGopherが参加しGoにまつわる多様なセッションを通した交流が行われています。</p>
    <p>今回、ついに、このカンファレンスを福岡で開催します。<em>エンジニアにとって魅力ある土地、福岡で、今注目を集めるプログラミング言語Goを通じて様々な技術の話をし、学び合い、楽しい時間を過ごし、開発者同士の交流を深めましょう！</em></p>

    <dl class="meta">
      <dt>日時</dt>
      <dd>2019年７月13日 土曜日</dd>
      <dt>会場</dt>
      <dd>福岡市天神付近を予定</dd>
    </dl>
  </div>
</template>

<style scoped>
.about p {
  padding-bottom: 1em;
}
.about strong {
  font-weight: bold;
  color: #666;
}
.about em {
  font-style: normal;
  color: #000;
}
.meta {
  width: 70%;
  margin: 3em 0 0;
  font-size: 1.4em;
  border-bottom: 1px solid #888;
}
.meta dt {
  font-weight: bold;
  width: 5em;
  float: left;
  border-top: 1px solid #888;
  padding-top: .3em;
  padding-bottom: .2em;
  text-align: center;
  letter-spacing: 1em;
}
.meta dd {
  padding-left: 30%;
  border-top: 1px solid #888;
  padding-top: .3em;
  padding-bottom: .2em;
}
.meta dd:after {
  content: '';
  display: block;
  clear: both;
}
@media (min-width: 401px) and (max-width: 500px) {
  .meta {
    width: 90%;
  }
}
@media (max-width: 400px) {
  .meta {
    width: 96%;
    font-size: 1em;
  }
}
</style>
