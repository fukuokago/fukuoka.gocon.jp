<template>
  <footer class="footer">
    <div>
      <p>&copy; <span class="go">Go</span> Conference <sup>‘19</sup></p>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Footer extends Vue {
  name = 'Footer'
}
</script>

<style scoped>
.footer {
  margin-top: 10em;
  padding: 1em;
  background-color: #00ADD8;
}
.footer p {
  font-size: 1.2em;
  font-family: 'Arvo', serif;
  padding: .1em;
  color: #fff;
  text-align: center;
}
.footer span.go {
  font-weight: bold;
  margin-right: -.25em;
}
.footer sup {
  font-size: .7em;
  letter-spacing: 0;
  margin-left: -.4em;
  position: relative;
  top: -.1em;
}
</style>
