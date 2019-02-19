<template>
  <section class="container draft">
    <Talks/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Talks from '~/components/Talks.vue'

@Component({
  head() {
    return {
      title: 'Talks',
    }
  },
  components: {
    Talks
  }
})
export default class PageTalks extends Vue {}
</script>

<style scoped>
</style>
