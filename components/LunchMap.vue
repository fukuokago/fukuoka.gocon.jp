<i18n>
en:
  desc: Map for have lunch near the venue.
ja:
  desc: 会場近くでランチが食べれるオススメの飲食店マップ🍴です。並んでてお店に入れない、またはお店が開いてない等あるかもしれません。自己責任でお願いします。💁
</i18n>

<template>
  <section class="lunchmap">
    <div class="lunchmap--header container">
      <h2>Lunch Map</h2>
      <p>{{ $t('desc') }}</p>
    </div>

    <GmapMap map-type-id="roadmap" :center="center" :zoom="zoom" :options="options">
      <GmapInfoWindow :options="infoOptions" :position="infoWindowPos" opened="infoWinOpen" @closeclick="infoWinOpen=false">
        <div class="gmap--infowin">
          <p class="gmap--infoimg"><img :src="infoContent.image" width=200 /></p>
          <p class="gmap--infotext"><a :href="infoContent.url" target="_blank">{{infoContent.title}}</a></p>
        </div>
      </GmapInfoWindow>
      <GmapMarker v-for="(m, index) in markers.ramen" @click="toggleInfoWindow(m, index)"
        :key="index" :position="m.position" :clickable="true" :draggable="false" :icon="'/eat/ramen.png'"></GmapMarker>
      <GmapMarker v-for="(m, index) in markers.soba" @click="toggleInfoWindow(m, index)"
        :key="index" :position="m.position" :clickable="true" :draggable="false" :icon="'/eat/soba.png'"></GmapMarker>
      <GmapMarker v-for="(m, index) in markers.udon" @click="toggleInfoWindow(m, index)"
        :key="index" :position="m.position" :clickable="true" :draggable="false" :icon="'/eat/udon.png'"></GmapMarker>
      <GmapMarker v-for="(m, index) in markers.curry" @click="toggleInfoWindow(m, index)"
        :key="index" :position="m.position" :clickable="true" :draggable="false" :icon="'/eat/curry.png'"></GmapMarker>
      <GmapMarker v-for="(m, index) in markers.diner" @click="toggleInfoWindow(m, index)"
        :key="index" :position="m.position" :clickable="true" :draggable="false" :icon="'/eat/dinner.png'"></GmapMarker>
      <GmapMarker v-for="(m, index) in markers.tempura" @click="toggleInfoWindow(m, index)"
        :key="index" :position="m.position" :clickable="true" :draggable="false" :icon="'/eat/tempura.png'"></GmapMarker>
    </GmapMap>

    <div class="lunchmap--list container">
      <ul>
        <li><img src="/eat/ramen.png">ラーメン<ul class="colored"> <li v-for="(m) in markers.ramen">{{ m.content.title }}</li> </ul> </li>
        <li><img src="/eat/soba.png">蕎麦<ul class="colored"> <li v-for="(m) in markers.soba">{{ m.content.title }}</li> </ul> </li>
        <li><img src="/eat/udon.png">うどん<ul class="colored"> <li v-for="(m) in markers.udon">{{ m.content.title }}</li> </ul> </li>
        <li><img src="/eat/curry.png">カレー<ul class="colored"> <li v-for="(m) in markers.curry">{{ m.content.title }}</li> </ul> </li>
        <li><img src="/eat/dinner.png">カフェ・食堂<ul class="colored"> <li v-for="(m) in markers.diner">{{ m.content.title }}</li> </ul> </li>
        <li><img src="/eat/tempura.png">天ぷら<ul class="colored"> <li v-for="(m) in markers.tenpura">{{ m.content.title }}</li> </ul> </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
const styles = require('~/static/googlemap-styles/eat.json')
const markers = require('~/static/eat.json')
import { Component, Vue } from 'nuxt-property-decorator'
const fgn = { lat: 33.5888978, lng: 130.394886 }

@Component
export default class Location extends Vue {
  public center = fgn
  public zoom = 16
  public options = {
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    fullscreenControl: true,
    disableDefaultUi: true,
    styles: styles
  }
  public infoWinOpen = false
  public infoWindowPos = null
  public infoContent = { title: null, url: null }
  public infoOptions = {
    pixelOffset: { width: 0, height: -55 }
  }

  toggleInfoWindow(marker, id) {
    this.infoWinOpen = false
    this.infoWindowPos = marker.position
    this.infoContent = marker.content
    this.infoWinOpen = true
  }

  data() {
    return {
      markers: markers
    }
  }
}
</script>

<style scoped>
.vue-map-container {
  width: 100%;
  height: 700px;
}
.gmap--infowin {
  padding: 1em;
}
.gmap--infotext {
  font-size: 12px;
  padding-bottom: .2em;
  font-weight: bold;
}
.gmap--infotext a {
  font-size: 12px;
  font-weight: normal;
}
</style>
