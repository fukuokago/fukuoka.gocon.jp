<i18n>
en:
  form: this form
  desc: Feel free contact us via this {contact_form}{external}.
ja:
  form: 'こちらのフォーム'
  desc: '{contact_form}{external}からお気軽にお問合せください。'
</i18n>

<template>
  <div class="contact">
    <h2>Contact</h2>
    <i18n path="desc" tag="p">
      <a place="contact_form" href="https://docs.google.com/forms/d/1Dgm1E0Q69Dfp1Q6u712sAuHQyBVC6383llhEeubN8XQ">{{ $t('form') }}</a>
      <span class="external" place="external"><i class="fas fa-external-link-alt"></i></span>
    </i18n>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Contact extends Vue {}
</script>

<style scoped>
</style>
