<template>
   <Location/>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Location from '~/components/Location.vue'

@Component({
  components: {
    Location
  }
})
export default class PageLocation extends Vue {
  private head() {
    return {
      title: 'Location'
    }
  }
}
</script>

<style scoped>
</style>
