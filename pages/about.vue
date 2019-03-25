<template>
  <section class="container">
    <About/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import About from '~/components/About.vue'

@Component({
  components: {
    About
  }
})
export default class PageAbout extends Vue {
  private head() {
    return {
      title: 'About'
    }
  }
}
</script>

<style scoped>
</style>
