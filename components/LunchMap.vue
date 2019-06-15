<i18n>
en:
  desc: |-
    This Map 🗺 for have delicious lunches near the venue.
    From the navigation on the left, narrow down the genre of food and select a restaurant.
    There is no guarantee that you will be able to eat at the target store, so please make your own judgment. 💁
ja:
  desc: |-
    会場近くでオススメのランチが食べれる飲食店をまとめたランチマップ🗺 です。
    左のナビゲーションから、食事のジャンルを絞り込んでお店を選択してください。
    必ず目的のお店で食べれるかは保証できないので各自ご判断ください。💁
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
            <div class="gmap--infoimg" :style="{ backgroundImage: 'url(' + infoContent.image + ')' }"></div>
            <p class="gmap--infotext"> <a :href="infoContent.url" target="_blank">{{ infoContent.title }} </a> <i class="gmap--link fas fa-external-link-alt"></i></p>
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

    <div class="lunchmap--footer container">
      <p class="lunch-time">
        <span class="lunch-time--title">Lunch Time:</span> 11:50 AM - 1:20 PM <span class="lunch-time--duration">(1 hours, 30 min)</span>
      </p>
    </div>

    <div class="lunchmap--ps container">
      <h2>Fukuoka Gourmet Collected</h2>
      <p>以下、福岡グルメのまとめ記事です。</p>
      <ul class="colored">
        <li><a href="https://icotto.jp/presses/3360">【天神ランチ決定版】迷ったらココへ！おすすめ人気店14選</a> by icotto.jp</li>
        <li><a href="https://tabelog.com/matome/3289/">味・鮮度・コスパも自慢！福岡のおすすめランチ20選</a> by tabelog.com</li>
        <li><a href="https://kinarino.jp/cat8-%E6%97%85%E8%A1%8C%E3%83%BB%E3%81%8A%E5%87%BA%E3%81%8B%E3%81%91/17580-%E8%A6%B3%E5%85%89%E3%81%AB%E8%A1%8C%E3%81%A3%E3%81%9F%E3%82%89%E3%81%9C%E3%81%B2%E3%80%82%E7%A6%8F%E5%B2%A1%E3%81%A7%E9%A3%9F%E3%81%B9%E3%82%8B%E7%BE%8E%E5%91%B3%E3%81%97%E3%81%84%E3%81%8A%E3%81%99%E3%81%99%E3%82%81%E3%83%A9%E3%83%B3%E3%83%8114%E9%81%B8%E3%80%82">観光に行ったらぜひ。福岡で食べる美味しいおすすめランチ14選。</a> by kinarino.jp</li>
        <li><a href="https://aumo.jp/articles/18076">【厳選】福岡のご当地グルメ10選！食の都で名物料理を食べつくそう</a> by aumo.jp</li>
        <li><a href="https://www.jalan.net/news/article/296665/">ご当地グルメ天国！福岡でグルメライターがおすすめしたい名物12選！</a> by jalan.net</li>
        <li><a href="http://r.gnavi.co.jp/g-interview/entry/gohan/2589">博多～天神周辺のおすすめグルメ！観光しながら名物からB級まで福岡グルメを食べ歩く30選</a> by gnavi.co.jp</li>
        <li><a href="https://tech.smarthr.jp/entry/2019/03/21/121514">【保存版】自腹でつくる博多グルメマップ #RubyKaigi 2019</a> by smarthr.jp</li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
const styles = require('~/static/googlemap-styles/nolabel.json')
const markers = require('~/static/eat/data.json')
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
.gmap--infoimg {
  width: 250px;
  height: 250px;
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
}
.gmap--infowin .gmap--link {
  margin-left: .5em;
  font-size: 12px;
}
.gmap--infotext {
  padding: .5em 0;
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
.lunchmap--footer {
  margin: 2em auto 0;
  clear: both;
}
.lunch-time {
  text-align: center;
  font-family: 'Arvo', serif;
  font-weight: bold;
}
.lunch-time--title {
  color: #CE3262;
  font-size: .7em;
  font-weight: normal;
}
.lunch-time--duration {
  font-size: .6em;
  font-weight: normal;
}
</style>
