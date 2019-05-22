<template>
  <div class="speakers is-clearfix">
    <h2>Speakers & Talks</h2>

    <div class="speaker" v-for="(s, i) in speakers">
      <nuxt-link class="speaker--anchor" :to="permalink(s.id)">
        <img class="speaker--avatar" :src="s.avatar" v-if="s.avatar" />
      </nuxt-link>
      <p class="speaker--name"><nuxt-link :to="permalink(s.id)">{{ s.name }}</nuxt-link></p>
      <p class="speaker--org">{{ s.organization }}</p>
      <div class="talk" v-bind:class="{ 'talk-sponsor': s.sponsor }">
        <p class="speaker--session-sponsor" v-if="s.sponsor">Sponsor</p>
        <p class="speaker--session-title">{{ s.title }}</p>
        <p class="speaker--session-time">{{ s.start }} - {{ s.stop }}
          <span class="speaker--session-time-duration">({{ s.duration }})</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { getSpeakers } from '~/lib/event'

@Component
export default class Speakers extends Vue {
  public speakers

  public permalink(id: string): string {
    return this.localePath({ name: 'speakers-slug', params: { slug: id } })
  }

  public data() {
    return {
      speakers: getSpeakers()
    }
  }
}
</script>

<style scopd>
.speaker {
  width: 220px;
  height: 460px;
  float: left;
  margin: 0 40px 40px 0;
  padding: 0;
  font-family: 'Arvo', serif;
}
a.speaker--anchor {
  border: none;
}
.speaker img {
  width: 220px;
  height: 220px;
}
.speaker--name {
  padding: .7em 0 .15em;
  font-size: 1em;
  font-weight: bold;
  white-space: nowrap;
}
.speaker--org {
  font-size: 12px;
  color: #00ADD8;
}
.talk {
  margin: .6em 0 0;
  border: 1px solid #888;
  padding: 1.5em 1em .5em;
  border-radius: 5px;
  position: relative;
}
.talk-sponsor {
  border: 1px solid #CE3262;
}
.speaker--session-title:before {
  content: '^';
  position: absolute;
  margin-top: -1.3em;
}
.speaker--session-title {
  font-size: .8em;
  min-height: 7em;
}
.speaker--session-time {
  font-size: .7em;
  font-weight: bold;
}
.speaker--session-time-duration {
  font-weight: normal;
}
.speaker--session-sponsor {
  position: absolute;
  top: -2em;
  right: 1em;
  background-color: #CE3262;
  color: #fff;
  font-size: .7em;
  padding: .2em 1em;
  border-radius: 4px 4px 0 0;
}

@media (min-width: 501px) and (max-width: 800px) {
  .speaker {
    width: 29%;
    margin: 0 2% 2em;
  }
  .speaker img {
    width: 100%;
    height: auto;
  }
}
@media (max-width: 500px) {
  .speaker {
    width: 47%;
    height: 400px;
    margin: 0 6% 1em 0;
  }
  .speaker:nth-child(odd) {
    margin-right: 0;
  }
  .speaker img {
    width: 100%;
    height: auto;
    max-height: 150px;
  }
  .speaker--name {
    letter-spacing: -1px;
    font-size: .8em;
  }
  .talk {
    margin: .6em 0 0;
    padding: 1.5em .5em .5em;
  }
  .speaker--session-title {
    letter-spacing: -1px;
  }
  .speaker--session-time {
    font-size: .6em;
    letter-spacing: -1px;
  }
}
</style>
