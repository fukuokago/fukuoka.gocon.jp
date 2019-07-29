<template>
  <section>
     <Report/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Report from '~/components/Report.vue'

@Component({
  components: {
    Report,
  }
})
export default class PageReport extends Vue {
  private head() {
    return {
      title: 'Report'
    }
  }
}
</script>

<style scoped>
</style>
