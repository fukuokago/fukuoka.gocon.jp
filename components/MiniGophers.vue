<template>
  <div>
    <picture v-for="(gopher, i) in images" v-bind:class="['mini-gopher', gopher.name]" v-bind:style="gopher.style">
      <source type="image/webp" :srcset="gopher.webp">
      <img :src="gopher.raw" v-parallax="0.2" >
    </picture>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

interface IStyle {
  top: string,
  left: string
}

interface IPosition {
  x: number,
  y: number
}

interface IImage {
  name: string,
  style: IStyle,
  position: IPosition,
  raw: string,
  webp: string
}

@Component
export default class MiniGophers extends Vue {
  public baseSize: number = 200
  public images: IImage[] = []

  public reset() {
    this.images = []
  }

  public isOverlay(x: number, y: number): boolean {
    for (let i of this.images) {
      const tx = i.position.x
      const ty = i.position.y
      const txe = i.position.x + this.baseSize
      const tye = i.position.y + this.baseSize

      const xe = x + this.baseSize
      const ye = y + this.baseSize

      const isOverX = (tx <= x && x <= txe) || (tx <= xe && xe <= txe)
      const isOverY = (ty <= y && y <= tye) || (ty <= ye && ye <= tye)

      if (isOverX && isOverY) {
        return true
      }
    }

    return false
  }

  public randomN(): string {
    const list = [
      'airplane',
      'balloons',
      'sleeping',
      'backpack',
      'reading',
      'sunglass'
    ]
    const n = Math.floor(Math.random() * list.length)

    return list[n]
  }

  public random(max: number): number {
    return Math.floor(Math.random() * max)
  }

  public docWidth(): number {
    return document.body.clientWidth || 0
  }

  public docHeight(): number  {
    return document.body.clientHeight || 0
  }

  public position() {
    let x = this.random(this.docWidth())
    let y = this.random(this.docHeight())

    const limit = 1000
    let count = 0

    while (count < limit) {
      if (!this.isOverlay(x, y)) {
        break
      }
      x = this.random(this.docWidth())
      y = this.random(this.docHeight())
      count++
    }

    console.debug(`${x}, ${y}: ${count}`)
    return { x, y }
  }

  public gophers(): IImage[] {
    this.reset()

    const w = this.docWidth() - this.baseSize
    const h = this.docHeight() - this.baseSize
    const area = w * h
    const baseArea = this.baseSize * this.baseSize
    const num = Math.floor(area / baseArea * 0.3)

    while (this.images.length < num) {
      const n = this.randomN()
      const position = this.position()

      this.images.push({
        name: n,
        style: { top: `${position.y}px`, left: `${position.x}px` },
        position: { x: position.x, y: position.y },
        raw: require(`~/assets/gopher-${n}.png`),
        webp: require(`~/static/img/gopher-${n}.webp`)
      })
    }

    return this.images
  }

  public mounted() {
    return {
      images: this.gophers()
    }
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
