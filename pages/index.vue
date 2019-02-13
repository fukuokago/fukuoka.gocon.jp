<template>
  <section class="container">
    <News/>
    <Fukuoka/>
    <CallForPapers/>
    <Schedule/>
    <Registration/>
    <div class="draft">
      <Talks/>
    </div>
    <div class="draft">
      <Scholarships/>
    </div>
    <CodeOfConduct/>
    <Sponsors/>
    <div class="draft">
      <Team/>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import News from '~/components/News.vue'
import Fukuoka from '~/components/Fukuoka.vue'
import Schedule from '~/components/Schedule.vue'
import CallForPapers from '~/components/CallForPapers.vue'
import Registration from '~/components/Registration.vue'
import Talks from '~/components/Talks.vue'
import Scholarships from '~/components/Scholarships.vue'
import CodeOfConduct from '~/components/CodeOfConduct.vue'
import Sponsors from '~/components/Sponsors.vue'
import Team from '~/components/Team.vue'

@Component({
  head() {
    return {
      title: 'Go Conference 2019 Summer in Fukuoka 🍜',
      titleTemplate: '%s'
    }
  },
  components: {
    News,
    Fukuoka,
    Schedule,
    CallForPapers,
    Registration,
    Talks,
    Scholarships,
    CodeOfConduct,
    Sponsors,
    Team
  }
})
export default class PageIndex extends Vue {}
</script>

<style>
.container {
  margin: 1em auto;
  padding: 0 1em;
}
a {
  color: #00ADD8;
  border-bottom: 1px solid #00ADD8;
}
a:hover {
  color: #000;
  border: none;
}
.container p {
  font-size: 1.5em;
  line-height: 1.5;
}
h2 {
  font-size: 2em;
  font-family: 'Arvo', serif;
  font-weight: bold;
  padding: 2em 0 2em;
  text-align: center;
  color: #00758D;
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
.draft {
  margin-bottom: 5em;
}
.draft p {
  text-align: center;
  color: #BBB;
  font-weight: bold;
}
</style>
