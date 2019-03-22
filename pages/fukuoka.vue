<template>
  <section class="container">
    <Fukuoka/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Fukuoka from '~/components/Fukuoka.vue'

@Component({
  components: {
    Fukuoka
  }
})
export default class PageFukuoka extends Vue {
  private head() {
    return {
      title: 'Fukuoka'
    }
  }
}
</script>

<style scoped>
</style>
