<template>
  <section class="container">
    <TheHome/>
    <News/>
    <Fukuoka/>
    <CallForPapers/>
    <Schedule/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TheHome from '~/components/TheHome.vue'
import News from '~/components/News.vue'
import Fukuoka from '~/components/Fukuoka.vue'
import CallForPapers from '~/components/CallForPapers.vue'
import Schedule from '~/components/Schedule.vue'

@Component({
  head() {
    return {
      title: 'Go Conference‘19 Summer in Fukuoka 🍜',
      titleTemplate: '%s'
    }
  },
  components: {
    TheHome,
    News,
    Fukuoka,
    CallForPapers,
    Schedule
  }
})
export default class PageIndex extends Vue {}
</script>

<style>
</style>
