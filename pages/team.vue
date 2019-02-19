<template>
  <section class="container">
    <Team/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Team from '~/components/Team.vue'

@Component({
  head() {
    return {
      title: 'Team',
    }
  },
  components: {
    Team
  }
})
export default class PageTeam extends Vue {}
</script>

<style scoped>
</style>
