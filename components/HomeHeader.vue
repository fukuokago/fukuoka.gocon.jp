<template>
  <header class="header">
    <div class="container">
      <div class="gopher">
        <Gopher/>
      </div>
      <div class="title">
          <h1 class="title-text"><span class="go">Go</span> Conference <sup>‘19</sup><span class="location">Summer in Fukuoka</span></h1>
        <p class="gopher-text">\ʕ◔ϖ◔ʔ/</p>
      </div>
      <div class="about">
        <About/>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Gopher from '~/components/Gopher.vue'
import About from '~/components/About.vue'

@Component({
  components: {
    Gopher,
    About
  }
})
export default class HomeHeader extends Vue {}
</script>

<style scoped>
.header {
  border-top: 20px solid #00ADD8;
  padding: 3em 0 2em;
  font-family: 'Arvo', serif;
  display: flow-root;
}
.gopher {
  float: left;
  width: 40%;
  margin-right: 3%;
}
.title {
  margin: 3em 0;
  float: left;
  width: 57%;
  color: #00ADD8;
}
.about {
  float: left;
  width: 57%;
}
.title-text {
  font-size: 2.8em;
  letter-spacing: -.07em;
  line-height: 1;
}
.title-text span.go {
  font-weight: bold;
  margin-right: -.12em;
}
.title-text sup {
  font-size: .4em;
  letter-spacing: 0;
  margin-left: -.6em;
  position: relative;
  top: -.3em;
}
.title-text span.location {
  font-size: .4em;
  display: block;
  letter-spacing: .2em;
  margin-left: .3em;
}
.gopher-text {
  font-size: 2em;
  font-weight: bold;
  padding: 1em;
  position: absolute;
  margin-left: 50%;
  top: -1.7em;
  left: -13em;
  color: #555759;
  display: none;
}
@media (min-width: 801px) and (max-width: 1300px) {
  .title-text {
    font-size: 2em;
  }
}
@media (min-width: 501px) and (max-width: 800px) {
  .title {
    margin: 4.7em 0 7em;
  }
  .title-text {
    font-size: 1.4em;
  }
  .about {
    float: none;
    clear: both;
    width: 100%;
  }
}
@media (max-width: 500px) {
  .header {
    padding: 1em 0 0;
  }
  .gopher {
    float: none;
    width: 50%;
    margin: 0 auto;
  }
  .title {
    width: auto;
    float: none;
    margin: .5em auto 2em;
  }
  .title-text {
    font-size: .9em;
    text-align: center;
  }
  .title-text span.location {
    margin-top: .5em;
  }
  .gopher-text {
    font-size: 1em;
    top: -2em;
    left: -9em;
  }
  .about {
    float: none;
    clear: both;
    width: 100%;
  }
}
</style>
