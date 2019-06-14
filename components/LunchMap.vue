<i18n>
en:
  desc: Map for have lunch near the venue.
ja:
  desc: 会場近くでランチが食べれるオススメの飲食店マップ🍴です。
</i18n>

<template>
  <section class="lunchmap">
    <div class="lunchmap--header container">
      <h2>Lunch Map</h2>
      <p>{{ $t('desc') }}</p>
    </div>

    <div class="lunchmap--body">
      <GmapMap map-type-id="roadmap" :center="center" :zoom="zoom" :options="options" >
        <GmapInfoWindow :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen = false" >
          <div class="gmap--infowin">
            <p class="gmap--infoimg"> <img :src="infoContent.image" width="200" /> </p>
            <p class="gmap--infotext"> <a :href="infoContent.url" target="_blank">{{ infoContent.title }}</a> </p>
          </div>
        </GmapInfoWindow>
        <GmapMarker v-for="(m, i) in fgn" @click="toggleInfoWindow(m, i)" :key="i + '-0'" :position="m.position"
          :clickable="true" :draggable="false"></GmapMarker>
        <GmapMarker v-for="(m, i) in getMarkers('ramen')" @click="toggleInfoWindow(m, i)" :key="i + '-1'" :position="m.position"
          :clickable="true" :draggable="false" :icon="getMarkerIcon('ramen')" ></GmapMarker>
        <GmapMarker v-for="(m, i) in getMarkers('soba')" @click="toggleInfoWindow(m, i)" :key="i + '-2'" :position="m.position"
          :clickable="true" :draggable="false" :icon="getMarkerIcon('soba')" ></GmapMarker>
        <GmapMarker v-for="(m, i) in getMarkers('udon')" @click="toggleInfoWindow(m, i)" :key="i + '-3'" :position="m.position"
          :clickable="true" :draggable="false" :icon="getMarkerIcon('udon')" ></GmapMarker>
        <GmapMarker v-for="(m, i) in getMarkers('curry')" @click="toggleInfoWindow(m, i)" :key="i + '-4'" :position="m.position"
          :clickable="true" :draggable="false" :icon="getMarkerIcon('curry')" ></GmapMarker>
        <GmapMarker v-for="(m, i) in getMarkers('dinner')" @click="toggleInfoWindow(m, i)" :key="i + '-5'" :position="m.position"
          :clickable="true" :draggable="false" :icon="getMarkerIcon('dinner')" ></GmapMarker>
        <GmapMarker v-for="(m, i) in getMarkers('tempura')" @click="toggleInfoWindow(m, i)" :key="i + '-6'" :position="m.position"
          :clickable="true" :draggable="false" :icon="getMarkerIcon('tempura')" ></GmapMarker>
      </GmapMap>

      <div class="lunchmap--body--list">
        <ul class="lunchmap--body--list--ul">
          <li class="lunchmap--body--list--ul--li" v-if="isShowGenre('ramen')">
            <img class="marker" src="~/static/marker/ramen.svg" />
            <span class="genre clickable" v-on:click="category='ramen'">ラーメン</span>
            <ul class="lunchmap--body--list--ul--li--ul">
              <li class="lunchmap--body--list--ul--li--ul--li button" v-for="(m, i) in getMarkers('ramen')"
                @click="toggleInfoWindow(m, i)"><span class="clickable"> {{ m.content.title }} </span></li>
            </ul>
          </li>
          <li class="lunchmap--body--list--ul--li" v-if="isShowGenre('soba')">
            <img class="marker" src="~/static/marker/soba.svg" />
            <span class="genre clickable" v-on:click="category='soba'">蕎麦</span>
            <ul class="lunchmap--body--list--ul--li--ul">
              <li class="lunchmap--body--list--ul--li--ul--li button" v-for="(m, i) in getMarkers('soba')"
                @click="toggleInfoWindow(m, i)"><span class="clickable"> {{ m.content.title }} </span></li>
            </ul>
          </li>
          <li class="lunchmap--body--list--ul--li" v-if="isShowGenre('udon')">
            <img class="marker" src="~/static/marker/udon.svg" />
            <span class="genre clickable" v-on:click="category='udon'">うどん</span>
            <ul class="lunchmap--body--list--ul--li--ul">
              <li class="lunchmap--body--list--ul--li--ul--li button" v-for="(m, i) in getMarkers('udon')"
                @click="toggleInfoWindow(m, i)"><span class="clickable"> {{ m.content.title }} </span></li>
            </ul>
          </li>
          <li class="lunchmap--body--list--ul--li" v-if="isShowGenre('curry')">
            <img class="marker" src="~/static/marker/curry.svg" />
            <span class="genre clickable" v-on:click="category='curry'">カレー</span>
            <ul class="lunchmap--body--list--ul--li--ul">
              <li class="lunchmap--body--list--ul--li--ul--li button" v-for="(m, i) in getMarkers('curry')"
                @click="toggleInfoWindow(m, i)"><span class="clickable"> {{ m.content.title }} </span></li>
            </ul>
          </li>
          <li class="lunchmap--body--list--ul--li" v-if="isShowGenre('dinner')">
            <img class="marker" src="~/static/marker/dinner.svg" />
            <span class="genre clickable" v-on:click="category='dinner'">カフェ・食堂</span>
            <ul class="lunchmap--body--list--ul--li--ul">
              <li class="lunchmap--body--list--ul--li--ul--li button" v-for="(m, i) in getMarkers('dinner')"
                @click="toggleInfoWindow(m, i)"><span class="clickable"> {{ m.content.title }} </span></li>
            </ul>
          </li>
          <li class="lunchmap--body--list--ul--li" v-if="isShowGenre('tempura')">
            <img class="marker" src="~/static/marker/tempura.svg" />
            <span class="genre clickable" v-on:click="category='tempura'">天ぷら</span>
            <ul class="lunchmap--body--list--ul--li--ul">
              <li class="lunchmap--body--list--ul--li--ul--li button" v-for="(m, i) in getMarkers('tempura')"
                @click="toggleInfoWindow(m, i)"><span class="clickable"> {{ m.content.title }} </span></li>
            </ul>
          </li>
          <li class="lunchmap--body--list--ul--li"  v-if="category !== 'all'">
            <span class="genre clickable" v-on:click="category='all'">すべて表示</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
