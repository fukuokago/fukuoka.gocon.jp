<template>
  <section class="container">
     <div v-if="computedSpeaker === 'index'">
        <Speakers/>
     </div>
     <div v-else>
        <SpeakerDetails :slug="computedSpeaker" />
     </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Speakers from '~/components/Speakers.vue'
import SpeakerDetails from '~/components/SpeakerDetails.vue'

@Component({
  components: {
    Speakers,
    SpeakerDetails
  }
})
export default class PageSpeakers extends Vue {
  public slug!: string

  get computedSpeaker() {
    return (this.slug === undefined ? 'index' : this.slug)
  }

  private head() {
    return {
      title: 'Speakers'
    }
  }

  private async asyncData({ params }: any) {
    return { slug: params.slug }
  }
}
</script>

<style scoped>
</style>
