<template>
  <nav class="nav">
    <div class="horizontal">
      <ul class=" is-clearfix">
        <li v-for="(link, i) in links"><nuxt-link v-if="link.visible" :to="localePath(link.to)">{{ link.label }}</nuxt-link> </li>
      </ul>
    </div>

    <div class="drawer" v-bind:class="{ draweropen: drawer }" v-on:click="toggleDrawer()" >
      <span class="drawer__top-bun"></span>
      <span class="drawer__bottom-bun"></span>
    </div>

    <div class="vertical" v-if="drawer">
      <ul>
        <li v-for="(link, i) in links" v-on:click="toggleDrawer()" v-if="link.visible"><nuxt-link v-if="link.visible" :to="localePath(link.to)">{{ link.label }}</nuxt-link> </li>
      </ul>

      <div class="lang" v-on:click="toggleDrawer()">
        <Lang stylePClass="lang__drawer" styleAClass="button is-inverted is-outlined"/>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Lang from '~/components/Lang.vue'

@Component({
  components: {
    Lang
  }
})
export default class TheNav extends Vue {
    private drawer = false

    public links = [
      { visible: false, to: 'about', label: 'About' },
      { visible: false, to: 'fukuoka', label: 'Fukuoka' },
      { visible: true, to: 'cfp', label: 'Call for Papers' },
      { visible: true, to: 'schedule', label: 'Schedule' },
      { visible: true, to: 'registration', label: 'Registration' },
      { visible: false, to: 'talks', label: 'Talks' },
      { visible: true, to: 'scholarships', label: 'Scholarships' },
      { visible: true, to: 'sponsors', label: 'Sponsors' },
      { visible: true, to: 'team', label: 'Team' },
      { visible: true, to: 'brand', label: 'Brand' },
      { visible: true, to: 'code-of-conduct', label: 'Code of Conduct' }
    ]

    public toggleDrawer() {
      this.drawer = !this.drawer
    }
}
</script>

<style scoped>
.horizontal ul {
  padding: 0;
  margin: 0;
}
.horizontal ul:before {
  content: '|';
  float: left;
  display: inline-block;
  padding: .4em 1em 0;
  color: #fff;
  opacity: 0.3;
}
.horizontal li {
  float: left;
  display: inline-block;
}
.horizontal a {
  border: none;
  font-family: 'Arvo', serif;
  color: #fff;
  font-size: .7em;
  padding: .8em .8em;
  display: block;
  opacity: 0.7;
}
.horizontal a:hover {
  opacity: 1;
}

.vertical {
  background-color: #000;
}
.vertical a {
  opacity: 0.6;
  border: none;
  font-family: 'Arvo', serif;
  color: #fff;
  font-size: .7em;
  display: block;
  cursor: pointer;
  padding: 1em 0;
}
.vertical a:hover {
  opacity: 1;
}
.vertical ul {
  padding: 0 .9em .25em;
  margin: 0;
  list-style-type: none;
}
.vertical li {
  border-bottom: 1px solid #444;
}
.vertical .lang {
  font-size: .8em;
  padding: 1em .9em 1em;
}
.vertical .lang p {
  text-align: center;
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
.draweropen {
  transform: rotate(90deg);
}
.draweropen .drawer__top-bun {
  transform:
    rotate(45deg)
    translateY(0px);
}
.draweropen .drawer__bottom-bun {
  transform:
    rotate(-45deg)
    translateY(0px);
}

@media (max-width: 1300px) {
  .drawer {
    display: block;
  }
  .logo {
    float: none;
  }
  .horizontal {
    display: none;
  }
}
</style>
