<i18n>
en:
  desc: |-
    Call for paper is coming soon... We will use {papercall} for paper calling.
    The reason for using PaperCall.io has pros that form content is superior and organizer feedback is easy.
    To use PaperCall.io you need to create an account.
  types: Talk Types
  types_desc: There are 3 talk types. Please select the one that suits your presentation. Presentation will proceed on 2 tracks.
  talktype_1: "Keynote style presentations; 20 minute time limit, questions at the presenter's discretion."
  talktype_2: "Tutorial style presentations; 40 minute time limit, questions at the presenter's discretion."
  talktype_3: Lightning talk style presentations; 5 minute time limit
  talktype_3_note: LT will be recruited separately
  criteria: Selection Criteria
  criteria_desc: Proposals will be reviewed based on the selection criteria below.
  criteria_1: Relevance. The talk is relevant to the Go community. GoCon is not a general software conference, our audience wants to hear about topics that relate to the Go programming language.
  criteria_2: Clarity. You’ve clearly explained what you are going to talk about.
  criteria_3: Correctness. You’ve demonstrated knowledge of your topic. You don’t have to be an expert, but you are expected to be speaking from experience.
  criteria_4: Achievability. You’ve thought about how to present your material in the time available.
  criteria_5: Impact. The goal of the talk. What new idea, technique, tool, or information will the audience leave your presentation with?
  criteria_note: "Note: This clear selection criterion is based on {gophercon}’s one. Thank you."
ja:
  desc: |-
    もうすぐ登壇の募集を開始します。募集への応募は、{papercall} を利用する予定です。
    PaperCall.ioを使うのは、入力フォーム内容が優れていることと、Organizerからのフィードバックをしやすいからです。
    PaperCall.ioを初めて利用される方にはお手数ですが、あらかじめアカウントを登録する必要があります。
  types: 発表種別
  types_desc: 種別は3つありますので、プレゼンテーションにあったものを選択してください。なお、発表は2トラックで進行されます。
  talktype_1: 'テーマに基づくキーノートスタイルのプレゼンテーション（時間制限: 20分、質疑応答含む）'
  talktype_2: '集中講義スタイルのプレゼンテーション（時間制限: 40分、質疑応答含む）'
  talktype_3: 'いわゆるLTタイプ（時間制限: 5分）'
  talktype_3_note: LTは別途募集予定
  criteria: 選択基準
  criteria_desc: 登壇発表の応募は以下の選択基準に基づきレビューされます。
  criteria_1: 関連性：Go言語に関連するトピックである（Go Conferenceは一般的なソフトウェアのカンファレンスではありません）
  criteria_2: 明快さ：発表内容を明確に説明している
  criteria_3: 正しさ：トピックに関する知見を持つこと証明している（専門家である必要はありませんが経験から話すことが期待されています）
  criteria_4: 達成可能性：発表材料を有効時間内にどのように提示するか考えている
  criteria_5: 影響力：プレゼンテーションのゴール（聴衆はプレゼンテーションを経てどんな新しいアイデア、テクニック、ツール、情報を持ちますか）
  criteria_note: この明確な選択基準は{gophercon}のものを参考にさせていただきました。ありがとうございます。
</i18n>

<template>
  <div class="call-for-papers">
    <h2>Call for Papers</h2>
    <i18n path="desc" tag="p">
      <a place="papercall" href="https://www.papercall.io/gocon-jp-2019-fukuoka">PaperCall.io</a>
    </i18n>

    <h3>{{ $t('types') }}</h3>
    <p>{{ $t('types_desc') }}</p>
    <ul class="colored">
      <li>{{ $t('talktype_1') }}</li>
      <li>{{ $t('talktype_2') }}</li>
      <li><del>{{ $t('talktype_3') }}</del> {{ $t('talktype_3_note') }}</li>
    </ul>

    <h3>{{ $t('criteria') }}</h3>
    <p>{{ $t('criteria_desc') }}</p>
    <ol class="colored">
      <li>{{ $t('criteria_1') }}</li>
      <li>{{ $t('criteria_2') }}</li>
      <li>{{ $t('criteria_3') }}</li>
      <li>{{ $t('criteria_4') }}</li>
      <li>{{ $t('criteria_5') }}</li>
    </ol>
    <i18n path="criteria_note" tag="p">
      <a place="gophercon" href="https://www.papercall.io/gophercon-2019">GopherCon</a>
    </i18n>
  </div>
</template>

<style scoped>
</style>
