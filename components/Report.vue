<i18n>
en:
  desc: |-
    hello
  desc2: |-
    hello
ja:
  desc: |-
    ああああ
  desc2: |-
    ああああ
</i18n>

<template>
  <section class="report">
    <h2>Report</h2>
    <div class="container">
      <p>{{ $t('desc') }}</p>
      <p>{{ $t('desc2') }}</p>
    </div>

    <div class="report-photos is-clearfix">
    <div class="container">
      <h3>Photos</h3>
    </div>
      <LightGallery :images="images" :index="index" :disable-scroll="false" @close="index = null" />
      <div class="report-photo" v-for="(thumb, thumbIndex) in images" :key="thumbIndex" @click="index = thumbIndex" ><img :src="thumb.url.replace(/src/, 'thumb')"></div>
    </div>

    <div class="container">
      <h3>Scholarships</h3>
      <ul class="colored">
        <li><a href="http://bit.ly/32PZHxy">Go Conference’19 summer in Fukuokaに行ってきた</a> by tomocy</li>
        <li><a href="http://bit.ly/2GnQPFJ">Go Conference in Fukuokaに参加してきました！</a> by pirohiropiro</li>
        <li><a href="http://bit.ly/2Zk7rFX">Go Conference in Fukuoka に参加してきました！</a> by dobuzora</li>
      </ul>
    </div>

    <div class="container">
      <h3>Blog written by everyone</h3>
      <ul class="colored">
        <li><a href="http://bit.ly/2JRe9gY">Go Conference Fukuoka 2019から刺激を受けてanalysis toolを作った</a> by nakamura244</li>
        <li><a href="http://bit.ly/2K6Gxeb">初心者がGo Conference’19 Summer in Fukuokaに行って、飛び込みLTしてきた</a> by sinofseven</li>
        <li><a href="http://bit.ly/2Mew2s2">[発表資料] GoCon Fukuokaでgoogle/wireを使った Goらしいアーキテクチャへの取り組みを発表した #gocon</a> by <budougumi0617/li>
        <li><a href="http://bit.ly/2JOLglC">Go Conference'19 Summer in Fukuokaで登壇してきた</a> by songmu</li>
        <li><a href="http://bit.ly/2Gtnr0V">Go Conference'19 Summer in Fukuoka にて登壇、費用対効果のいいユニットテストの考え方と実践について話しました #gocon</a> by hgsgtk</li>
        <li><a href="http://bit.ly/2GreXqS">ＧＯ ｃｏｎｆｅｒｅｎｃｅ’１９ ｓｕｍｍｅｒ ｉｎ ｆｕｋｕｏｋａに出席しました</a> by 福岡市政だより</li>
        <li><a href="http://bit.ly/2YotsWC">Go Conference '19 Summer in Fukuoka にて登壇とスタッフしてきました #gocon</a> by seike460</li>
        <li><a href="http://bit.ly/30Ze5BR">Go Conference’19 Summer in Fukuoka、スタッフとして参加しました</a> by kunit</li>
      </ul>
    </div>

    <div class="container">
      <h3>Tweeeeeeet!</h3>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

interface Image {
  title: string
  url: string
}

@Component
export default class report extends Vue {
  public data() {
    let images: Image[] = []
    for (let i = 1; i <= 76; i++) {
      const n = i < 10 ? `0${i}` : i
      images.push({ title: '', url: `/report/src/gocon-${n}.jpg` })
    }
    const index = null
    return { images, index }
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
  width: 10%;
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
