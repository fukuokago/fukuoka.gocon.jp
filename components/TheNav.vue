<template>
  <nav class="nav is-clearfix" :class="{'sticky': position > 300}">
    <div class="nav--logo"><Logo color="white" /></div>
    <div class="nav--links">
      <ul class=" is-clearfix">
        <li v-for="(link, i) in links"><nuxt-link v-if="link.visible" :to=link.to>{{ link.label }}</nuxt-link> </li>
      </ul>
    </div>
    <div class="drawer" v-bind:class="{ active }" v-on:click="isActive()" >
      <span class="drawer__top-bun"></span>
      <span class="drawer__bottom-bun"></span>
    </div>
    <div class="drawer--links" v-if="active">
      <ul>
        <li v-for="(link, i) in links"><nuxt-link :to=link.to>{{ link.label }}</nuxt-link> </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Logo from '~/components/Logo.vue'

@Component({
  components: {
    Logo
  }
})
export default class TheNav extends Vue {
    public position = 0
    private active = false
    public links = [
      { visible: true, to: '/about', label: 'About' },
      { visible: true, to: '/fukuoka', label: 'Fukuoka' },
      { visible: true, to: '/cfp', label: 'Call for Papers' },
      { visible: true, to: '/schedule', label: 'Schedule' },
      { visible: true, to: '/registration', label: 'Registration' },
      { visible: false, to: '/talks', label: 'Talks' },
      { visible: false, to: '/scholarships', label: 'Scholarships' },
      { visible: true, to: '/sponsers', label: 'Sponsers' },
      { visible: true, to: '/team', label: 'Team' }
    ]

    public isActive() {
      this.active = !this.active
    }

    public mounted() {
      document.onscroll = () => {
        this.position = document.documentElement.scrollTop || document.body.scrollTop
      }
    }
}
</script>


<style scoped>
.nav {
  background: linear-gradient(270deg, #00ADD8, #CE3262);
  position: absolute;
  width: 100%;
  display: none;
  z-index: 9999;
}
.nav--logo {
  font-size: .4em;
  padding: 2.5em;
  width: auto;
  display: inline-block;
  float: left;
}

.nav--links ul {
  padding: 0;
  margin: 0;
}
.nav--links ul:before {
  content: '|';
  float: left;
  display: inline-block;
  padding: .4em 1em 0;
  color: #fff;
  opacity: 0.3;
}
.nav--links li {
  float: left;
  display: inline-block;
}
.nav--links a {
  border: none;
  font-family: 'Arvo', serif;
  color: #fff;
  font-size: .7em;
  padding: .8em .8em;
  display: block;
  opacity: 0.7;
}

.drawer--links {
  background-color: #000;
}
.drawer--links a {
  opacity: 0.6;
  border: none;
  font-family: 'Arvo', serif;
  color: #fff;
  font-size: .7em;
  display: block;
  cursor: pointer;
  padding: .8em 0;
}
.drawer--links a:hover {
  opacity: 1;
}
.drawer--links ul {
  padding: 0 .9em .25em;
  margin: 0;
  list-style-type: none;
}
.drawer--links li {
  border-bottom: 1px solid #444;
}
.drawer--links li:last-child {
  border: none;
}

.sticky {
  display: block;
  position: fixed;
  animation: fadeIn 2s ease 0s 1 normal;
  -webkit-animation: fadeIn 2s ease 0s 1 normal;
}
@keyframes fadeIn {
  0% {opacity: 0}
  100% {opacity: 1}
}
@-webkit-keyframes fadeIn {
  0% {opacity: 0}
  100% {opacity: 1}
}
.drawer {
  cursor: pointer;
  position: absolute;
  top: .3em;
  right: .3em;
  width: 40px;
  height: 40px;
  transition: all 0.25s;
  display: none;
}

.drawer__top-bun,
.drawer__bottom-bun {
  content: '';
  display: block;
  position: absolute;
  left: 12px;
  width: 17px;
  height: 1px;
  background: #fff;
  transform: rotate(0);
  transition: all 0.25s;
}

.drawer:hover [class*="-bun"] {
  background: #fff;
}

.drawer__top-bun {
  top: 19px;
  transform: translateY(-3px);
}

.drawer__bottom-bun {
  bottom: 19px;
  transform: translateY(3px);
}

.active {
  transform: rotate(90deg);
}

.active .drawer__top-bun {
  transform:
    rotate(45deg)
    translateY(0px);
}

.active .drawer__bottom-bun {
  transform:
    rotate(-45deg)
    translateY(0px);
}
@media (min-width: 801px) and (max-width: 1300px) {
  .drawer {
    display: block;
  }
  .nav--logo {
    float: none;
  }
  .nav--links {
    display: none;
  }
}
@media (min-width: 501px) and (max-width: 800px) {
  .drawer {
    display: block;
  }
  .nav--logo {
    float: none;
  }
  .nav--links {
    display: none;
  }
}
@media (max-width: 500px) {
  .drawer {
    display: block;
  }
  .nav--logo {
    float: none;
  }
  .nav--links {
    display: none;
  }
}
</style>
