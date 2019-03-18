<template>
  <section class="container">
    <Team/>
    <Contact/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Team from '~/components/Team.vue'
import Contact from '~/components/Contact.vue'

@Component({
  head() {
    return {
      title: 'Team',
    }
  },
  components: {
    Team,
    Contact
  }
})
export default class PageTeam extends Vue {}
</script>

<style scoped>
</style>
