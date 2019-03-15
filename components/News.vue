<template>
  <div class="latest-news">
    <h2>Latest News</h2>

    <CallForPapersIsOpen titleTag="h3" />
    <BrandKitReleases titleTag="h3" />
    <HelloGophers titleTag="h3" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CallForPapersIsOpen from '~/components/blog/CallForPapersIsOpen.vue'
import HelloGophers from '~/components/blog/HelloGophers.vue'
import BrandKitReleases from '~/components/blog/BrandKitReleases.vue'

@Component({
  components: {
    CallForPapersIsOpen,
    BrandKitReleases,
    HelloGophers
  }
})
export default class LatestNews extends Vue {}
</script>

<style scoped>
article {
  padding-bottom: 3em;
}
article:last-child {
  padding-bottom: 0;
}
body .blog-title {
  padding: 1em 0 .5em;
  font-size: 1.7em;
}
body .blog h3.blog-title a {
  border-bottom: none;
}
</style>
