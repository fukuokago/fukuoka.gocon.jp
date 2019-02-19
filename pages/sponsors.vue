<template>
  <section class="container">
    <Sponsors/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Sponsors from '~/components/Sponsors.vue'

@Component({
  head() {
    return {
      title: 'Sponsors',
    }
  },
  components: {
    Sponsors
  }
})
export default class PageSponsors extends Vue {}
</script>

<style scoped>
</style>
