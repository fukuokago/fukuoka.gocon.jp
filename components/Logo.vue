<i18n>
en:
  schedule: 'July 13th, 2019 @ Tenjin Fukuoka, Japan'
ja:
  schedule: '2019年7月13日 福岡市天神某所で開催予定'
</i18n>

<template>
  <span :class="[color, 'logo']">
      <nuxt-link :to="localePath('index')"><span class="go">Go</span> <span class="one">Conference <sup>‘19</sup></span></nuxt-link>
    <i class="subtitle" v-if="isSubtitle">Summer in Fukuoka</i>
    <i class="schedule" v-if="isSubtitle">{{$t('schedule') }}</i>
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
  font-family: 'Arvo', serif;
  letter-spacing: -.07em;
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
  line-height: 1;
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
.logo span.one {
  white-space: nowrap;
}
.subtitle {
  font-family: 'Arvo', serif;
  font-size: .4em;
  display: block;
  letter-spacing: .2em;
  margin: 0 0 0 .3em;
  font-style: normal;
}
.logo i.schedule {
  font-size: .17em;
  display: inline-block;
  margin: 0 0 0 .3em;
  font-style: normal;
  color: #f5f5f5;
  font-weight: bold;
  background-color: #CE3262;
  padding: .8em 2.5em .8em 1em;
  position: relative;
}
.logo i.schedule:after {
  content: '';
  border-top: 1.4em solid transparent;
  border-right: 1.4em solid #e5e5e5;
  border-bottom: 1.4em solid transparent;
  display: inline-block;
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
