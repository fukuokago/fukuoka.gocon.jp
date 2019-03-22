<template>
  <section class="container draft">
    <Talks/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Talks from '~/components/Talks.vue'

@Component({
  components: {
    Talks
  }
})
export default class PageTalks extends Vue {
  private head() {
    return {
      title: 'Talks'
    }
  }
}
</script>

<style scoped>
</style>
