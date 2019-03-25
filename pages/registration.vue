<template>
  <section class="container">
    <Registration/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Registration from '~/components/Registration.vue'

@Component({
  components: {
    Registration
  }
})
export default class PageRegistration extends Vue {
  private head() {
    return {
      title: 'Registration'
    }
  }
}
</script>

<style scoped>
</style>
