<template>
  <section class="container">
    <News/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import News from '~/components/News.vue'

@Component({
  components: {
    News
  }
})
export default class PageNews extends Vue {
  private head() {
    return {
      title: 'News'
    }
  }
}
</script>

<style scoped>
</style>
