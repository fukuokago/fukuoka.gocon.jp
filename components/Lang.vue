<template>
  <p>Translations: <nuxt-link v-for="l in availableLocales" :key="l.code" :to="switchLocalePath(l.code)">{{l.name}}</nuxt-link></p>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
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
export default class Lang extends Vue {}
</script>

<style scoped>
p {
  font-size: .8em;
  color: #999;
}
p a {
  color: #000;
  border: none;
}
</style>
