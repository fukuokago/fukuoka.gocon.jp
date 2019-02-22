<template>
  <section class="home is-clearfix">
    <div class="container">
      <div class="gopher">
        <Gopher/>
      </div>
      <div class="title">
        <p class="title-text"><Logo color="blue" isSubtitle="true" /></p>
      </div>
      <div class="about">
        <About/>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Logo from '~/components/Logo.vue'
import Gopher from '~/components/Gopher.vue'
import About from '~/components/About.vue'

@Component({
  components: {
    Logo,
    Gopher,
    About
  }
})
export default class TheHome extends Vue {}
</script>

<style scoped>
.home {
  padding: 3.5em 0 2em;
}
.gopher {
  float: left;
  width: 40%;
  margin-right: 3%;
}
.title {
  margin: 3em 0 0;
  float: left;
  width: 57%;
}
.about {
  float: left;
  width: 57%;
}
.title-text {
  font-size: 1em;
}
@media (min-width: 801px) and (max-width: 1300px) {
  .title-text {
    font-size: .8em;
  }
}
@media (min-width: 501px) and (max-width: 800px) {
  .title {
    margin: 3em 0 0;
  }
  .title-text {
    font-size: .5em;
  }
  .about {
    float: none;
    clear: both;
    width: 100%;
  }
}
@media (max-width: 500px) {
  .home {
    padding: 3em 0 0;
  }
  .gopher {
    float: none;
    width: 50%;
    margin: 0 auto;
  }
  .title {
    width: auto;
    float: none;
    margin: .5em auto 0;
  }
  .title-text {
    font-size: .45em;
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
