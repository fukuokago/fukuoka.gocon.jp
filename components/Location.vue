<i18n>
en:
  fgn: An entrance that leaves an impression of the elementary school gates and school buildings
  desc: |-
    GoConference'19 Summer in Fukuoka will take place at the Fukuoka Growth Next, a building which renovated elementary school, in Fukuoka, JP.
ja:
  fgn: 小学校の校門や校舎の面影を残す入口
  desc: |-
    GoConference'19 Summer in Fukuoka は、福岡天神の真ん中に位置する、旧大名小学校を活用した官民共働型スタートアップ支援施設 "Fukuoka Growth Next" で開催されます。
    地下鉄天神駅より徒歩3分
    JR博多駅より地下鉄で4分
    福岡空港より地下鉄で7分
</i18n>

<template>
  <section class="location">
    <h2>Location</h2>

    <div class="is-clearfix">
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

      <GmapMap map-type-id="roadmap" :center="center" :zoom="zoom" :options="options">
        <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position" />
      </GmapMap>
    </div>

    <div class="location--desc container">
      <i18n path="desc" tag="p">
      </i18n>
      https://growth-next.com/
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Location extends Vue {
  public center = {lat: 33.5894286, lng: 130.3944596}
  public zoom = 17
  public options = {
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    fullscreenControl: true,
    disableDefaultUi: true
  }

  data() {
    return {
      markers: [
        {
          position: { lat: 33.5888978, lng: 130.394886 },
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
  height: 400px;
  float: left;
}
.fgn {
  width: 50%;
  height: 400px;
  float: left;
}
.fgn--inner {
  width: 100%;
  height: 400px;
  overflow: hidden;
}
img.eyecatch {
  width: 100%;
  height: 100%;
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
  top: 410px;
  left: 1em;
}
.fukuoka-growth-next small {
  position: absolute;
  top: 1.5em;
  left: 1.5em;
  color: #fff;
  font-size: .7em;
  font-weight: bold;
}
.fukuoka-growth-next a {
  color: #fff;
  border-bottom: 1px solid #fff;
}
.location--desc {
  padding-top: 4em;
}
</style>
