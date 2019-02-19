<template>
  <header class="header is-clearfix">
    <div v-if="gopher" :class="{'logogo': position > 10}">
      <div class="logo transparent">
        <h1><Logo color="white" /></h1>
      </div>
      <div class="gopher">
        <span>\ʕ◔ϖ◔ʔ/ < {{greeting()}}</span>
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
      <p><nuxt-link class="button is-small is-primary is-inverted is-outlined" to="/sponsors">Become a Sponser</nuxt-link></p>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import Logo from '~/components/Logo.vue'
import TheNav from '~/components/TheNav.vue'

@Component({
  components: {
    Logo,
    TheNav
  }
})
export default class TheHeader extends Vue {
    @Getter('gopher/visible')
    public gopher!: boolean

    public position = 0

    public greeting() {
      const words = [
        'hi!',
        'yo-',
        '𝝣GO',
        '❤️',
        '🇯',
        '🍜',
        '🍺',
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

@media (max-width: 1300px) {
  .attention {
    display: none;
  }
  .logo {
    float: none;
  }
}
</style>
