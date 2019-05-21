<template>
  <section class="container">
    <Speakers/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Speakers from '~/components/Speakers.vue'

@Component({
  components: {
    Speakers
  }
})
export default class PageSpeakers extends Vue {
  private head() {
    return {
      title: 'Speakers & Talks'
    }
  }
}
</script>

<style scoped>
</style>
