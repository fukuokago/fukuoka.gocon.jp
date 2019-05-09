<i18n>
en:
  desc: |-
    Call for paper {notopen}was closed(May 1th, 0:00). We are using {papercall}{external} for paper calling.
    The reason for using PaperCall.io has pros that form content is superior, anonymous submission and reviewer feedback is easy.
    To use PaperCall.io you need to create an account.
  opentoclosed: is open
  goto_papercall: Apply to Talker(Go to PaperCall.io)
  types:
    title: Talk Types
    desc: There are 3 talk types. Please select the one that suits your presentation. Presentation will proceed on 2 tracks.
    list:
      - "Keynote style presentations; 20 minute time limit, questions at the presenter's discretion."
      - "Tutorial style presentations; 40 minute time limit, questions at the presenter's discretion."
      - Lightning talk style presentations; 5 minute time limit
    note: LT will be recruited separately
  criteria:
    title: Selection Criteria
    desc: Proposals will be reviewed based on the selection criteria below.
    list:
      - Relevance. The talk is relevant to the Go community. GoCon is not a general software conference, our audience wants to hear about topics that relate to the Go programming language.
      - Clarity. You’ve clearly explained what you are going to talk about.
      - Correctness. You’ve demonstrated knowledge of your topic. You don’t have to be an expert, but you are expected to be speaking from experience.
      - Achievability. You’ve thought about how to present your material in the time available.
      - Impact. The goal of the talk. What new idea, technique, tool, or information will the audience leave your presentation with?
    note: "Note: This clear selection criterion is based on {gophercon}{external} 's one. Thank you."
  supplement:
    title: Supplement
    list:
      - Do not write about how great the Go anymore.
      - Session for beginners is welcome.
      - Please don't criticize other languages or give excessive product descriptions, instead please talk technical.
  feedback:
    title: Feedback from reviewers
    body: |-
      You can fix your submission until the deadline after submitting.
      We recommend submitting early to receive early feedback from reviewers.
ja:
  desc: |-
    登壇者の募集を{notopen} 終了しました(5月1日9時)。応募には、{papercall}{external} を利用します。
    （PaperCall.ioは、予め用意されたされた入力フォーム内容が優れており、匿名応募機能やレビュアーからのフィードバックをしやすいというメリットがあります）
    PaperCall.ioを初めて利用される方にはお手数ですが、アカウント作成からお願いいたします。
    もちろん、日本語で投稿して大丈夫です。
  opentoclosed: 開始しています
  goto_papercall: 応募する(PaperCall.ioへ)
  types:
    title: 発表種別
    desc: 種別は3つありますので、プレゼンテーションにあったものを選択してください。なお、発表は2トラックで進行されます。
    list:
      - 'テーマに基づくキーノートスタイルのプレゼンテーション（時間制限: 20分、質疑応答含む）'
      - '集中講義スタイルのプレゼンテーション（時間制限: 40分、質疑応答含む）'
      - 'いわゆるLTタイプ（時間制限: 5分）'
    note: LTは別途募集予定
  criteria:
    title: 選択基準
    desc: 登壇発表の応募は以下の選択基準に基づきレビューされます。
    list:
      - 関連性：Go言語に関連するトピックである（Go Conferenceは一般的なソフトウェアのカンファレンスではありません）
      - 明快さ：発表内容を明確に説明している
      - 正しさ：トピックに関する知見を持つこと証明している（専門家である必要はありませんが経験から話すことが期待されています）
      - 達成可能性：発表材料を有効時間内にどのように提示するか考えている
      - 影響力：プレゼンテーションのゴール（聴衆はプレゼンテーションを経てどんな新しいアイデア、テクニック、ツール、情報を持ちますか）
    note: この明確な選択基準は {gophercon}{external} のものを参考にさせていただきました。ありがとうございます。
  supplement:
    title: 補足
    list:
      - もうGoの良さを説明する必要はありません
      - ビギナー向けの内容はWelcomeです
      - 他の言語批判や過度の製品説明はしないでください、テクニカルな内容をお願いします
  feedback:
    title: レビュアーからのフィードバック
    body: |-
      投稿後も締め切りまで修正が可能です。
      レビュアーからのフィードバックを受けるため早めの投稿をオススメします。
</i18n>

<template>
  <div class="call-for-papers">
    <h2>Call for Papers</h2>
    <i18n path="desc" tag="p">
      <s place="notopen">{{ $t('opentoclosed') }}</s>
      <a place="papercall" href="https://www.papercall.io/">PaperCall.io</a>
      <span class="external" place="external"><i class="fas fa-external-link-alt"></i></span>
    </i18n>

    <p class="goto-papercall">
      <a class="button large is-inverted is-outlined" href="https://www.papercall.io/gocon-jp-2019-fukuoka">
        {{ $t('goto_papercall') }}
        <span class="external" place="external"><i class="fas fa-external-link-alt"></i></span>
      </a>
    </p>

    <h3>{{ $t('types.title') }}</h3>
    <p>{{ $t('types.desc') }}</p>
    <ul class="colored">
      <li>{{ $t('types.list.0') }}</li>
      <li>{{ $t('types.list.1') }}</li>
      <li><del>{{ $t('types.list.2') }}</del> {{ $t('types.note') }}</li>
    </ul>

    <h3>{{ $t('criteria.title') }}</h3>
    <p>{{ $t('criteria.desc') }}</p>
    <ol class="colored">
      <li v-for="val in $t('criteria.list')">{{ val }}</li>
    </ol>
    <i18n path="criteria.note" tag="p">
      <a place="gophercon" href="https://www.papercall.io/gophercon-2019">GopherCon</a>
      <span class="external" place="external"><i class="fas fa-external-link-alt"></i></span>
    </i18n>

    <h3>{{ $t('feedback.title') }}</h3>
    <p>{{ $t('feedback.body') }}</p>

    <h3>{{ $t('supplement.title') }}</h3>
    <ul class="colored">
      <li v-for="val in $t('supplement.list')">{{ val }}</li>
    </ul>

    <p class="goto-papercall">
      <a class="button large is-inverted is-outlined" href="https://www.papercall.io/gocon-jp-2019-fukuoka">
        {{ $t('goto_papercall') }}
        <span class="external" place="external"><i class="fas fa-external-link-alt"></i></span>
      </a>
    </p>
  </div>
</template>

<style scoped>
.goto-papercall {
  text-align: center;
}
</style>
