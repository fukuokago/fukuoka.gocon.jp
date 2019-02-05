<template>
  <section class="container">
    <div class="inner">
      <Hello/>
    </div>
    <div class="inner">
      <Schedule/>
    </div>
    <div class="inner">
      <CallForPapers/>
    </div>
    <div class="inner">
      <Talks/>
    </div>
    <div class="inner">
      <Scholarships/>
    </div>
    <CodeOfConduct/>
    <div class="inner">
      <Sponsors/>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Hello from '~/components/Hello.vue'
import Schedule from '~/components/Schedule.vue'
import CallForPapers from '~/components/CallForPapers.vue'
import Talks from '~/components/Talks.vue'
import Scholarships from '~/components/Scholarships.vue'
import CodeOfConduct from '~/components/CodeOfConduct.vue'
import Sponsors from '~/components/Sponsors.vue'

@Component({
  components: {
    Hello,
    Schedule,
    CallForPapers,
    Talks,
    Scholarships,
    CodeOfConduct,
    Sponsors
  }
})
export default class Index extends Vue {
  title = '🍜 Go Conference 2019 Summer in Fukuoka'
}
</script>

<style>
.container {
    width: 1000px;
    margin: 1em auto;
}
.container p {
    font-size: 1.5em;
    line-height: 1.5;
}
.inner {
    margin-bottom: 5em;
}
.inner h2 {
  font-size: 2em;
  font-family: 'Arvo', serif;
  padding: 0 0 2em;
  text-align: center;
}
.inner p {
  text-align: center;
  color: #BBB;
  font-weight: bold;
}
</style>
