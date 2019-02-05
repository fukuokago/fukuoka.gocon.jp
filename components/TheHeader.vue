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
export default class Header extends Vue {}
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
  margin-left: 50%;
  top: -1.7em;
  left: -13em;
  color: #555759;
}
@media (min-width: 401px) and (max-width: 500px) {
  .title {
    font-size: 2.5em;
  }
  .title span {
    margin-top: .5em;
  }
  .gopher {
    font-size: 1em;
    top: -2em;
    left: -12em;
  }
}
@media (max-width: 400px) {
  .title {
    font-size: 1.8em;
  }
  .title span {
    margin-top: .5em;
  }
  .gopher {
    font-size: 1em;
    top: -2em;
    left: -9em;
  }
}
</style>
