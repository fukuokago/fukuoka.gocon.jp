<template>
  <section class="container">
    <Brand/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Brand from '~/components/Brand.vue'

@Component({
  components: {
    Brand
  }
})
export default class PageBrand extends Vue {
  private head() {
    return {
      title: 'Brand'
    }
  }
}
</script>

<style scoped>
</style>
