<i18n>
en:
  date: July 13th
  place: "@The Fukuoka Growth Next, in Japan"
  registration: Join us on July 13
  scholarships: Scholarships
  lunchmap: Lunch Map
ja:
  date: July 13th
  place: "@The Fukuoka Growth Next, in Japan"
  registration: イベントに参加登録する
  scholarships: スカラーシップ
  lunchmap: ランチマップ
</i18n>

<template>
  <header class="header is-clearfix">
    <div v-if="gopher" :class="{'logogo': position > 10}">
      <div class="logo transparent">
        <h1><Logo color="white" /></h1>
      </div>
      <div class="gopher">
        <span>\ʕ⊙౪⚆ʔ/ < {{greeting()}}</span>
      </div>
    </div>
    <div v-else>
      <div class="logo">
        <h1><Logo color="white" /></h1>
      </div>
    </div>

    <div class="nav">
      <TheNav/>
    </div>

    <div class="attention">
      <nuxt-link class="button is-small is-inverted is-outlined" :to="localePath('registration')">{{ $t('registration') }}</nuxt-link>
      <nuxt-link class="button is-small is-inverted is-outlined" :to="localePath('lunchmap')">{{ $t('lunchmap') }}</nuxt-link>
    </div>

    <p class="day"><span class="date">{{$t('date')}}</span> <span class="place">{{$t('place')}}</span></p>

    <div class="lang">
      <Lang stylePClass="lang__undernav"/>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Getter } from 'vuex-class'
import Logo from '~/components/Logo.vue'
import TheNav from '~/components/TheNav.vue'
import Lang from '~/components/Lang.vue'

@Component({
  components: {
    Logo,
    TheNav,
    Lang
  }
})
export default class TheHeader extends Vue {
    @Getter('gopher/visible')
    public gopher!: boolean

    public position = 0

    public greeting() {
      const words = [
        'Hi!',
        'Yo',
        '𝝣GO',
        '🍖',
        '❤️',
        '🇯🇵',
        '🍜',
        '🍺',
        '🌴',
        '🚀',
        '🍣'
      ]
      return words[Math.floor(Math.random() * words.length)]
    }

    public mounted() {
      document.onscroll = () => {
        this.position = document.documentElement.scrollTop || document.body.scrollTop
      }
    }
}
</script>


<style scoped>
.header {
  background: linear-gradient(270deg, #00ADD8, #CE3262);
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 9999;
  display: block;
  position: fixed;
}

.logo {
  font-size: 1em;
  padding: .5em;
  width: auto;
  float: left;
  display: inline-block;
}

.transparent {
  opacity: 0;
}

.gopher {
  color: #fff;
  font-size: 1em;
  padding: .8em;
  width: auto;
  position: absolute;
  top: 1px;
  left: 0;
  font-family: 'Courier New', Courier, Monaco, monospace;
}

.logogo .transparent {
  opacity: 1;
  animation: fadeIn 2s ease 0s 1 normal;
  -webkit-animation: fadeIn 2s ease 0s 1 normal;
}

.logogo .gopher {
  display: none;
}

@keyframes fadeIn {
  0% {opacity: 0}
  100% {opacity: 1}
}
@-webkit-keyframes fadeIn {
  0% {opacity: 0}
  100% {opacity: 1}
}

.attention {
  position: absolute;
  top: .7em;
  right: 1em;
}
.attention .button {
  color: #fff;
  border-color: #fff;
}
.attention .button:hover {
  color: #000;
  border-color: #000;
}

.day {
  position: absolute;
  bottom: -2.9em;
  left: 1em;
  font-size: .8em;
  font-family: 'Arvo', serif;
  color: #CE3262;
}
.date {
  font-weight: bold;
}

.lang {
  position: absolute;
  bottom: -4.3em;
  right: 2em;
  font-size: .534em;
  font-family: 'Arvo', serif;
  text-align: right;
}

@media (max-width: 1300px) {
  .attention {
    display: none;
  }
  .logo {
    float: none;
  }
  .day {
    display: none;
  }
  .lang {
    display: none;
  }
}
</style>
