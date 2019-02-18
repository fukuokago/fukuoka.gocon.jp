<template>
  <div>
    <HomeHeader />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TheHeader from '~/components/TheHeader.vue'
import HomeHeader from '~/components/HomeHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

@Component({
  components: {
    TheHeader,
    HomeHeader,
    TheFooter
  }
})
export default class DefaultLayout extends Vue {}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #e5e5e5;
}
@font-face {
  font-family: 'Arvo';
  font-style: normal;
  font-weight: 400;
  src: local('Arvo'), url(~static/fonts/arvo-normal.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Arvo';
  font-style: normal;
  font-weight: 700;
  src: local('Arvo Bold'), local('Arvo-Bold'), url(~static/fonts/arvo-bold.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.container {
  margin: 1em auto;
  padding: 0 1em;
}
a {
  color: #CE3262;
  border-bottom: 1px solid #CE3262;
}
a:hover {
  color: #000;
  border-bottom: 1px solid #000;
  cursor: pointer;
}
h2 {
  font-size: 2em;
  font-family: 'Arvo', serif;
  font-weight: bold;
  padding: 2em 0 2em;
  text-align: center;
  color: #00ADD8;
}
h3 {
  font-size: 1.7em;
  font-family: 'Arvo', serif;
  padding-bottom: .5em;
  padding-top: 1em;
  color: #000;
}
p {
  font-size: 1.5em;
  line-height: 1.5;
  text-align: left;
  font-weight: normal;
  padding-bottom: 1em;
  color: #666;
}
ul {
  font-size: 1.3em;
  list-style-type: circle;
  padding-left: 1em;
  padding-bottom: 1em;
}
ol {
  font-size: 1.3em;
  padding-left: 1em;
}
li {
  line-height: 1.8;
}
dl {
  font-size: 1.3em;
}
.draft {
  margin-bottom: 5em;
}
.draft p {
  text-align: center;
  color: #BBB;
  font-weight: bold;
}

@media (min-width: 801px) and (max-width: 1300px) {
  h2 {
    font-size: 1.7em;
  }
  h3 {
    font-size: 1.5em;
  }
  p, ul, ol, dl {
    font-size: 1.2em;
  }
}
@media (min-width: 501px) and (max-width: 800px) {
  h2 {
    font-size: 1.6em;
  }
  h3 {
    font-size: 1.4em;
  }
  p, ul, ol, dl {
    font-size: 1.1em;
  }
}
@media (max-width: 500px) {
  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.3em;
  }
  p, ul, ol, dl {
    font-size: 1em;
  }
}
</style>
