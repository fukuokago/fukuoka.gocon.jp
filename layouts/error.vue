<template>
  <div>
    <TheNotFound />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TheNotFound from '~/components/TheNotFound.vue'

@Component({
  components: {
    TheNotFound
  }
})
export default class LayoutError extends Vue {}
</script>

<style>
</style>
