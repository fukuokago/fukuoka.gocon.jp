<i18n>
en:
  desc: |-
    Participation will be accepted from Connpass.
  entry: Go to Registration page on Connpass
  scholarships: Scholarships（抽選）
  types:
    - 一般枠（抽選）
    - 早期申込枠（先着）
    - 遠方枠（先着）
    - ボランティアスタッフ枠（抽選）
    - CFP応募枠（抽選）
    - 女性／ジェンダーマイノリティ枠（先着）
ja:
  desc: |-
    参加受付には、一般枠にあわせていくつかの優待枠を設けております（出来るだけ多くの人が平等にイベント参加できるように努力しています）。
    ご自分の予定表を確認し、「7/13に福岡でイベント参加できるよ！」という方は、どうぞ、お気軽にConnpassから参加申込してください！
  entry: Connpassの申込みページへ
  scholarships: スカラーシップ枠（抽選）
  types:
    - 一般枠（抽選）
    - 早期申込枠（先着）
    - 遠方枠（先着）
    - ボランティアスタッフ枠（抽選）
    - CFP応募枠（抽選）
    - 女性／ジェンダーマイノリティ枠（先着）
</i18n>

<template>
  <div class="registration">
    <h2>Registration</h2>
    <p>{{ $t('desc') }}</p>

    <p class="goto-form">
      <a class="button large is-inverted is-outlined" href="https://fukuokago.connpass.com/event/130797/">
        {{ $t('entry') }}
        <span class="external" place="external"><i class="fas fa-external-link-alt"></i></span>
      </a>
    </p>

    <h3>Registration types</h3>
    <ul class="colored">
      <li v-for="text in $t('types')">{{ text }}</li>
      <li><nuxt-link :to="localePath('scholarships')">{{ $t('scholarships') }}</nuxt-link></li>
    </ul>
  </div>
</template>

<style scoped>
.goto-form {
  text-align: center;
}
</style>
