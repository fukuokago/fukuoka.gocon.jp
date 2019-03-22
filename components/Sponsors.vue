<i18n>
en:
  description: |-
    Now call for sponsors is open. Sponsor will be posted sequentially as soon as it is decided.
  cfs_button: Become a Sponsor
ja:
  description: '現在、スポンサーを募集しています。スポンサーは決まり次第順次掲載予定です。'
  cfs_button: スポンサーになる
</i18n>

<template>
  <div class="sponsors">
    <h2>Sponsors</h2>
    <p>{{ $t('description') }}</p>
    <p><a class="button is-inverted is-outlined" href="https://docs.google.com/forms/d/17v0fB3UxTLpf6G_th-TMyJTSOBMgVBlPogNk0iubxnQ/">{{ $t('cfs_button') }}</a></p>
  </div>
</template>

<style scoped>
.button {
  padding: 1.7em 2em;
  font-size: .7em;
  margin-right: 1em;
}
</style>
