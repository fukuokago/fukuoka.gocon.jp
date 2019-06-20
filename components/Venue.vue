<i18n>
en:
  desc: |-
    Floor map of the venue (Fukuoka Growth Next).
    If you have any questions about the venue, ask the black T-Shirts FGN resident staff.🙋‍♂️
    Of course, even the management staff is OK (the management staff is wearing the black T-Shirts printed by Gopher).
  desc2: |-
    Reception will take place immediately after entering the main entrance.
    We will deliver a neck strap at the time of reception.🥇
  1f: |-
    First, the entrance will be from the entrance located in the center of the building and the front will be the reception.
    The left hand is the Startup Cafe, and the right is the FGN event space.
    The toilets are at the left and right ends, and the left side is a multipurpose toilet without men's toilets.
    There is also a smoking area next to the terrace.💃
  notice:
    - 飲食：Startup Cafeで飲食はできません。Chillout Roomを使うか、FGN側でお願いします。
    - 使用不可エリア：斜線の部分は使えません。特に、On-demand Workspacesは、許可なしに侵入するとアラームがなります。
    - The 2nd floor: for use only in the waiting room used by the speakers, so if you are a general participant, please do not go up to the 2nd floor basically.
    - その他：awabarやHowlt Coffeeは利用できますが、廊下での飲食は禁止です。
ja:
  desc: |-
    会場(Fukuoka Growth Next)のフロアマップです。会場のことで何かわからないことがあれば、黒いT-ShirtsのFGNの常駐スタッフにお尋ねください。🙋‍♂️
    もちろん、運営スタッフでもOKです（Gopherくんのプリントされた黒いT-Shirtsを着ているのが運営スタッフです）。
  desc2: |-
    受付は、正面玄関入ってすぐのところで行います。受付時にネックストラップをお渡しするの予定です。🥇
  1f: |-
    まず、建物の中央に位置する玄関から入り正面が受付となります。左手がStartup Cafeで、右手がFGNのイベントスペースになります。
    トイレは左右の端にあり、左側は男性トイレがなく多目的トイレになっています。また、喫煙スペースもその横テラスにあります。💃
  notice:
    - 飲食：Startup Cafeで飲食はできません。Chillout Roomを使うか、FGN側でお願いします。
    - 使用不可エリア：斜線の部分は使えません。特に、On-demand Workspacesは、許可なしに侵入するとアラームがなります。
    - ２階：スピーカーが利用する控え室のみの利用なので、一般参加の方は基本的には２階へ上がらないでいただくようお願い致します。
    - その他：awabarやHowlt Coffeeは利用できますが、廊下での飲食は禁止です。
</i18n>

<template>
  <section class="venue">
    <h2>Venue</h2>
    <div class="container">
      <p>{{ $t('desc') }}</p>
      <p>{{ $t('desc2') }}</p>
    </div>

    <div class="venue-photos is-clearfix">
      <LightGallery :images="images0" :index="index0" :disable-scroll="false" @close="index0 = null" />
      <div class="venue-photo" v-for="(thumb, thumbIndex0) in images0" :key="thumbIndex0" @click="index0 = thumbIndex0" >
        <img :src="thumb.url.replace(/src/, 'thumb')">
      </div>
    </div>

    <img class="venue-map" src="~/static/img/venue-map-1f.svg" />
    <div class="container">
      <p>{{ $t('1f') }}</p>
    </div>

    <div class="venue-photos is-clearfix">
      <LightGallery :images="images1" :index="index1" :disable-scroll="false" @close="index1 = null" />
      <div class="venue-photo" v-for="(thumb, thumbIndex1) in images1" :key="thumbIndex1" @click="index1 = thumbIndex1" >
        <img :src="thumb.url.replace(/src/, 'thumb')">
      </div>
    </div>

    <div class="container">
      <h3>⚠️ Notice</h3>
      <ul class="colored">
        <li v-for="(v) in $t('notice')">{{ v }}</li>
      </ul>
    </div>

    <img class="venue-map floor-2nd" src="~/static/img/venue-map-2f.svg" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Venue extends Vue {
  public data() {
    return {
      images0: [
        { title: 'Welcome to fgn', url: '/venue/src/fgn-0.jpg' },
        { title: 'Really elementary school', url: '/venue/src/fgn-1.jpg' },
        { title: 'Howlt Coffee Terrace', url: '/venue/src/fgn-2.jpg' },
        { title: 'Pizza???', url: '/venue/src/fgn-3.jpg' },
        { title: 'Go! Smart City Fukuoka', url: '/venue/src/fgn-4.jpg' },
        { title: 'Hi, Receptionist', url: '/venue/src/fgn-5.jpg' },
        { title: 'The staff of fgn is here', url: '/venue/src/fgn-7.jpg' },
        { title: 'fgn is not a screen but nine multi-displays!', url: '/venue/src/fgn-8.jpg' },
        { title: 'From behind', url: '/venue/src/fgn-9.jpg' },
        { title: 'A beer server, coffee server, or food will be prepared at this desk', url: '/venue/src/fgn-20.jpg' },
      ],
      index0: null,
      images1: [
        { title: 'Startup Cafe entrance', url: '/venue/src/fgn-6.jpg' },
        { title: 'This is FECC', url: '/venue/src/fgn-10.jpg' },
        { title: 'Here is the Startup Cafe, with chairs in the foreground and a screen at the back.', url: '/venue/src/fgn-11.jpg' },
        { title: 'Chillout Roooooooooooooooom!', url: '/venue/src/fgn-12.jpg' },
        { title: 'On-demand Workspaces, We can not use here', url: '/venue/src/fgn-14.jpg' },
        { title: 'This is Howlt Coffee', url: '/venue/src/fgn-15.jpg' },
        { title: 'This is awabar entrance', url: '/venue/src/fgn-16.jpg' },
        { title: 'You can see the stylish bar counter', url: '/venue/src/fgn-17.jpg' },
        { title: 'Gundam stands in the toilet on the east side', url: '/venue/src/fgn-18.jpg' },
        { title: 'West women\'s toilet and multipurpose toilet', url: '/venue/src/fgn-19.jpg' },
      ],
      index1: null
    }
  }
}
</script>

<style scoped>
.venue-map {
  width: 100%;
  height: auto;
}
.venue-photos {
  line-height: 1;
}
.venue-photo {
  width: 20%;
  height: auto;
  float: left;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.venue-photo img {
  margin: 0;
  padding: 0;
}
.floor-2nd {
  margin-top: -7%;
}
@media (max-width: 800px) {
  .venue-photo {
    width: 25%;
  }
}
</style>
