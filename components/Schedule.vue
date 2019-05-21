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
  <div class="container schedule">
    <h2>Schedule</h2>

    <p>{{ $t('desc') }}</p>

    <div class="row" v-for="(sessions, time) in timetable">
        <p class="timediv">{{ time }}</p>
        <div class="is-clearfix">
          <div class="session" v-bind:class="{single: sessions.length === 1}" v-for="(v, i) in sessions">
            <p class="session--time">{{ format24To12(v.start) }} - {{ format24To12(v.end) }}
              <span class="session--time--duration">({{ duration(v.start, v.end) }})</span>
            </p>
            <p class="session--title">{{ v.title }}</p>
            <div class="session--speaker is-clearfix">
              <img class="session--speaker--avatar" :src="v.avatar" v-if="v.avatar !== undefined" />
              <p class="session--speaker--name">{{ v.name }}</p>
              <p class="session--speaker--org" v-if="v.organization !== undefined">{{ v.organization }}</p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
const t = require('~/data/timetable.json')
const speakers = require('~/data/speakers.json')

@Component
export default class Schedule extends Vue {
  public timetable

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

  public findSpeaker(id: string) {
    for (const v of speakers) {
      if (v.id === id) {
        return v
      }
    }
    return {}
  }

  public createDiv() {
    let divs = {}
    for (const v of t) {
      if (v.start === '') {
        continue
      }

      const sp = this.findSpeaker(v.id)
      const speaker = { ...sp, ...v }
      const time = this.format24To12(v.start)
      if (divs[time] === undefined) {
        divs[time] = []
      }
      divs[time].push(speaker)
    }
    return divs
  }

  public data() {
    return {
      timetable: this.createDiv()
    }
  }
}
</script>

<style scopd>
.row {
  position: relative;
  padding: 0 0 2em 7em;
}
.timediv {
  position: absolute;
  top: 10px;
  left: 0;
  background-color: #000;
  color: #fff;
  display: inline-block;
  font-size: 11px;
  padding: .5em 1.5em;
  font-weight: bold;
  font-family: 'Arvo', serif;
  border-radius: 5px;
}
.session {
  position: relative;
  border: 1px solid #CCC;
  border-radius: 6px;
  width: 48%;
  float: left;
  padding: 1em 1em 0 1.5em;
}
.session:first-child {
  margin-right: 4%;
}
.single.session {
  width: 100%;
  float: none;
}
.session--time:before {
  content: '●';
  position: absolute;
  top: 9px;
  left: -17px;
  font-size: 2em;
  border: 1px solid #CCC;
  border-radius: 5px;
  padding: 0 10px;
  background-color: #e5e5e5;
  color: #e5e5e5;
  font-size: 17px;
}
.session--time {
  font-size: 11px;
  font-weight: bold;
  font-family: 'Arvo', serif;
}
.session--time--duration {
  font-weight: normal;
  padding-left: .5em;
}
.session--title {
  font-weight: bold;
}
.session--speaker {
  padding-bottom: 1em;
  font-family: 'Arvo', serif;
}
.session--speaker img {
  border-radius: 50%;
  width: 81px;
  height: 81px;
  overflow: hidden;
  background-color: #fff;
  float: left;
  padding: .2em;
  margin-right: 1em;
}
.session--speaker--name {
  padding: .7em 0 .15em;
  font-size: 1em;
  font-weight: bold;
}
.session--speaker--org {
  padding: 0;
  font-size: .8em;
  color: #00ADD8;
}
@media (max-width: 800px) {
  .session {
    width: 100%;
    float: none;
    margin-bottom: 1em;
  }
  .session:first-child {
    margin-right: 0;
  }
}
</style>
