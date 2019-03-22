<template>
  <section class="container draft">
    <Scholarships/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Scholarships from '~/components/Scholarships.vue'

@Component({
  components: {
    Scholarships
  }
})
export default class PageScholarships extends Vue {
  private head() {
    return {
      title: 'Scholarships'
    }
  }
}
</script>

<style scoped>
</style>
