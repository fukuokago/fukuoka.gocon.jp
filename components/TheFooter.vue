<template>
  <footer class="footer">
    <p><span class="copy">&copy; 2019</span> <Logo color="white" /></p>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Logo from '~/components/Logo.vue'

@Component({
  components: {
    Logo
  }
})
export default class Footer extends Vue {}
</script>

<style scoped>
.footer {
  margin-top: 10em;
  padding: 1em 0 .9em;
  background-color: #000;
}
.footer p {
  font-size: .35em;
  text-align: center;
}
.copy {
  color: #fff;
  font-size: 2em;
  padding-right: .5em;
}
</style>
