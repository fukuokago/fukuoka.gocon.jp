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
      title: 'Go Conference‘19 Summer in Fukuoka 🍜',
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
</style>
