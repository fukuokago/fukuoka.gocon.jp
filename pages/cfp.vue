<template>
  <section class="container">
    <CallForPapers/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CallForPapers from '~/components/CallForPapers.vue'

@Component({
  components: {
    CallForPapers
  }
})
export default class PageCFP extends Vue {
  private head() {
    return {
      title: 'Code of Papers'
    }
  }
}
</script>

<style scoped>
</style>
