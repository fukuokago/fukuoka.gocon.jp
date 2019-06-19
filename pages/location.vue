<template>
  <section>
     <Location/>
     <Venue/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Location from '~/components/Location.vue'
import Venue from '~/components/Venue.vue'

@Component({
  components: {
    Location,
    Venue,
  }
})
export default class PageLocation extends Vue {
  private head() {
    return {
      title: 'Location'
    }
  }
}
</script>

<style scoped>
</style>
