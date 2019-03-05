<template>
  <div>
    <picture class="mini-gopher airplane" v-bind:style="airplane">
      <source type="image/webp" srcset="~static/img/gopher-airplane.webp">
      <img src="~assets/gopher-airplane.png" v-parallax="0.2" >
    </picture>

    <picture class="mini-gopher balloons" v-bind:style="balloons">
      <source type="image/webp" srcset="~static/img/gopher-balloons.webp">
      <img src="~assets/gopher-balloons.png" v-parallax="0.2" >
    </picture>

    <picture class="mini-gopher sleeping" v-bind:style="sleeping">
      <source type="image/webp" srcset="~static/img/gopher-sleeping.webp">
      <img src="~assets/gopher-sleeping.png" v-parallax="0.2" >
    </picture>

    <picture class="mini-gopher backpack" v-bind:style="backpack">
      <source type="image/webp" srcset="~static/img/gopher-backpack.webp">
      <img src="~assets/gopher-backpack.png" v-parallax="0.2" >
    </picture>

    <picture class="mini-gopher reading" v-bind:style="reading">
      <source type="image/webp" srcset="~static/img/gopher-reading.webp">
      <img src="~assets/gopher-reading.png" v-parallax="0.2" >
    </picture>

    <picture class="mini-gopher sunglass" v-bind:style="sunglass">
      <source type="image/webp" srcset="~static/img/gopher-sunglass.webp">
      <img src="~assets/gopher-sunglass.png" v-parallax="0.2" >
    </picture>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class MiniGophers extends Vue {
  public randomX(): string {
    const w = window.outerWidth
    let x = Math.floor(Math.random() * w)
    if (x > 300) {
      x = x - 300
    }
    return `${x}px`
  }

  public randomY(): string {
    const h = window.outerHeight
    let y = Math.floor(Math.random() * h)
    if (y > 300) {
      y = y - 300
    }
    return `${y}px`
  }

  public data() {
    console.debug(this.randomX())
    return {
      airplane: { top: this.randomX(), left: this.randomY() },
      balloons: { top: this.randomX(), left: this.randomY() },
      sleeping: { top: this.randomX(), left: this.randomY() },
      backpack: { top: this.randomX(), left: this.randomY() },
      reading:  { top: this.randomX(), left: this.randomY() },
      sunglass: { top: this.randomX(), left: this.randomY() }
    }
  }
}
</script>

<style scoped>
.mini-gopher {
  position: absolute;
  width: 300px;
  height: auto;
  z-index: 9999;
  opacity: 0.1;
}

.mini-gopher img {
  width: 100%;
  height: auto;
}
</style>
