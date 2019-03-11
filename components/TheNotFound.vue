<i18n>
en:
  desc: The link you clicked on may be broken or no longer exist.
  back: Back to the home page
ja:
  desc: クリックしたリンクが壊れているか、もう存在しない可能性があります。
  back: ホームにもどる
</i18n>

<template>
  <section class="notfound container">
    <h2>This page doesn't exist</h2>
    <p>{{ $t('desc') }}</p>
    <p><nuxt-link :to="localePath('/')">Back to the home page</nuxt-link></p>
  </section>
</template>

<style scoped>
.notfound {
  min-height: 10em;
}
</style>
