<i18n>
en:
  description: |-
    "Go Conference'19 Summer in Fukuoka" is managed by {fukuokago}, a Go community in Fukuoka and Tokyo {gocon} members. 
    If you could help us manage our events, please contact @linyows or @monochromegane.
    Join to the Fukuoka.go slack team from here. 👉 {slack}
ja:
  description: |-
    "Go Conference'19 Summer in Fukuoka" は、東京の{gocon}メンバーと共に福岡のGoコミュニティである{fukuokago}によって運営いたします。
    運営のお手伝いをしていただける方は、@linyows や @monochromegane へお気軽にお声掛けください。
    Fukuoka.goのSlack TeamはこちらからJoinできます 👉 {slack}
</i18n>

<template>
  <div class="team is-clearfix">
    <h2>Team</h2>
    <i18n path="description" tag="p">
      <a place="gocon" href="https://gocon.connpass.com/">Go Conference</a>
      <a place="fukuokago" href="https://fukuokago.tech/">Fukuoka.go</a>
      <a place="slack" href="https://slack.fukuokago.tech/">https://slack.fukuokago.tech</a>
    </i18n>

    <div class="members is-clearfix">
      <div v-for="(m, i) in members" class="member">
        <img :src=m.avatar />
        <h3 class="name"><a :href=m.link><span class="text">@{{m.id}}</span><span class="icon"><i :class="'fab fa-' + m.icon"></i></span></a></h3>
        <p class="role">{{m.roles.join(', ')}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
})
export default class Team extends Vue {
  public members = [
    { id: 'deeeet',         roles: ['Organizer'],               icon: 'twitter', link: 'https://twitter.com/deeeet', avatar: 'https://avatars3.githubusercontent.com/u/1256183?s=120&v=4' },
    { id: 'keita_kawamoto', roles: ['Illustrator', 'Designer'], icon: 'dribbble ', link: 'https://dribbble.com/keita_kawamoto', avatar: 'https://avatars3.githubusercontent.com/u/1661325?s=120&v=4' },
    { id: 'kunit',          roles: ['Organizer'],               icon: 'twitter', link: 'https://twitter.com/kunit', avatar: 'https://avatars3.githubusercontent.com/u/405750?s=120&v=4' },
    { id: 'linyows',        roles: ['Organizer', 'Designer'],   icon: 'slack', link: 'https://fukuokago.slack.com/messages/@linyows/', avatar: 'https://avatars3.githubusercontent.com/u/72049?s=120&v=4' },
    { id: 'monochromegane', roles: ['Organizer'],               icon: 'slack', link: 'https://fukuokago.slack.com/messages/@monochromegane/', avatar: 'https://d19ta9rijs3cxg.cloudfront.net/wp-content/uploads/sites/2/2017/05/13692462_1013755355398990_5321412467621857881_n-e1494916040772.jpg' } ,
    { id: 'seike460',       roles: ['Organizer'],               icon: 'twitter', link: 'https://twitter.com/seike460', avatar: 'https://avatars2.githubusercontent.com/u/8141624?s=120&v=4' },
    { id: 'tenntenn',       roles: ['Organizer'],               icon: 'twitter', link: 'https://twitter.com/tenntenn', avatar: 'https://avatars3.githubusercontent.com/u/796820?s=120&v=4' },
    { id: 'tokibi',         roles: ['Organizer'],               icon: 'twitter', link: 'https://twitter.com/_tokibi', avatar: 'https://avatars3.githubusercontent.com/u/4437239?s=120&v=4' },
    { id: 'ymotongpoo',     roles: ['Organizer'],               icon: 'twitter', link: 'https://twitter.com/ymotongpoo', avatar: 'https://avatars3.githubusercontent.com/u/145104?s=120&v=4' },
    { id: 'yuji-otani',     roles: ['Organizer'],               icon: 'facebook', link: 'https://www.facebook.com/yuji.otani.16', avatar: 'https://avatars3.githubusercontent.com/u/2609671?s=120&v=4' }
  ]
}
</script>

<style scoped>
.member {
  float: left;
  width: 270px;
  height: 80px;
  margin: 2em 0 0 0;
}
.member img {
  display: inline-block;
  border-radius: 50%;
  padding: 0.2em;
  background-color: #fff;
  width: 30%;
  display: block;
  float: left;
  margin-right: 1em;
}
.name {
  font-size: .9em;
  font-weight: bold;
  letter-spacing: -.05em;
  position: relative;
}
.name a {
  border: none;
  cursor: pointer;
}
.name .icon {
  font-size: 2.5em;
  opacity: 0.3;
  color: #00ADD8;
  position: absolute;
  left: 90px;
  top: 0;
  z-index: -1;
}
.role {
  letter-spacing: -.05em;
  font-size: 1em;
  text-align: left;
  font-weight: bold;
}
</style>
