<template>
  <div class="speaker-details is-clearfix">
    <h2><span class="speakers-index-link"><nuxt-link :to="indexlink">Speakers & Talks</nuxt-link></span></h2>

    <img class="avatar" :src="speaker.avatar" v-if="speaker.avatar !== undefined" />

    <div class="speaker-details--speaker">
      <p class="speaker-org">{{ speaker.organization }}</p>
      <p class="speaker-name">{{ speaker.name }}</p>
      <div class="speaker-bio" v-html="$md.render(speaker.bio)"></div>
      <p class="speaker-url" v-if="speaker.url"><a :href="speaker.url">{{ speaker.url }}</a></p>
      <p class="speaker-twitter" v-if="speaker.twitter"><a :href="'https://twitter.com/' + speaker.twitter">https://twitter.com/{{ speaker.twitter }}</a></p>

      <div class="speaker-details--session">
        <p class="session-head">Title:</p>
        <p class="session-title">{{ speaker.title }}</p>
        <ul class="session-tags">
          <li class="tag" v-for="(tag) in speaker.tags">{{ tag }}</li>
        </ul>
        <p class="session-head">Abstract:</p>
        <div class="session-abstract" v-html="$md.render(speaker.abstract)"></div>
        <p class="session-head">Time:</p>
        <p class="session-time">{{ session.start }} - {{ session.stop }}
          <span class="speaker--session-time-duration">({{ session.duration }})</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { findSpeaker, findSession } from '~/lib/event'

@Component
export default class SpeakerDetails extends Vue {
  @Prop() public slug!: string
  public speaker!: object
  public session!: object

  get indexlink(): string {
    return this.localePath({name: 'speakers-slug'})
  }

  public data() {
    return {
      speaker: findSpeaker(this.slug),
      session: findSession(this.slug)
    }
  }
}
</script>

<style scopd>
.speaker-details .avatar {
  width: 30%;
  height: auto;
  border-radius: 10px;
  float: left;
}
.speaker-details--speaker {
  width: 65%;
  padding-left: 5%;
  float: left;
  font-family: 'Arvo', serif;
}
.speaker-details--speaker .speaker-name {
  color: #00ADD8;
  font-weight: bold;
  font-size: 2em;
}
.speaker-details--speaker .speaker-org {
  font-size: .85em;
}
.speaker-details--speaker .speaker-bio {
  font-size: 1em;
}
.speaker-details--speaker .speaker-url,
.speaker-details--speaker .speaker-twitter {
  font-size: 1em;
}
.speaker-details--speaker .session-head {
  background-color: #000;
  color: #fff;
  display: inline-block;
  font-family: 'Arvo', serif;
  padding: .3em 0 .3em 1em;
  font-size: .7em;
  width: 7em;
  border-radius: 4px;
  margin-left: -9em;
  margin-top: .5em;
  position: absolute;
}
.speaker-details--session {
  border: 1px solid #888;
  border-radius: 5px;
  padding: 2em 2em 1em 5em;
  margin-top: 3em;
}
.speaker-details--session .session-title {
  font-weight: bold;
}
.speaker-details--session .session-time {
  font-size: 1em;
  padding-top: .3em;
}
.speakers-index-link {
  display: inline-block;
  font-family: 'Arvo', serif;
  color: #ccc;
  padding-right: .3em;
}
.speakers-index-link a {
  font-weight: bold;
  border: none;
  color: #bbb;
  padding-right: .3em;
}
.speakers-index-link a:hover {
  border: none;
  color: #000;
}
.session-tags {
  font-family: 'Arvo', serif;
  list-style: none;
  margin: 0 0 1em;
  overflow: hidden;
  padding: 0;
}
.session-tags li {
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
@media (max-width: 500px) {
  .speaker-details--speaker .speaker-name {
    font-size: 1em;
    white-space: nowrap;
  }
  .speaker-details--speaker .speaker-bio {
    font-size: .8em;
  }
  .speaker-details--speaker .speaker-url,
  .speaker-details--speaker .speaker-twitter {
    font-size: .7em;
  }
  .speaker-details--speaker .session-head {
    padding: .3em 0 .3em 1em;
    font-size: .6em;
    width: 6em;
    margin-left: -7em;
    margin-top: 0;
  }
  .speaker-details--session {
    margin-left: -50%;
    margin-top: 2em;
    padding: 1.5em 1.5em 1em 3em;
  }
  .speaker-details--session .session-time {
    font-size: .7em;
  }
}
</style>
