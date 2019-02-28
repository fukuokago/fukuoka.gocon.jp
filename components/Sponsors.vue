<i18n>
en:
  description: 'We will make it available as soon as we have available materials for sponsorship. We will report it later.'
ja:
  description: 'スポンサー募集の資料が出来次第公開いたします。追ってご報告いたします。'
</i18n>

<template>
  <div class="sponsors">
    <h2>Sponsors</h2>
    <p>{{ $t('description') }}</p>
  </div>
</template>

/*
    <dl>
      <dt>Web Hosting</dt>
      <dd><a href="https://mc.lolipop.jp/">ロリポップ！マネージドクラウド</a></dd>
    </dl>
 */

<style scoped>
.sponsors dl {
  width: 100%;
  margin: 1em auto;
}
.sponsors dt {
  width: 30%;
  float: left;
  padding: .3em 0 .2em;
  text-align: left;
  white-space: nowrap;
  text-align: right;
}
.sponsors dd {
  padding: .3em 0 .2em;
  padding-left: 35%;
}
.sponsors dd:after {
  content: '';
  display: block;
  clear: both;
}
</style>
