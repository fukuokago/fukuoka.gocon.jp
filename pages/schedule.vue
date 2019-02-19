<template>
  <section class="container">
    <Schedule/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Schedule from '~/components/Schedule.vue'

@Component({
  head() {
    return {
      title: 'Schedule',
    }
  },
  components: {
    Schedule
  }
})
export default class PageSchedule extends Vue {}
</script>

<style scoped>
</style>
