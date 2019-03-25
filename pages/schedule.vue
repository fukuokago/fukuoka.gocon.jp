<template>
  <section class="container">
    <Schedule/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Schedule from '~/components/Schedule.vue'

@Component({
  components: {
    Schedule
  }
})
export default class PageSchedule extends Vue {
  private head() {
    return {
      title: 'Schedule'
    }
  }
}
</script>

<style scoped>
</style>
