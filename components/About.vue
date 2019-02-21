<template>
  <div>
    <p v-html="$t('about.messages.0')"></p>
    <p v-html="$t('about.messages.1')"></p>
    <div class="attention">
        <p class="cfp"><nuxt-link class="button" to="/cfp" disabled><span>📝</span>{{ $t('callforpapers') }}</nuxt-link></p>
      <p class="registration"><nuxt-link class="button" to="/registration" disabled><span>🎪</span>{{ $t('registration') }}</nuxt-link></p>
    </div>
  </div>
</template>

<style scoped>
.attention {
  padding-top: 3em;
  font-family: 'Arvo', serif;
}
.attention p {
  display: inline-block;
}
.attention .cfp {
  padding-right: 1em;
}
p .button {
  background-color: #f5f5f5;
  padding: 2em 1.5em;
  cursor: pointer;
}
p .button span {
  font-size: 2em;
  padding-right: .5em;
}
.meta {
  width: 70%;
  margin: 3em 0 0;
  font-size: 1.4em;
  border-bottom: 1px solid #888;
}
.meta dt {
  font-weight: bold;
  width: 5em;
  float: left;
  border-top: 1px solid #888;
  padding-top: .3em;
  padding-bottom: .2em;
  text-align: center;
  letter-spacing: 1em;
}
.meta dd {
  padding-left: 30%;
  border-top: 1px solid #888;
  padding-top: .3em;
  padding-bottom: .2em;
}
.meta dd:after {
  content: '';
  display: block;
  clear: both;
}
@media (min-width: 401px) and (max-width: 500px) {
  .meta {
    width: 90%;
  }
}
@media (max-width: 400px) {
  .meta {
    width: 96%;
    font-size: 1em;
  }
}
</style>
