<template>
  <section class="container">
    <CFS/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CFS from '~/components/CallForSponsors.vue'

@Component({
  head() {
    return {
      title: 'Call for Sponsors',
    }
  },
  components: {
    CFS
  }
})
export default class PageCallForSponsors extends Vue {}
</script>

<style scoped>
</style>
