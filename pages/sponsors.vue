<template>
  <section class="container">
    <Sponsors/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Sponsors from '~/components/Sponsors.vue'

@Component({
  components: {
    Sponsors
  }
})
export default class PageSponsors extends Vue {
  private head() {
    return {
      title: 'Sponsors'
    }
  }
}
</script>

<style scoped>
</style>
