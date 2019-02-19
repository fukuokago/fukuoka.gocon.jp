<template>
  <section class="container">
    <About/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import About from '~/components/About.vue'

@Component({
  head() {
    return {
      title: 'About',
    }
  },
  components: {
    About
  }
})
export default class PageAbout extends Vue {}
</script>

<style scoped>
</style>
