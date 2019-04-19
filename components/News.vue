<template>
  <div class="latest-news">
    <h2>Latest News</h2>

    <SponsorsIsPublished titleTag="h3" />
    <CallForSponsorsIsOpen titleTag="h3" />
    <CallForPapersIsOpen titleTag="h3" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SponsorsIsPublished from '~/components/blog/SponsorsIsPublished.vue'
import CallForSponsorsIsOpen from '~/components/blog/CallForSponsorsIsOpen.vue'
import CallForPapersIsOpen from '~/components/blog/CallForPapersIsOpen.vue'

@Component({
  components: {
    SponsorsIsPublished,
    CallForSponsorsIsOpen,
    CallForPapersIsOpen
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
