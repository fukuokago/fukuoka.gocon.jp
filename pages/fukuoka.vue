<template>
  <section class="container">
    <Fukuoka/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Fukuoka from '~/components/Fukuoka.vue'

@Component({
  head() {
    return {
      title: 'Fukuoka',
    }
  },
  components: {
    Fukuoka
  }
})
export default class PageFukuoka extends Vue {}
</script>

<style scoped>
</style>
