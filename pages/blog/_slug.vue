<template>
  <section class="container">
    <component v-bind:is="blog"></component>
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
  },
  computed: {
    blog() {
      switch (this.slug) {
        case 'brand-kit-releases':
          return BrandKitReleases
        case 'hello-gophers':
          return HelloGophers
      }
    }
  }
})
export default class PageBlog extends Vue {}
</script>

<style scoped>
</style>
