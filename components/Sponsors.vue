<template>
  <div class="sponsers">
    <h2>Sponsors</h2>
    <p>スポンサー募集の資料が出来次第公開いたします。追ってご報告いたします。</p>

    <dl>
      <dt>Web Hosting</dt>
      <dd><a href="https://mc.lolipop.jp/">ロリポップ！マネージドクラウド</a></dd>
    </dl>
  </div>
</template>

<style scoped>
.sponsers dl {
  width: 100%;
  margin: 1em auto;
}
.sponsers dt {
  width: 30%;
  float: left;
  padding: .3em 0 .2em;
  text-align: left;
  white-space: nowrap;
  text-align: right;
}
.sponsers dd {
  padding: .3em 0 .2em;
  padding-left: 35%;
}
.sponsers dd:after {
  content: '';
  display: block;
  clear: both;
}
</style>
