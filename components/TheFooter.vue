<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered is-info">
        <p>&copy; Go Conference 2019</p>
      </div>
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
  font-size: .9em;
  font-family: 'Arvo', serif;
  margin-top: 10em;
  padding: 0.2em;
  background-color: #00ADD8;
  color: #fff;
}
</style>
