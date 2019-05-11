<i18n>
en:
  desc: This is Lunch MAP!
ja:
  desc: ランチマップだよ!
</i18n>
<template>
  <section class="location is-clearfix">
    <h2>LunchMap</h2>
    <div class="container">
      <i18n path="desc" tag="p"></i18n>
    </div>
    <iframe class='lunchmap-container' src="https://www.google.com/maps/d/embed?mid=1QB35AAvbnwmqkuoVfpQqlxdAOUTNX0Bh&hl=ja&z=17&ll=33.588,130.39488440000002"></iframe>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class LunchMap extends Vue {}
</script>

<style scoped>
.lunchmap-container {
  width: 100%;
  height: 768px;
  float: left;
  z-index: 9999;
}
@media (max-width: 1000px) {
  .lunchmap-container {
    width: 100%;
    height: 360px;
    float: none;
  }
}
</style>
