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
.logo a, .logo i {
  border: none;
}
.logo a:hover {
  border: none;
  opacity: 0.7;
}
.black a, .black a:hover, .black i {
  color: #000;
}
.white a, .white a:hover, .white i {
  color: #fff;
}
.blue a, .blue a:hover, .blue i {
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
.logo i {
  font-size: .4em;
  display: block;
  letter-spacing: .2em;
  margin-left: .3em;
  font-style: normal;
}
</style>
