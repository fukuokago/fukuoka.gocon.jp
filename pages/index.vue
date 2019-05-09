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
    <Location/>
    <div class="container">
      <Sponsors isSimple="true" />
      <p class="goto-sponsors"><nuxt-link :to="localePath('sponsors')" class="button large is-inverted is-outlined">🏢 {{ $t('sponsors') }}</nuxt-link></p>
    </div>
    <Fukuoka/>
    <Schedule/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TheHome from '~/components/TheHome.vue'
import Location from '~/components/Location.vue'
import News from '~/components/News.vue'
import Sponsors from '~/components/Sponsors.vue'
import Fukuoka from '~/components/Fukuoka.vue'
import Schedule from '~/components/Schedule.vue'

@Component({
  components: {
    TheHome,
    Location,
    News,
    Sponsors,
    Fukuoka,
    Schedule
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

<style scoped>
.goto-sponsors {
  text-align: center;
}
</style>
