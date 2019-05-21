<i18n>
en:
  desc: |-
    The event is 1 day only and the number of tracks is two.
    We will provide a map of the store for nice lunch.
    From the afternoon we will have a Relax mode while drinking and snacks.
ja:
  desc: |-
    イベントは、１日限りでトラック数は２つです。
    普段福岡または天神界隈にいない方のために、美味しいランチが食べれるお店をマッピングしたランチマップを作成いたします。
    午後からはアルコールや軽食をとりながらのRelaxモードを予定しています。
</i18n>

<template>
  <div class="container speakers is-clearfix">
    <h2>Speakers & Talks</h2>

    <p>{{ $t('desc') }}</p>

    <div class="speaker" v-for="(s, i) in speakers">
      <img class="speaker--avatar" :src="s.avatar" v-if="s.avatar !== undefined" />
      <p class="speaker--name">{{ s.name }}</p>
      <p class="speaker--org" v-if="s.organization !== undefined">{{ s.organization }}</p>
      <div class="talk">
        <p class="speaker--session-title">{{ s.title }}</p>
        <p class="speaker--session-time">{{ format24To12(s.start) }} - {{ format24To12(s.end) }}
          <span class="speaker--session-time-duration">({{ duration(s.start, s.end) }})</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
const timetableRaw = require('~/data/timetable.json')
const speakersRaw = require('~/data/speakers.json')

@Component
export default class Speakers extends Vue {
  public speakers

  public format24To12(t: string): string {
    const colonRemoved = t.replace(/:/, '')
    const tt = parseInt(colonRemoved)
    const f12h = `${tt - (tt > 1200 ? 1200 : 0)}`.replace(/^(.*)(\d{2})$/, '$1:$2')
    return `${f12h} ${tt > 1200 ? 'PM' : 'AM'}`
  }

  public duration(start: string, stop: string): string {
    const s = start.split(':')
    const ss = stop.split(':')
    const us = Math.round((new Date(1970, 0, 1, parseInt(s[0]), parseInt(s[1]))).getTime() / 1000 / 60)
    const uss = Math.round((new Date(1970, 0, 1, parseInt(ss[0]), parseInt(ss[1]))).getTime() / 1000 / 60)
    const duMin = uss - us
    if (duMin >= 60) {
      const h = Math.floor(duMin / 60)
      const m = duMin - (h * 60)
      if (m === 0) {
        return `${h} hours`
      }
      return `${h} hours, ${m} min`
    }
    return `${duMin} min`
  }

  public findSession(id: string) {
    for (const v of timetableRaw) {
      if (v.id === id) {
        return v
      }
    }
    return {}
  }

  public createSpeakers() {
    let speakers: any[] = []
    for (const v of speakersRaw) {
      const session = this.findSession(v.id)
      const speaker = { ...session, ...v }
      if (speaker.start === '') {
        continue
      }
      if (speaker.organization === '') {
        speaker.organization = 'N/A'
      }
      speakers.push(speaker)
    }
    return speakers
  }

  public data() {
    return {
      speakers: this.createSpeakers()
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
.speaker img {
  width: 220px;
  height: 220px;
}
.speaker--name {
  padding: .7em 0 .15em;
  font-size: 1em;
  font-weight: bold;
  color: #00ADD8;
  white-space: nowrap;
}
.speaker--org {
  font-size: 12px;
}
.talk {
  margin: .6em 0 0;
  border: 1px solid #888;
  padding: 1.5em 1em .5em;
  border-radius: 5px;
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

@media (max-width: 800px) {
}
</style>
