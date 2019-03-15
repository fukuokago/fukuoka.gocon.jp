<template>
  <section class="container">
    <component v-bind:is="computedBlog"></component>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloGophers from '~/components/blog/HelloGophers.vue'
import BrandKitReleases from '~/components/blog/BrandKitReleases.vue'
import CallForPapersIsOpen from '~/components/blog/CallForPapersIsOpen.vue'

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
      case 'call-for-papers-is-open':
        return CallForPapersIsOpen
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
