<template>
  <section>
    <div class="container">
      <TheHome/>
    </div>
    <div class="container">
      <News/>
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
import Fukuoka from '~/components/Fukuoka.vue'
import CallForPapers from '~/components/CallForPapers.vue'

@Component({
  components: {
    TheHome,
    News,
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
