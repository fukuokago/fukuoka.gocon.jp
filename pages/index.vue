<i18n>
en:
  sponsors: More details of Sponsors
ja:
  sponsors: スポンサーの詳細へ
</i18n>
<template>
  <section>
    <div class="container">
      <TheHome/>
    </div>
    <div class="container">
      <News/>
    </div>
    <div class="container">
      <Sponsors/>
      <p class="goto-sponsors"><nuxt-link :to="localePath('sponsors')" class="button large is-inverted is-outlined">🏢 {{ $t('sponsors') }}</nuxt-link></p>
    </div>
    <Fukuoka/>
    <div class="container">
      <CallForPapers/>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TheHome from '~/components/TheHome.vue'
import News from '~/components/News.vue'
import Sponsors from '~/components/Sponsors.vue'
import Fukuoka from '~/components/Fukuoka.vue'
import CallForPapers from '~/components/CallForPapers.vue'

@Component({
  components: {
    TheHome,
    News,
    Sponsors,
    Fukuoka,
    CallForPapers
  }
})
export default class PageIndex extends Vue {
  private head() {
    return {
      title: 'Go Conference‘19 Summer in Fukuoka 🍜',
      titleTemplate: '%s'
    }
  }
}
</script>

<style>
.goto-sponsors {
  text-align: center;
}
.sponsor {
  height: auto;
}
.sponsor-name,
.sponsor-desc {
  display: none;
}

@media (max-width: 500px) {
  .sponsor {
    width: 170px;
    height: 170px;
    margin: 0 0 1em;
    float: left;
  }
  .sponsor-logo {
    width: 170px;
    height: 170px;
  }
}
</style>
