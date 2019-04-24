<i18n>
en:
  fgn: An entrance that leaves an impression of the elementary school gates and school buildings
  desc: |-
    GoConference'19 Summer in Fukuoka will take place at the Fukuoka Growth Next, a building which renovated elementary school, in Fukuoka, JP.
    The Fukuoka Growth Next is currently under construction for the 5/31 (Fri) renewal.
  access:
    title: How to Access
    list:
      - 🚇 Tenjin subway station is convenient for the venue
      - By subway, it takes 7 minutes from  ✈️Fukuoka Airport and 5 minutes from 🚅 JR-Hakata Station to Tenjin Station
      - It takes 3 minutes on Walking from Tenjin Station to here
      - 🙅‍ There is no parking lot or bicycle parking lot, 💁‍so please come by public transportation
  subwaytable: Time Table for Tenjin Station
ja:
  fgn: 小学校の校門や校舎の面影を残す入口（だが今は取り壊されている）
  desc: |-
    Go Conference'19 Summer in Fukuoka は、福岡天神の中心に位置する、旧大名小学校を活用した官民共働型スタートアップ支援施設 {fgn} で開催されます。
    Fukuoka Growth Nextは、現在 5/31（金）のリニューアルにむけて工事中となっております。
  access:
    title: アクセス方法
    list:
      - 会場には、🚇 地下鉄天神駅のご利用が便利です
      - 地下鉄天神駅へは、 ✈️福岡空港より7分、🚅JR博多駅より5分で着きます
      - 地下鉄天神駅からは徒歩で約3分ほどです
      - 🙅‍♂️駐車場や駐輪場はありませんので、💁‍公共交通機関でご来場ください
  subwaytable: 地下鉄天神駅の時刻表
</i18n>

<template>
  <section class="location is-clearfix">
    <h2>Location</h2>

    <GmapMap map-type-id="roadmap" :center="center" :zoom="zoom" :options="options">
      <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position" />
    </GmapMap>

    <picture class="fgn">
      <figure class="fukuoka-growth-next">
        <div class="fgn--inner">
          <source type="image/webp" srcset="~static/img/fgn.webp">
          <img class="eyecatch" src="~assets/img/fgn.jpg" alt="fgn" />
        </div>
        <figcaption>{{ $t('fgn') }}</figcaption>
        <small>Photo by <a rel="https://growth-next.com/en/event/1038">Fukuoka Growth Next</a></small>
      </figure>
    </picture>

    <div class="location--desc container">
      <i18n path="desc" tag="p">
        <a place="fgn" href="https://growth-next.com/">Fukuoka Growth Next</a>
      </i18n>
      <h3>{{ $t('access.title') }}</h3>
      <ul class="colored">
        <li v-for="(val, i) in $t('access.list')">{{ val }}</li>
      </ul>
      <p><a href="https://subway.city.fukuoka.lg.jp/pdf/daiya/tenjin.pdf" class="button large is-inverted is-outlined">🚇 {{ $t('subwaytable') }}</a></p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
const styles = require('~/static/googlemap-styles.json')
const fgn = { lat: 33.5888978, lng: 130.394886 }

@Component({})
export default class Location extends Vue {
  public center = fgn
  public zoom = 13
  public options = {
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    rotateControl: true,
    fullscreenControl: true,
    disableDefaultUi: true,
    styles: styles
  }

  data() {
    return {
      markers: [
        {
          position: fgn,
          title: 'Fukuoka Growth Next'
        }
      ]
    }
  }
}
</script>

<style scoped>
.vue-map-container {
  width: 50%;
  height: 500px;
  float: left;
}
.fgn {
  width: 50%;
  height: 500px;
  float: left;
}
.fgn--inner {
  width: 100%;
  height: 500px;
  overflow: hidden;
  background-color: #ccc;
}
img.eyecatch {
  width: 100%;
  height: auto;
}
.fukuoka-growth-next {
  position: relative;
}
.fukuoka-growth-next figcaption {
  color: #666;
  font-size: .8em;
  font-weight: normal;
  font-style: italic;
  text-align: left;
  display: block;
  width: 100%;
  position: absolute;
  top: 510px;
  left: 1em;
}
.fukuoka-growth-next small {
  position: absolute;
  bottom: 1.5em;
  right: 1.5em;
  color: #fff;
  font-size: .7em;
  font-weight: bold;
}
.fukuoka-growth-next a {
  color: #fff;
  border-bottom: 1px solid #fff;
}
.location--desc {
  padding-top: 550px;
}
@media (max-width: 1000px) {
  .fukuoka-city figcaption {
    font-size: .6em;
  }
  .fukuoka-city small {
    font-size: .5em;
    top: 1em;
    right: 1em;
  }
  .vue-map-container {
    width: 100%;
    height: 360px;
    float: none;
  }
  .fgn {
    width: 200px;
    height: 100px;
    float: left;
    margin: 1em;
  }
  .fgn--inner {
    width: 200px;
    height: 100px;
  }
  .location--desc {
    padding-top: 0;
  }
  .fukuoka-growth-next small,
  .fukuoka-growth-next figcaption {
    display: none;
  }
}
</style>
