<template>
  <section class="container">
    <CallForPapers/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CallForPapers from '~/components/CallForPapers.vue'

@Component({
  head() {
    return {
      title: 'Call for Papers',
    }
  },
  components: {
    CallForPapers
  }
})
export default class PageCFP extends Vue {}
</script>

<style scoped>
</style>
