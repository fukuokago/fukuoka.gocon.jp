<i18n>
en:
  description: |-
    Call for sponsors is closed yet. Sponsor will be posted sequentially as soon as it is decided.
  cfs_button: Call for Sponsors
ja:
  description: 'スポンサー募集がまだ開始されていません。スポンサーは決まり次第順次掲載予定です。'
  cfs_button: スポンサー募集
</i18n>

<template>
  <div class="sponsors">
    <h2>Sponsors</h2>
    <p>{{ $t('description') }}</p>
    <p><nuxt-link class="button is-inverted is-outlined" :to="localePath('call-for-sponsors')">{{ $t('cfs_button') }}</nuxt-link></p>
  </div>
</template>

<style scoped>
.button {
  padding: 1.7em 2em;
  font-size: .7em;
  margin-right: 1em;
}
</style>
