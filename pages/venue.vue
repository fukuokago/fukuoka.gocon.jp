<template>
  <section>
     <Venue/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Venue from '~/components/Venue.vue'

@Component({
  components: {
    Venue,
  }
})
export default class PageVenue extends Vue {
  private head() {
    return {
      title: 'Venue'
    }
  }
}
</script>

<style scoped>
</style>
