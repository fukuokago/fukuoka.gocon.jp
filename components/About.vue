<i18n>
en:
  callforpapers: Call for Papers
  cfpclosed: Closed
  registration: Registration
  enjoy: "In Fukuoka, let's talk about various technologies through the Go programming language, learn from each other, have a good time, interact with developers! You will surely feel that Fukuoka is an attractive city for engineers by attending the conference."
  background: '"{go}" is been held from early in comparison with other one in the world and a significant event for Go community. Every year several hundreds of gophers attend the conference and interact through various sessions of Go.'
  announce: 'At last this conference will be held in Fukuoka. {enjoy}'
  theme: 'Catchphrase is {words}'
ja:
  callforpapers: 登壇募集に応募する
  cfpclosed: 終了
  registration: 参加登録をする
  enjoy: 'エンジニアにとって魅力ある土地、福岡で、今注目を集めるプログラミング言語Goを通じて様々な技術の話をし、学び合い、楽しい時間を過ごし、開発者同士の交流を深めましょう！'
  background: '「{go}」は、世界的に見ても初期から行われており、Goコミュニティにとって意義のあるイベントです。カンファレンスでは毎年数百名のGopherが参加しGoにまつわる多様なセッションを通した交流が行われています。'
  announce: '今回、ついに、このカンファレンスを福岡で開催します。{enjoy}'
  theme: 'アイコトバは、{words}'
</i18n>

<template>
  <div>
    <i18n path="background" tag="p">
      <strong place="go" class="strong">Go Conference</strong>
    </i18n>

    <i18n path="announce" tag="p">
      <em place="enjoy" class="em">{{ $t('enjoy') }}</em>
      <strong place="theme">Go and Enjoy Fukuoka!</strong>
    </i18n>

    <i18n path="theme" tag="p">
      <strong place="words">Go and Enjoy Fukuoka!</strong>
    </i18n>

    <div class="attention">
      <p class="cfp"><nuxt-link class="button" :to="localePath('cfp')"><span>📝</span>
          <s>{{ $t('callforpapers') }}</s>{{ $t('cfpclosed') }}</nuxt-link></p>
      <p class="registration"><nuxt-link class="button is-focused" :to="localePath('registration')"><span>🎪</span>{{ $t('registration') }}</nuxt-link></p>
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
.attention s {
    padding-right: .5em;
}
.attention .cfp {
  padding-right: 1em;
}
p .button {
  padding: 2em 1.5em;
}
p .button span {
  font-size: 1.8em;
  padding-right: .3em;
}
</style>
