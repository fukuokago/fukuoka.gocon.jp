<template>
  <section class="container">
    <div class="inner">
      <p>毎年東京で開催されているGo Conferenceが、ついに今年は福岡開催があります。
      会場は天神あたりで７月を予定しております。</p>
    </div>

    <div class="inner">
       <TimeTable/>
    </div>

    <div class="inner wait">
      <h2>Call for Papers</h2>
      <p>𝝣GO 𝝣GO 𝝣GO</p>
    </div>

    <div class="inner wait">
      <h2>Talks</h2>
      <p>𝝣GO 𝝣GO 𝝣GO</p>
    </div>

    <div class="inner wait">
      <h2>Scholarships</h2>
      <p>𝝣GO 𝝣GO 𝝣GO</p>
    </div>

    <div class="inner wait">
      <h2>Code of Conduct</h2>
      <p>𝝣GO 𝝣GO 𝝣GO</p>
    </div>

    <div class="inner wait">
      <h2>Sponsors</h2>
      <p>𝝣GO 𝝣GO 𝝣GO</p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TimeTable from '~/components/TimeTable.vue'
// import Logo from '~/components/Logo.vue'

@Component({
  components: {
    TimeTable
  }
})
export default class Home extends Vue {}
</script>

<style>
.container {
    width: 800px;
    margin: 1em auto;
}
.container p {
    font-size: 1.5em;
    line-height: 1.5;
}
.inner {
    margin-bottom: 5em;
}
.inner h2 {
  font-size: 2em;
  font-family: 'Arvo', serif;
  padding: 0 0 2em;
  text-align: center;
}
.wait p {
  text-align: center;
  color: #BBB;
  font-weight: bold;
}
</style>
