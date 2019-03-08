<template>
  <div :class="computedPageName">
    <picture v-for="(gopher, i) in gophers" v-bind:class="['mini-gopher', gopher.name]" v-bind:style="gopher.style">
      <source type="image/webp" :srcset="gopher.webp">
      <img :src="gopher.img" v-parallax="0.2" >
    </picture>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {Getter} from 'vuex-class'
import PatternWall from 'pattern-wall'

interface IStyle {
  top: string,
  left: string
}

interface IImage {
  name: string,
  style: IStyle,
  img: string,
  webp: string
}

@Component
export default class MiniGophers extends Vue {
  @Getter('pages/name')
  public pageName!: string
  public gophers: IImage[] = []

  get computedPageName() {
    this.gophers = this.patternWall()
    return this.pageName
  }

  public patternWall() {
    const gophers = []

    const names = [
      'airplane',
      'balloons',
      'sleeping',
      'backpack',
      'reading',
      'sunglass'
    ]

    const options = {
      width: document.body.clientWidth,
      height: document.body.clientHeight,
      size: 200,
      ratio: 0.3
    }

    const p = new PatternWall(names, options)
    const pattern = p.generate()
    for (const i of pattern) {
      gophers.push({
        name: i.name,
        style: { top: `${i.position.y}px`, left: `${i.position.x}px` },
        img: require(`~/assets/gopher-${i.name}.png`),
        webp: require(`~/static/img/gopher-${i.name}.webp`)
      })
    }

    return gophers
  }

  public mounted() {
    this.gophers = this.patternWall()
  }
}
</script>

<style scoped>
.mini-gopher {
  position: absolute;
  width: 200px;
  height: 200px;
  z-index: -1;
  opacity: 0.2;
}

.mini-gopher img {
  width: 100%;
  height: auto;
}
</style>
