<template>
  <div>
    <TheHeader />
    <PatternWall />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
import PatternWall from '~/components/PatternWall.vue'

@Component({
  components: {
    TheHeader,
    TheFooter,
    PatternWall
  }
})
export default class LayoutDefault extends Vue {}
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
  padding: 3em 0 1em;
  text-align: center;
  color: #00ADD8;
}
h3 {
  font-size: 1.7em;
  font-family: 'Arvo', serif;
  padding: 1em 0 .5em;
  color: #000;
}
h4 {
  font-size: 1em;
  font-family: 'Arvo', serif;
  padding: 0 0 .5em;
  color: #000;
  font-weight: bold;
}
p {
  font-size: 1.5em;
  line-height: 1.5;
  text-align: left;
  font-weight: normal;
  padding-bottom: 1em;
  color: #666;
}
ul,
ol {
  font-size: 1.3em;
  padding-left: 1em;
  padding-bottom: 1em;
  margin-left: 1em;
}
ul {
  list-style-type: circle;
}
ul.colored {
  list-style-type: none;
}
ul.colored li:before {
  content: "\2022";
  color: #CE3262;
  font-weight: bold;
  vertical-align: top;
  margin-left: -.8em;
  margin-right: .5em;
}
ol.colored {
  list-style-type: none;
  counter-reset: li;
}
ol.colored li {
  counter-increment: li
}
ol.colored li:before {
  content: counter(li);
  color: #CE3262;
  font-weight: bold;
  vertical-align: top;
  margin-left: -.9em;
  margin-right: .6em;
  font-family: 'Arvo', serif;
}
ul.references {
  font-size: 1em;
  padding-bottom: 3em;
}
li {
  line-height: 1.8;
}
dl {
  font-size: 1.3em;
}
strong {
  font-weight: bold;
  color: #666;
}
em {
  font-style: normal;
  color: #000;
}
.draft {
  margin-bottom: 5em;
}
.draft p {
  text-align: center;
  color: #BBB;
  font-weight: bold;
}
.button {
  background-color: transparent;
  cursor: pointer;
  border-color: #000;
}
.button:hover {
  border-color: #00ADD8;
}
.button.large {
  padding: 1.7em 2em;
  margin-right: 1em;
}

.blog .title {
  text-align: left;
}
.blog .title a {
  border: none;
}
.blog .date {
  margin-top: -.5em;
  margin-bottom: .2em;
  font-weight: bold;
  color: #bbb;
  font-family: 'Arvo', serif;
}
.blog p {
  margin-bottom: .5em;
}
.blog-index-link {
  display: inline-block;
  font-family: 'Arvo', serif;
  color: #ccc;
  padding-right: .3em;
}
.blog-index-link a {
  font-weight: bold;
  border: none;
  color: #bbb;
  padding-right: .3em;
}
.blog-index-link a:hover {
  border: none;
  color: #000;
}

.external {
  font-size: .7em;
  opacity: 0.5;
  margin-left: .3em;
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