const styles = require('~/static/googlemap-styles/nolabel.json')
const markers = require('~/static/eat.json')
import { Component, Vue } from 'nuxt-property-decorator'
const fgn = { lat: 33.5888978, lng: 130.394886 }
const info = { image: '', title: 'Fukuoka Growth Next', url: 'https://growth-next.com/' }

@Component
export default class Location extends Vue {
  public center = fgn
  public zoom = 17
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

  isShowGenre(name: string) {
    return this.category === 'all' || this.category === name
  }

  getMarkerIcon(name: string) {
    return {
      url: require(`~/static/marker/${name}.svg`),
      size: {width: 40, height: 45, f: 'px', b: 'px'},
      scaledSize: {width: 40, height: 45, f: 'px', b: 'px'}
    }
  }

  getMarkers(genre: string) {
    if (this.category != genre && this.category != 'all') {
      return []
    }
    return markers[genre]
  }

  data() {
    return {
      markers: markers,
      category: 'all',
      fgn: [ { position: fgn, content: info } ]
    }
  }
}
</script>

<style scoped>
.vue-map-container {
  margin-left: 20%;
  width: 80%;
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
.lunchmap--body {
  width: 100%;
  height: 700px;
  position: relative;
  overflow: hidden;
}
.lunchmap--body--nav {
  display: hidden;
}
.lunchmap--body--list {
  position: absolute;
  top: 0;
  left: 0;
  width: 20%;
  height: 700px;
  overflow: auto;
  overflow-x: hidden;
  background-color: #fff;
  border-right: 1px solid #ccc;
}
.lunchmap--body--list--ul {
  margin: 0;
  padding: 2em 2em 0;
  font-size: 12px;
  font-weight: bold;
}
.lunchmap--body--list--ul--li {
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-size: 1.7em;
}
.lunchmap--body--list--ul--li--ul {
  margin: 0;
  padding: 1em 0 2em;
  font-size: 12px;
  font-weight: normal;
}
.lunchmap--body--list--ul--li--ul--li {
  margin: 0 .5em .5em 0;
  font-size: 12px;
}
.clickable {
  cursor: pointer;
}
.genre.clickable:hover {
  color: #CE3262;
}
.marker {
  width: 30px;
  vertical-align: middle;
  margin-right: .5em;
}
</style>
