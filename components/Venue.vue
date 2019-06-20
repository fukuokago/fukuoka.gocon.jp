<i18n>
en:
  desc: |-
    Floor map of the venue (Fukuoka Growth Next).
    If you have any questions about the venue, ask the black T-Shirts FGN resident staff.
    Of course, even the management staff is OK (the management staff is wearing the black T-Shirts printed by Gopher).
    Reception will take place immediately after entering the main entrance.
    We will deliver a neck strap at the time of reception.
  1f: |-
    First, the entrance will be from the entrance located in the center of the building and the front will be the reception.
    The left hand is the Startup Cafe, and the right is the FGN event space.
    The toilets are at the left and right ends, and the left side is a multipurpose toilet without men's toilets.
    There is also a smoking area next to the terrace.
  2f: |-
    The 2nd floor is for use only in the waiting room used by the speakers,
    so if you are a general participant, please do not go up to the 2nd floor basically.
ja:
  desc: |-
    会場(Fukuoka Growth Next)のフロアマップです。会場のことで何かわからないことがあれば、黒いT-ShirtsのFGNの常駐スタッフにお尋ねください。
    もちろん、運営スタッフでもOKです（Gopherくんのプリントされた黒いT-Shirtsを着ているのが運営スタッフです）。
    受付は、正面玄関入ってすぐのところで行います。受付時にネックストラップをお渡しするの予定です。
  1f: |-
    まず、建物の中央に位置する玄関から入り正面が受付となります。左手がStartup Cafeで、右手がFGNのイベントスペースになります。
    トイレは左右の端にあり、左側は男性トイレがなく多目的トイレになっています。また、喫煙スペースもその横テラスにあります。
  2f: |-
    ２階は、スピーカーが利用する控え室のみの利用なので、一般参加の方は、基本的には２階へ上がらないでいただくようお願い申し上げます。
</i18n>

<template>
  <section class="venue">
    <h2>Venue</h2>
    <div class="container">
      <p>{{ $t('desc') }}</p>
    </div>

    <img class="venue-map" src="~/static/img/venue-map-1f.svg" />
    <div class="container">
      <p>{{ $t('1f') }}</p>
    </div>

    <div class="venue-photos is-clearfix">
      <div class="venue-photo" v-for="n in 20"> <img :src="'/venue/fgn-' + n + '.jpg'" /> </div>
    </div>

    <img class="venue-map" src="~/static/img/venue-map-2f.svg" />
    <div class="container">
      <p>{{ $t('2f') }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Venue extends Vue {
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
</style>
