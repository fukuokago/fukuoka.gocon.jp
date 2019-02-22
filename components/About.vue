<i18n>
en:
  callforpapers: Call for Papers
  registration: Registration
  enjoy: "Let's talk about various technologies, learn from each other, have a good time, deepen interactions among developers through Fukuoka's attractive landscape for engineers through a programming language Go that is gaining attention now!"
  background: '"{go}" is done from the beginning even if it is seen globally, it is a meaningful event for the Go community. Hundreds of Gophers participate in the conference every year and exchanges are made through various sessions related to Go.'
  announce: 'At last this conference will be held in Fukuoka. {enjoy}'
ja:
  callforpapers: 登壇募集に応募する
  registration: 参加登録をする
  enjoy: 'エンジニアにとって魅力ある土地、福岡で、今注目を集めるプログラミング言語Goを通じて様々な技術の話をし、学び合い、楽しい時間を過ごし、開発者同士の交流を深めましょう！'
  background: '「{go}」は、世界的に見ても初期から行われており、Goコミュニティにとって意義のあるイベントです。カンファレンスでは毎年数百名のGopherが参加しGoにまつわる多様なセッションを通した交流が行われています。'
  announce: '今回、ついに、このカンファレンスを福岡で開催します。{enjoy}'
</i18n>

<template>
  <div>
    <i18n path="background" tag="p">
      <strong place="go" class="about--strong">Go Conference</strong>
    </i18n>
    <i18n path="announce" tag="p">
      <em place="enjoy" class="about--em">{{ $t('enjoy') }}</em>
    </i18n>
    <div class="attention">
      <p class="cfp"><nuxt-link class="button" :to="localePath('cfp')" disabled><span>📝</span>{{ $t('callforpapers') }}</nuxt-link></p>
      <p class="registration"><nuxt-link class="button" :to="localePath('registration')" disabled><span>🎪</span>{{ $t('registration') }}</nuxt-link></p>
    </div>
  </div>
</template>

<style scoped>
.attention {
  padding-top: 3em;
  font-family: 'Arvo', serif;
}
.attention p {
  display: inline-block;
}
.attention .cfp {
  padding-right: 1em;
}
p .button {
  background-color: #f5f5f5;
  padding: 2em 1.5em;
  cursor: pointer;
}
p .button span {
  font-size: 2em;
  padding-right: .5em;
}
</style>
