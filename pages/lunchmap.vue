<template>
   <LunchMap/>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import LunchMap from '~/components/LunchMap.vue'

@Component({
  components: {
    LunchMap
  }
})
export default class PageLunchMap extends Vue {
  private head() {
    return {
      title: 'Lunch Map'
    }
  }
}
</script>

<style scoped>
</style>
