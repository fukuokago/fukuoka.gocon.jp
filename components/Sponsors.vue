<template>
  <div class="sponser">
    <h2>Sponsors</h2>
    <p>スポンサー募集の資料が出来次第公開いたします。追ってご報告いたします。</p>

    <dl class="sponser">
      <dt>Web Hosting Sponser</dt>
      <dd><a href="https://mc.lolipop.jp/">ロリポップ！マネージドクラウド</a></dd>
    </dl>
  </div>
</template>

<style scoped>
.sponser p {
  margin-bottom: 1em;
  font-weight: normal;
}
dl.sponser {
    width: auto;
    margin: 3em auto 0;
    font-size: 1.4em;
}
dl.sponser dt {
    font-weight: bold;
    width: 40%;
    float: left;
    padding-top: .3em;
    padding-bottom: .2em;
    text-align: right;
}
dl.sponser dd {
    padding-left: 42%;
    padding-top: .3em;
    padding-bottom: .2em;
}
dl.sponser dd:after {
  content: '';
  display: block;
  clear: both;
}
</style>
