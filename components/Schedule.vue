<i18n>
en:
  lunchmap: Lunch Map
  desc: |-
    The event is 1 day only and the number of tracks is two.
    We use two adjacent venues, Fukuoka Growth Next event space and Startup Cafe.
    For those who are not usually in Fukuoka or Tenjin area,
    We created a 🍴 {lunchmap} that maps shops where you can eat delicious lunches.
    Please use all means.
    From the afternoon we will have a Relax mode while drinking and snacks.
ja:
  lunchmap: ランチマップ
  desc: |-
    イベントは、１日限りでトラック数は２つです。Fukuoka Growth NextのイベントスペースとStartup Cafeの隣り合った２会場となります。
    普段、福岡または天神界隈にいない方のために、美味しいランチが食べれるお店をマッピングした🍴 {lunchmap}を作成しました。ぜひ、ご活用ください。
    午後からは、アルコールや軽食をとりながらのRelaxモードを予定しています。
</i18n>

<template>
  <div class="schedule">
    <h2>Schedule @ July 13</h2>

    <i18n path="desc" tag="p">
      <nuxt-link place="lunchmap" :to="localePath('lunchmap')">{{ $t('lunchmap') }}</nuxt-link>
    </i18n>

    <div class="schedule--box">
      <div class="row" v-for="(sessions, time) in timetable">
        <p class="timediv">{{ time }}</p>
        <div class="is-clearfix">
          <div class="session" v-bind:class="{single: sessions.length === 1 && sessions[0].room === null, 'sponsor-session': v.sponsor, 'special-session': v.note}" v-for="(v, i) in sessions">
            <p class="session--sponsor" v-if="v.sponsor">Sponsor</p>
            <p class="session--time">{{ v.start }} - {{ v.stop }}
              <span class="session--time--duration">({{ v.duration }})</span>
            </p>
            <p class="session--title">
              <nuxt-link class="session--title--anchor" :to="permalink(v.id)" v-if="v.name !== undefined && v.name !== ''">{{ v.title }}</nuxt-link>
              <span v-else>{{ v.title }}</span>
            </p>
            <p class="session--note" v-if="v.note">{{ v.note }}</p>
            <ul class="session--tags">
              <li class="tag" v-for="(tag) in v.tags">{{ tag }}</li>
            </ul>
            <p class="session--at fgn" v-if="v.room === 'fgn'"><i class="fas fa-map-marker-alt"></i> fgn.</p>
            <p class="session--at startupcafe" v-if="v.room === 'startupcafe'"><i class="fas fa-map-marker-alt"></i> Startup Cafe</p>
            <div class="session--speaker is-clearfix" v-if="v.name !== undefined && v.name !== ''">
              <img class="session--speaker--avatar" :src="v.avatar" />
              <p class="session--speaker--name">{{ v.name }}</p>
              <p class="session--speaker--org">{{ v.organization }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { getTimetable } from '~/lib/event'

@Component
export default class Schedule extends Vue {
  public timetable

  public permalink(id: string): string {
    return this.localePath({ name: 'speakers-slug', params: { slug: id } })
  }

  public data() {
    return {
      timetable: getTimetable()
    }
  }
}
</script>

<style scopd>
.schedule--box {
  margin-top: 2em;
}
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
.sponsor-session {
  border: 1px solid #00ADD8;
}
.special-session {
  border: 1px solid #CE3262;
}
.session--sponsor {
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-weight: bold;
  font-family: 'Arvo', serif;
  background-color: #00ADD8;
  color: #fff;
  font-size: .7em;
  padding: .2em 1em;
  border-radius: 4px;
  opacity: 0.3;
}
.session--at {
  position: absolute;
  top: 15px;
  right: 15px;
  font-weight: bold;
  font-family: 'Arvo', serif;
  color: #333;
  font-size: .8em;
}
.session--at.startupcafe {
  color: #BF9F00;
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
  font-family: 'Arvo', serif;
  padding-bottom: .7em;
  line-height: 1.2;
}
.session--title--anchor {
  font-size: .7em;
}
.session--note {
  font-size: .75em;
  color: #333;
}
.session--tags {
  font-family: 'Arvo', serif;
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
}
.session--tags li {
  float: left;
}
.tag {
  font-size: .7em;
  background: #888;
  border-radius: 3px 0 0 3px;
  color: #fff;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 20px;
  position: relative;
  margin: 0 10px 10px 0;
  text-decoration: none;
  -webkit-transition: color 0.2s;
}
.session--speaker {
  padding: 1em 0;
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
  padding: 1em 0 .15em;
  font-size: 1em;
  font-weight: bold;
}
.session--speaker--org {
  padding: 0;
  font-size: .8em;
  color: #00ADD8;
}
@media (min-width: 501px) and (max-width: 800px) {
  .session {
    width: 100%;
    float: none;
    margin-bottom: 1em;
  }
  .session:first-child {
    margin-right: 0;
  }
}
@media (max-width: 500px) {
  .session {
    width: 100%;
    float: none;
    margin-bottom: 1em;
  }
  .session:first-child {
    margin-right: 0;
  }
  .session--time:before {
    left: -10px;
    width: 16px;
    overflow: hidden;
  }
  .row {
    position: relative;
    padding: 2em 0 0;
  }
  .timediv {
    top: -5px;
    left: -1em;
  }
  .session--title {
    font-size: 1.2em;
  }
  .session--tags li {
  font-size: .5em;
  }
  .session--speaker--name {
    padding-top: 1.5em;
    font-size: .9em;
  }
}
</style>
