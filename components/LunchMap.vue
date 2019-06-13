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

    <GmapMap map-type-id="roadmap" :center="center" :zoom="zoom" :options="options" >
      <GmapInfoWindow :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen = false" >
        <div class="gmap--infowin">
          <p class="gmap--infoimg"> <img :src="infoContent.image" width="200" /> </p>
          <p class="gmap--infotext"> <a :href="infoContent.url" target="_blank">{{ infoContent.title }}</a> </p>
        </div>
      </GmapInfoWindow>
      <GmapMarker v-for="(m, i) in ramens" @click="toggleInfoWindow(m, i)" :key="i + '-1'" :position="m.position"
                  :clickable="true" :draggable="false" :icon="getMarker('ramen')" ></GmapMarker>
      <GmapMarker v-for="(m, i) in sobas" @click="toggleInfoWindow(m, i)" :key="i + '-2'" :position="m.position"
        :clickable="true" :draggable="false" :icon="getMarker('soba')" ></GmapMarker>
      <GmapMarker v-for="(m, i) in udons" @click="toggleInfoWindow(m, i)" :key="i + '-3'" :position="m.position"
        :clickable="true" :draggable="false" :icon="getMarker('udon')" ></GmapMarker>
      <GmapMarker v-for="(m, i) in currys" @click="toggleInfoWindow(m, i)" :key="i + '-4'" :position="m.position"
        :clickable="true" :draggable="false" :icon="getMarker('curry')" ></GmapMarker>
      <GmapMarker v-for="(m, i) in dinners" @click="toggleInfoWindow(m, i)" :key="i + '-5'" :position="m.position"
        :clickable="true" :draggable="false" :icon="getMarker('dinner')" ></GmapMarker>
      <GmapMarker v-for="(m, i) in tempuras" @click="toggleInfoWindow(m, i)" :key="i + '-6'" :position="m.position"
        :clickable="true" :draggable="false" :icon="getMarker('tempura')" ></GmapMarker>
    </GmapMap>
    <div class="lunchmap--list container">
      <input name="eat" type="radio" id="all" value="all" v-model="category" />
      <label for="all">😋全て</label>
      <input name="eat" type="radio" id="ramen" value="ramen" v-model="category" />
      <label for="ramen"><img class="marker-icon" src="/marker/ramen.svg" />ラーメン</label>
      <input name="marker" type="radio" id="soba" value="soba" v-model="category" />
      <label for="soba"><img class="marker-icon" src="/marker/soba.svg" />蕎麦</label>
      <input name="marker" type="radio" id="udon" value="udon" v-model="category" />
      <label for="udon" ><img class="marker-icon" src="/marker/udon.svg" />うどん</label>
      <input name="marker" type="radio" id="curry" value="curry" v-model="category" />
      <label for="curry" ><img class="marker-icon" src="/marker/curry.svg" />カレー</label>
      <input name="marker" type="radio" id="dinner" value="dinner" v-model="category" />
      <label for="dinner" ><img class="marker-icon" src="/marker/dinner.svg" />カフェ・食堂</label>
      <input name="marker" type="radio" id="tempura" value="tempura" v-model="category" />
      <label for="tempura" ><img class="marker-icon" src="/marker/tempura.svg" />天ぷら</label>
    </div>
    <div class="lunchmap--list container">
      <ul class="colored">
        <li v-for="(m, i) in ramens" @click="toggleInfoWindow(m, i)"> {{ m.content.title }} </li>
        <li v-for="(m, i) in sobas" @click="toggleInfoWindow(m, i)"> {{ m.content.title }} </li>
        <li v-for="(m, i) in udons" @click="toggleInfoWindow(m, i)"> {{ m.content.title }} </li>
        <li v-for="(m, i) in currys" @click="toggleInfoWindow(m, i)"> {{ m.content.title }} </li>
        <li v-for="(m, i) in dinners" @click="toggleInfoWindow(m, i)"> {{ m.content.title }} </li>
        <li v-for="(m, i) in tempuras" @click="toggleInfoWindow(m, i)"> {{ m.content.title }} </li>
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
  public category = 'all'
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

  getMarker(name: string) {
    return {
      url: require(`~/static/marker/${name}.svg`),
      size: {width: 40, height: 45, f: 'px', b: 'px'},
      scaledSize: {width: 40, height: 45, f: 'px', b: 'px'}
    }
  }

  get ramens() {
    if (this.category != 'ramen' && this.category != 'all') {
      return []
    }
    return markers.ramen
  }
  get sobas() {
    if (this.category != 'soba' && this.category != 'all') {
      return []
    }
    return markers.soba
  }
  get udons() {
    if (this.category != 'udon' && this.category != 'all') {
      return []
    }
    return markers.udon
  }
  get currys() {
    if (this.category != 'curry' && this.category != 'all') {
      return []
    }
    return markers.curry
  }
  get dinners() {
    if (this.category != 'dinner' && this.category != 'all') {
      return []
    }
    return markers.dinner
  }
  get tempuras() {
    if (this.category != 'tempura' && this.category != 'all') {
      return []
    }
    return markers.tempura
  }

  data() {
    return {
      markers: markers,
      category: 'all'
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
  padding-bottom: 0.2em;
  font-weight: bold;
}
.gmap--infotext a {
  font-size: 12px;
  font-weight: normal;
}
.eat-icon {
  vertical-align: bottom;
  margin: 0px 10px;
}
</style>
