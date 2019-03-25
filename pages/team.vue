<template>
  <section class="container">
    <Team/>
    <Contact/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Team from '~/components/Team.vue'
import Contact from '~/components/Contact.vue'

@Component({
  components: {
    Team,
    Contact
  }
})
export default class PageTeam extends Vue {
  private head() {
    return {
      title: 'Team'
    }
  }
}
</script>

<style scoped>
</style>
