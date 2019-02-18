<template>
  <span :class="[color, 'logo']">
    <nuxt-link to="/"><span class="go">Go</span> Conference <sup>‘19</sup></nuxt-link>
    <i class="location" v-if="isSubtitle">Summer in Fukuoka</i>
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class TheLogo extends Vue {
  public subtitle = false
  @Prop() public isSubtitle!: boolean
  @Prop() public color!: string
}
</script>

<style scoped>
.logo a {
  border: none;
}
.logo a:hover {
  border: none;
}
.black a {
  color: #000;
}
.black a:hover {
  color: #000;
}
.white a {
  color: #fff;
}
.white a:hover {
  color: #fff;
}
.blue a {
  color: #00ADD8;
}
.blue a:hover {
  color: #00ADD8;
}
.logo {
  font-size: 2.8em;
  letter-spacing: -.07em;
  line-height: 1;
  font-family: 'Arvo', serif;
}
.logo span.go {
  font-weight: bold;
  margin-right: -.12em;
}
.logo sup {
  font-size: .4em;
  letter-spacing: 0;
  margin-left: -.6em;
  position: relative;
  top: -.3em;
}
.logo i.location {
  font-size: .4em;
  display: block;
  letter-spacing: .2em;
  margin-left: .3em;
  font-style: normal;
}
</style>
