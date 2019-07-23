<i18n>
en:
  desc: |-
  desc2: |-
  1f: |-
ja:
  desc: |-
  desc2: |-
  1f: |-
</i18n>

<template>
  <section class="report">
    <h2>Report</h2>
    <div class="container">
      <p>{{ $t('desc') }}</p>
      <p>{{ $t('desc2') }}</p>
    </div>

    <div class="report-photos is-clearfix">
      <LightGallery :images="images0" :index="index0" :disable-scroll="false" @close="index0 = null" />
      <div class="report-photo" v-for="(thumb, thumbIndex0) in images0" :key="thumbIndex0" @click="index0 = thumbIndex0" >
        <img :src="thumb.url.replace(/src/, 'thumb')">
      </div>
    </div>

    <div class="container">
      <h3>Scholarships</h3>
      <ul class="colored">
          </li><a href="">aaa</a></li>
      </ul>
    </div>

    <div class="container">
      <h3>Blog written by everyone</h3>
      <ul class="colored">
          </li><a href="">aaa</a></li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class report extends Vue {
  public data() {
    return {
      images0: [
        { title: 'Welcome to fgn', url: '/report/src/fgn-0.jpg' },
        { title: 'Really elementary school', url: '/report/src/fgn-1.jpg' },
        { title: 'Howlt Coffee Terrace', url: '/report/src/fgn-2.jpg' },
        { title: 'Pizza???', url: '/report/src/fgn-3.jpg' },
        { title: 'Go! Smart City Fukuoka', url: '/report/src/fgn-4.jpg' },
        { title: 'Hi, Receptionist', url: '/report/src/fgn-5.jpg' },
        { title: 'The staff of fgn is here', url: '/report/src/fgn-7.jpg' },
        { title: 'fgn is not a screen but nine multi-displays!', url: '/report/src/fgn-8.jpg' },
        { title: 'From behind', url: '/report/src/fgn-9.jpg' },
        { title: 'A beer server, coffee server, or food will be prepared at this desk', url: '/report/src/fgn-20.jpg' },
      ],
      index0: null
    }
  }
}
</script>

<style scoped>
.report-map {
  width: 100%;
  height: auto;
}
.report-photos {
  line-height: 1;
}
.report-photo {
  width: 20%;
  height: auto;
  float: left;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.report-photo img {
  margin: 0;
  padding: 0;
}
.floor-2nd {
  margin-top: -7%;
}
@media (max-width: 800px) {
  .report-photo {
    width: 25%;
  }
}
</style>
