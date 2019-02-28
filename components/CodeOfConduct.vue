<i18n>
en:
  description: 'We require our attendees and speakers to follow the Go Community Code of Conduct.'
  note: 'Note: This is a summary. Please look at all contents from here.'
  summary_1st: 'Treat everyone with respect and kindness.'
  summary_2nd: 'Be thoughtful in how you communicate.'
  summary_3rd: 'Don’t be destructive or inflammatory.'
ja:
  description: '私たちは参加者と登壇者が以下のGoコミュニティ行動規範に従うことを求めています'
  note: '注意：これらはサマリーです。すべての内容を読むにはこちらからお願いします。'
  summary_1st: 'みんなに敬意を払い優しく接しましょう'
  summary_2nd: '伝達には配慮しましょう'
  summary_3rd: '物事を壊そうとしたり煽ったりしてはいけません'
</i18n>

<template>
  <div class="code-of-conduct">
    <h2>Code of Conduct</h2>
    <p>{{ $t('description') }}
    {{ $t('note') }} <a href="https://golang.org/conduct">https://golang.org/conduct</a></p>
    <ul>
      <li>{{ $t('summary_1st') }}</li>
      <li>{{ $t('summary_2nd') }}</li>
      <li>{{ $t('summary_3rd') }}</li>
    </ul>
  </div>
</template>

<style scoped>
.code-of-conduct {
  margin-bottom: 2em;
}
.code-of-conduct p {
  margin-bottom: 1em;
}
.code-of-conduct ul {
  list-style-type: circle;
  padding-left: 1em;
  padding-bottom: 1em;
}
.code-of-conduct li {
  line-height: 1.7;
}
</style>
