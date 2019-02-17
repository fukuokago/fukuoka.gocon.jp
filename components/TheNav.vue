<template>
  <nav class="nav" :class="{'sticky': position > 600}">
    <div class="nav--logo"><Logo color="white" /></div>
    <div class="hamburger" v-bind:class="{ active }" v-on:click="isActive()" >
      <span class="hamburger__top-bun"></span>
      <span class="hamburger__bottom-bun"></span>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Logo from '~/components/Logo.vue'

@Component({
  components: {
    Logo
  },
  data: {
    isActive: false
  }
})
export default class TheNav extends Vue {
    public position = 0
    private active = false
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
  background-color: #000;
  position: absolute;
  width: 100%;
  display: none;
  z-index: 9999;
}
.nav--logo {
  font-size: .45em;
  padding: 2em;
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
.hamburger {
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  width: 48px;
  height: 48px;
  transition: all 0.25s;
}

.hamburger__top-bun,
.hamburger__bottom-bun {
  content: '';
  display: block;
  position: absolute;
  left: 15px;
  width: 18px;
  height: 1px;
  background: #fff;
  transform: rotate(0);
  transition: all 0.25s;
}

.hamburger:hover [class*="-bun"] {
  background: #666;
}

.hamburger__top-bun {
  top: 23px;
  transform: translateY(-3px);
}

.hamburger__bottom-bun {
  bottom: 23px;
  transform: translateY(3px);
}

.active {
  transform: rotate(90deg);
}

.active .hamburger__top-bun {
  transform:
    rotate(45deg)
    translateY(0px);
}

.active .hamburger__bottom-bun {
  transform:
    rotate(-45deg)
    translateY(0px);
}
</style>
