<template>
  <section class="container">
    <Registration/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Registration from '~/components/Registration.vue'

@Component({
  head() {
    return {
      title: 'Registration',
    }
  },
  components: {
    Registration
  }
})
export default class PageRegistration extends Vue {}
</script>

<style scoped>
</style>
