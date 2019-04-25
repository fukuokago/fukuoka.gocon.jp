<template>
  <div class="latest-news">
    <h2>Latest News</h2>

    <ProposalsFeedbackAndNotice titleTag="h3" />
    <SponsorsArePublished titleTag="h3" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SponsorsArePublished from '~/components/blog/SponsorsArePublished.vue'
import ProposalsFeedbackAndNotice from '~/components/blog/ProposalsFeedbackAndNotice.vue'

@Component({
  components: {
    SponsorsArePublished,
    ProposalsFeedbackAndNotice
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
