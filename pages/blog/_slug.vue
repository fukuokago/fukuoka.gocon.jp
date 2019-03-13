<template>
  <section class="container">
    <component v-bind:is="computedBlog"></component>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloGophers from '~/components/blog/HelloGophers.vue'
import BrandKitReleases from '~/components/blog/BrandKitReleases.vue'

@Component({
  head() {
    return {
      title: 'Blog',
    }
  },
  async asyncData({ params }: any) {
    return { slug: params.slug }
  }
})
export default class PageBlog extends Vue {
  public slug!: string

  get computedBlog() {
    switch (this.slug) {
      case 'brand-kit-releases':
        return BrandKitReleases
      case 'hello-gophers':
        return HelloGophers
    }
  }
}
</script>

<style scoped>
</style>
