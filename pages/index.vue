<template>
  <section class="container">
    <Hello/>
    <Schedule/>
    <CallForPapers/>
    <Registration/>
    <div class="inner">
      <Talks/>
    </div>
    <div class="inner">
      <Scholarships/>
    </div>
    <CodeOfConduct/>
    <Sponsors/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Hello from '~/components/Hello.vue'
import Schedule from '~/components/Schedule.vue'
import CallForPapers from '~/components/CallForPapers.vue'
import Registration from '~/components/Registration.vue'
import Talks from '~/components/Talks.vue'
import Scholarships from '~/components/Scholarships.vue'
import CodeOfConduct from '~/components/CodeOfConduct.vue'
import Sponsors from '~/components/Sponsors.vue'

@Component({
  components: {
    Hello,
    Schedule,
    CallForPapers,
    Registration,
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
h2 {
  font-size: 2em;
  font-family: 'Arvo', serif;
  padding: 2em 0 2em;
  text-align: center;
}
h3 {
  font-size: 1.7em;
  font-family: 'Arvo', serif;
  padding-bottom: .5em;
  padding-top: 1em;
}
p {
  text-align: left;
  font-weight: normal;
  padding-bottom: 1em;
  color: #888;
}
ul {
  font-size: 1.3em;
  list-style-type: circle;
  padding-left: 1em;
  padding-bottom: 1em;
}
ol {
  font-size: 1.3em;
  padding-left: 1em;
}
li {
  line-height: 1.7;
  color: #888;
}
.inner {
    margin-bottom: 5em;
}
.inner p {
  text-align: center;
  color: #BBB;
  font-weight: bold;
}
</style>
