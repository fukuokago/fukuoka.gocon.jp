<template>
  <section>
    <div class="container">
      <TheHome/>
    </div>
    <div class="container">
      <News/>
    </div>
    <div class="container">
      <Sponsors/>
    </div>
    <Fukuoka/>
    <div class="container">
      <CallForPapers/>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TheHome from '~/components/TheHome.vue'
import News from '~/components/News.vue'
import Sponsors from '~/components/Sponsors.vue'
import Fukuoka from '~/components/Fukuoka.vue'
import CallForPapers from '~/components/CallForPapers.vue'

@Component({
  components: {
    TheHome,
    News,
    Sponsors,
    Fukuoka,
    CallForPapers
  }
})
export default class PageIndex extends Vue {
  private head() {
    return {
      title: 'Go Conference‘19 Summer in Fukuoka 🍜',
      titleTemplate: '%s'
    }
  }
}
</script>

<style>
</style>
