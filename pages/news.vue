<template>
  <section class="container">
    <News/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import News from '~/components/News.vue'

@Component({
  head() {
    return {
      title: 'News',
    }
  },
  components: {
    News
  }
})
export default class PageNews extends Vue {}
</script>

<style scoped>
</style>
