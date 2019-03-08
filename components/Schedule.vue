<i18n>
en:
  desc: |-
    The event is 1 day only and the number of tracks is two.
    We will provide a map of the store for lunch.
    From the afternoon we will have a Relax mode while drinking and snacks.
ja:
  desc: |-
    イベントは、１日限りでトラック数は２つです。
    ランチには、遠方の方もうれしいランチマップを作成いたします。
    午後からはアルコールや軽食をとりながらのRelaxモードを予定しています。
</i18n>

<template>
  <div class="schedule">
    <h2>Schedule</h2>

    <p>{{ $t('desc') }}</p>

    <table><tbody>
      <tr>
        <th class="time" colspan="1" rowspan="1"><p>Time</p></th>
        <th class="roomA" colspan="1" rowspan="1"><p>Room1</p></th>
        <th class="roomB" colspan="1" rowspan="1"><p>Room2</p></th></tr>
      <tr class="common">
        <td class="time" colspan="1" rowspan="1"><p>10:00-10:10</p></td>
        <td colspan="2" rowspan="1"><p>Opening talk 🙋</p></td></tr>
      <tr>
        <td class="time" colspan="1" rowspan="1"><p>10:10-10:50</p></td>
        <td class="roomA" colspan="1" rowspan="1"><p>Long talk</p></td>
        <td class="roomB" colspan="1" rowspan="1"><p>Long talk</p></td></tr>
      <tr>
        <td class="time" colspan="1" rowspan="1"><p>10:50-11:10</p></td>
        <td class="roomA" colspan="1" rowspan="1"><p>Sponsor talk 📢</p></td>
        <td class="roomB" colspan="1" rowspan="1"><p>Sponsor talk 📢</p></td></tr>
      <tr>
        <td class="time" colspan="1" rowspan="1"><p>11:10-11:30</p></td>
        <td class="roomA" colspan="1" rowspan="1"><p>Sponsor talk 📢</p></td>
        <td class="roomB" colspan="1" rowspan="1"><p>Sponsor talk 📢</p></td></tr>
      <tr>
        <td class="time" colspan="1" rowspan="1"><p>11:30-11:50</p></td>
        <td class="roomA" colspan="1" rowspan="1"><p>Short talk</p></td>
        <td class="roomB" colspan="1" rowspan="1"><p>Short talk</p></td></tr>
      <tr class="common">
        <td class="time" colspan="1" rowspan="1"><p>11:50-13:20</p></td>
        <td class="break lunch" colspan="2" rowspan="1"><p>Lunch break 🍜</p></td></tr>
      <tr>
        <td class="time" colspan="1" rowspan="1"><p>13:20-13:40</p></td>
        <td class="roomA" colspan="1" rowspan="1"><p>Sponsor talk 📢</p></td>
        <td class="roomB" colspan="1" rowspan="1"><p>Sponsor talk 📢</p></td></tr>
      <tr>
        <td class="time" colspan="1" rowspan="1"><p>13:40-14:00</p></td>
        <td class="roomA" colspan="1" rowspan="1"><p>Short talk</p></td>
        <td class="roomB" colspan="1" rowspan="1"><p>Short talk</p></td></tr>
      <tr>
        <td class="time" colspan="1" rowspan="1"><p>14:00-14:20</p></td>
        <td class="roomA" colspan="1" rowspan="1"><p>Short talk</p></td>
        <td class="roomB" colspan="1" rowspan="1"><p>Short talk</p></td></tr>
      <tr>
        <td class="time" colspan="1" rowspan="1"><p>14:20-15:00</p></td>
        <td class="roomA" colspan="1" rowspan="1"><p>Long talk</p></td>
        <td class="roomB" colspan="1" rowspan="1"><p>Long talk</p></td></tr>
      <tr class="common">
        <td class="time" colspan="1" rowspan="1"><p>15:00-15:10</p></td>
        <td class="break" colspan="2" rowspan="1"><p>Break ☕️</p></td></tr>
      <tr>
        <td class="time" colspan="1" rowspan="1"><p>15:10-15:30</p></td>
        <td class="roomA" colspan="1" rowspan="1"><p>Short talk</p></td>
        <td class="roomB" colspan="1" rowspan="1"><p>Short talk</p></td></tr>
      <tr>
        <td class="time" colspan="1" rowspan="1"><p>15:30-15:50</p></td>
        <td class="roomA" colspan="1" rowspan="1"><p>Short talk</p></td>
        <td class="roomB" colspan="1" rowspan="1"><p>Short talk</p></td></tr>
      <tr>
        <td class="time" colspan="1" rowspan="1"><p>15:50-16:30</p></td>
        <td class="roomA" colspan="1" rowspan="1"><p>Long talk</p></td>
        <td class="roomB" colspan="1" rowspan="1"><p>Long talk</p></td></tr>
      <tr class="common">
        <td class="time" colspan="1" rowspan="1"><p>16:30-16:50</p></td>
        <td class="break" colspan="2" rowspan="1"><p>Break ☕️</p></td></tr>
      <tr>
        <td class="time" colspan="1" rowspan="1"><p>16:50-17:10</p></td>
        <td class="roomA" colspan="1" rowspan="1"><p>Sponsor talk 📢</p></td>
        <td class="roomB" colspan="1" rowspan="1"><p>Sponsor talk 📢</p></td></tr>
      <tr>
        <td class="time" colspan="1" rowspan="1"><p>17:10-17:30</p></td>
        <td class="roomA" colspan="1" rowspan="1"><p>Short talk</p></td>
        <td class="roomB" colspan="1" rowspan="1"><p>Short talk</p></td></tr>
      <tr>
        <td class="time" colspan="1" rowspan="1"><p>17:30-17:50</p></td>
        <td class="roomA" colspan="1" rowspan="1"><p>Short talk</p></td>
        <td class="roomB" colspan="1" rowspan="1"><p>Short talk</p></td></tr>
      <tr class="common">
        <td class="time" colspan="1" rowspan="1"><p>17:50-18:00</p></td>
        <td colspan="2" rowspan="1"><p>Close 🍽</p></td></tr>
    </tbody></table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Schedule extends Vue {}
</script>

<style scopd>
.schedule table {
  width: 100%;
  font-size: .8em;
  opacity: 0.6;
}
.schedule table p {
  text-align: center;
  color: #000;
  font-weight: bold;
}
.schedule td,
.schedule th {
  text-align: center;
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
}
.schedule td p,
.schedule th p {
  font-weight: normal;
  color: #111;
  padding-top: .4em;
  padding-bottom: .3em;
}
.schedule th p {
  font-weight: bold;
}
.schedule .common p {
  color: #999;
}
.schedule .time {
  background-color: #ddd;
}
.schedule .time p {
  color: #000;
}
.schedule .roomB {
  background-color: #f5f5f5;
}
.schedule .common td {
  background-color: #e5e5e5;
}
.schedule .common td p {
  color: #666;
}
@media (min-width: 401px) and (max-width: 500px) {
  .schedule table {
    font-size: .6em;
  }
}
@media (max-width: 400px) {
  .schedule table {
    font-size: .5em;
  }
}
</style>
