<template>
  <footer>
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
footer {
  padding: 0.5em;
}
</style>
