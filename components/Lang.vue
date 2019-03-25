<template>
  <p :class="[stylePClass]">Translations: <nuxt-link :class="[styleAClass]" v-for="l in availableLocales" :key="l.code" :to="switchLocalePath(l.code)">{{l.name}}</nuxt-link></p>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import VueI18n from 'vue-i18n'

interface LocaleObject {
  code: VueI18n.Locale
  iso?: string
  file?: string
  [key: string]: any
}

@Component({
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((l: string | LocaleObject, _: number, _a: (string | LocaleObject)[]) => {
        return typeof l !== 'string' && l.code !== this.$i18n.locale
      })
    }
  }
})
export default class Lang extends Vue {
  @Prop() public stylePClass!: string
  @Prop() public styleAClass!: string
}
</script>

<style scoped>
.lang__undernav {
  color: #999;
}
.lang__undernav a {
  color: #000;
  border: none;
}
.lang__drawer a {
  color: #fff;
  vertical-align: middle;
  margin-left: .5em;
}
.lang__drawer .button {
  border-color: #fff;
  font-size: .9em;
}
.lang__drawer .button:hover {
  color: #00ADD8;
  border-color: #00ADD8;
}
</style>
