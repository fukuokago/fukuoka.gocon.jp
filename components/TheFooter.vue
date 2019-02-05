<template>
  <footer class="footer">
    <div>
      <p>&copy; Go Conference 2019</p>
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
  background-color: #00758D;
}
.footer p {
  font-size: .9em;
  font-family: 'Arvo', serif;
  padding: .1em;
  color: #fff;
  text-align: center;
}
</style>
