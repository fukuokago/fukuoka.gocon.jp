<template>
  <section class="container">
    <CodeOfConduct/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CodeOfConduct from '~/components/CodeOfConduct.vue'

@Component({
  head() {
    return {
      title: 'Code of Conduct',
    }
  },
  components: {
    CodeOfConduct
  }
})
export default class PageCodeOfConduct extends Vue {}
</script>

<style scoped>
</style>
