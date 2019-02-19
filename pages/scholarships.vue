<template>
  <section class="container draft">
    <Scholarships/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Scholarships from '~/components/Scholarships.vue'

@Component({
  head() {
    return {
      title: 'Scholarships',
    }
  },
  components: {
    Scholarships
  }
})
export default class PageScholarships extends Vue {}
</script>

<style scoped>
</style>
