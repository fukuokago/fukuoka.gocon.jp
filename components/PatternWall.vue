<template>
  <div id="pattern-wall" :class="computedPageName" v-bind:style="style">
    <div class="pattern-wall" v-parallax="0.2"></div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {Getter} from 'vuex-class'

interface IStyle {
  height: string
}

@Component
export default class PatternWall extends Vue {
  @Getter('pages/name')
  public pageName!: string
  public style: IStyle = { height: '100%' }

  get computedPageName() {
    this.style = this.genStyle()
    return this.pageName
  }

  public mounted() {
    this.style = this.genStyle()
  }

  public genStyle() {
    return {
      height: `${document.body.clientHeight}px`
    }
  }
}
</script>

<style scoped>
#pattern-wall {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.pattern-wall {
  background-image: url(~assets/img/gophers.png);
  background-repeat: repeat;
  background-position: center center;
  background-size: 30% auto;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: none;
  opacity: 0.2;
}

@media (min-width: 801px) and (max-width: 1300px) {
  .pattern-wall {
    background-size: 50% auto;
  }
}
@media (min-width: 501px) and (max-width: 800px) {
  .pattern-wall {
    background-size: 70% auto;
  }
}
@media (max-width: 500px) {
  .pattern-wall {
    background-size: 100% auto;
  }
}
</style>
