<template>
  <section class="container">
    <Brand/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Brand from '~/components/Brand.vue'

@Component({
  head() {
    return {
      title: 'Brand',
    }
  },
  components: {
    Brand
  }
})
export default class PageBrand extends Vue {}
</script>

<style scoped>
</style>
