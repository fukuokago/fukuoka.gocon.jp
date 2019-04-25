<template>
  <section class="container">
     <div v-if="computedBlog === ''">
       <h2>Blog</h2>

       <ProposalsFeedbackAndNotice titleTag="h3" />
       <SponsorsArePublished titleTag="h3" />
       <CallForSponsorsIsOpen titleTag="h3" />
       <CallForPapersIsOpen titleTag="h3" />
       <BrandKitReleases titleTag="h3" />
       <HelloGophers titleTag="h3" />
     </div>
     <div v-else>
       <component v-bind:is="computedBlog"></component>
     </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import HelloGophers from '~/components/blog/HelloGophers.vue'
import BrandKitReleases from '~/components/blog/BrandKitReleases.vue'
import CallForPapersIsOpen from '~/components/blog/CallForPapersIsOpen.vue'
import CallForSponsorsIsOpen from '~/components/blog/CallForSponsorsIsOpen.vue'
import SponsorsArePublished from '~/components/blog/SponsorsArePublished.vue'
import ProposalsFeedbackAndNotice from '~/components/blog/ProposalsFeedbackAndNotice.vue'

@Component({
  components: {
    ProposalsFeedbackAndNotice,
    SponsorsArePublished,
    CallForSponsorsIsOpen,
    CallForPapersIsOpen,
    BrandKitReleases,
    HelloGophers
  }
})
export default class PageBlog extends Vue {
  public slug!: string

  get computedBlog() {
    switch (this.slug) {
      case 'proposals-feedback-and-notice':
        return ProposalsFeedbackAndNotice
      case 'sponsors-are-published':
        return SponsorsArePublished
      case 'call-for-sponsors-is-open':
        return CallForSponsorsIsOpen
      case 'call-for-papers-is-open':
        return CallForPapersIsOpen
      case 'brand-kit-releases':
        return BrandKitReleases
      case 'hello-gophers':
        return HelloGophers
      default:
        return ''
    }
  }

  private head() {
    return {
      title: 'Blog'
    }
  }

  private async asyncData({ params }: any) {
    return { slug: params.slug }
  }
}
</script>

<style scoped>
article.blog {
  padding-bottom: 3em;
}
article.blog:last-child {
  padding-bottom: 0;
}
body h2.blog-title {
  padding: 1em 0 .5em;
  font-size: 1.7em;
}
body .blog h3.blog-title a {
  border-bottom: none;
}
</style>
