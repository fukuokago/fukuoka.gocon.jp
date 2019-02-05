<template>
  <header class="header">
    <div class="container">
      <div>
        <h1 class="title">Go Conference 2019<span>Summer in Fukuoka</span></h1>
        <p class="gopher">\ʕ◔ϖ◔ʔ/</p>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Header extends Vue {
  name = 'Header'
}
</script>

<style scoped>
.header {
  border-top: 20px solid #00758D;
  padding: 3em 0 2em;
  font-family: 'Arvo', serif;
  text-align: center;
}
.title {
  font-size: 6em;
  letter-spacing: -.07em;
  color: #555759;
}
.title span {
  font-size: .6em;
  display: block;
  letter-spacing: 0;
  margin-top: -.3em;
  color: #666;
}
.gopher {
  font-size: 2em;
  font-weight: bold;
  padding: 1em;
  position: absolute;
  top: -1.7em;
  left: 2em;
  color: #555759;
}
</style>
