<i18n>
en:
  desc: |-
    最近のGo Conferenceではスカラーシップが行われており、福岡で開催されるGo Conference'19 Summerにおいてもスポンサー様の協力のもとスカラーシップを行います。
    学生向けにはなりますが、スカラーシップによって本イベントに参加するハードルを下げ、技術的なインプットを通して様々な体験をしていただきたいと考えております。
  entry: Entry for Scholarships
  i3systems: i3systems
  support:
    title: Support
    body:
      - Go Conference19 Summer in Fukuokaへの参加
      - 交通費・宿泊費（金額に上限あり）
      - スカラーシップスポンサーである{i3}のオフィス見学（前日）
  date:
    title: Date
    body: July 12th - July 13th, 2019
  conditions:
    title: Entry Conditions
    body:
      - 日本国内に在住の方
      - 福岡県または近隣以外にお住まいの方（参加にあたって飛行機や新幹線を使う必要のある方）
      - 2019年7月13日時点で学生の方で博士、修士、学部、学年は不問（高専生、高校生歓迎）
      - 参加に対して自分なりのアウトプットをしていただける方（参加ブログ、Twitter実況、GitHubへコードPushなど）
  method:
    title: 応募方法と締切
    body: 応募にはフォームから「2019年6月23日」までにお申込み下さい。
  result:
    title: 当選発表
    body: 6月28日迄にメールで結果にかかわらずご連絡いたします。
  disclaimer:
    title: 注意事項および免責事項
    body:
      - 未成年者の応募には保護者の同意が必要です
      - 参加にあたって授業などを欠席する場合は所属する学校の許可を得て下さい
      - 期間中に発生しましたいかなる事故などによる損害につきましては責任を負いかねます
      - カンファレンス当日に学生であることを確認するために学生証などを提示をお願いする場合があります
ja:
  desc: |-
    最近のGo Conferenceではスカラーシップが行われており、福岡で開催されるGo Conference'19 Summerにおいてもスポンサー様の協力のもとスカラーシップを行います。
    学生向けにはなりますが、スカラーシップによって本イベントに参加するハードルを下げ、技術的なインプットを通して様々な体験をしていただきたいと考えております。
  entry: スカラーシップに申込む
  i3systems: アイキューブドシステムズ様
  support:
    title: サポート内容
    body:
      - Go Conference '19 Summer in Fukuoka への参加
      - 交通費・宿泊費（金額に上限あり）
      - スカラーシップスポンサーである{i3}のオフィス見学（前日）
  date:
    title: 日程
    body: 2019年7月12日(金)〜2019年7月13日(土)
  conditions:
    title: 応募資格
    body:
      - 日本国内に在住の方
      - 福岡県または近隣以外にお住まいの方（参加にあたって飛行機や新幹線を使う必要のある方）
      - 2019年7月13日時点で学生の方で博士、修士、学部、学年は不問（高専生、高校生歓迎）
      - 参加に対して自分なりのアウトプットをしていただける方（参加ブログ、Twitter実況、GitHubへコードPushなど）
  method:
    title: 応募方法と締切
    body: 応募にはフォームから「2019年6月23日」までにお申込み下さい。
  result:
    title: 当選発表
    body: 6月28日迄にメールで結果にかかわらずご連絡いたします。
  disclaimer:
    title: 注意事項および免責事項
    body:
      - 未成年者の応募には保護者の同意が必要です
      - 参加にあたって授業などを欠席する場合は所属する学校の許可を得て下さい
      - 期間中に発生しましたいかなる事故などによる損害につきましては責任を負いかねます
      - カンファレンス当日に学生であることを確認するために学生証などを提示をお願いする場合があります
</i18n>

<template>
  <div class="scholarships is-clearfix">
    <h2>Scholarships</h2>
    <p>{{ $t('desc') }}</p>

    <p class="goto-form">
      <a class="button large is-inverted is-outlined" href="https://docs.google.com/forms/d/1EQognjiUtOYEfifYMtuIlVpz4M98Gp8oqTrLU0OunoU/">
        {{ $t('entry') }}
        <span class="external" place="external"><i class="fas fa-external-link-alt"></i></span>
      </a>
    </p>

    <h3>{{ $t('support.title') }}</h3>
    <ul class="colored">
      <li>{{ $t('support.body.0') }}</li>
      <li>{{ $t('support.body.1') }}</li>
      <i18n path="support.body.2" tag="li">
        <a place="i3" href="https://www.i3-systems.com/">{{ $t('i3systems') }}</a>
      </i18n>
    </ul>

    <h3>{{ $t('date.title') }}</h3>
    <p>{{ $t('date.body') }}</p>

    <h3>{{ $t('conditions.title') }}</h3>
    <ul class="colored">
      <li v-for="text in $t('conditions.body')">{{ text }}</li>
    </ul>

    <h3>{{ $t('method.title') }}</h3>
    <p>{{ $t('method.body') }}</p>

    <h3>{{ $t('result.title') }}</h3>
    <p>{{ $t('result.body') }}</p>

    <h3>{{ $t('disclaimer.title') }}</h3>
    <ul class="colored">
      <li v-for="text in $t('disclaimer.body')">{{ text }}</li>
    </ul>

    <p class="goto-form">
      <a class="button large is-inverted is-outlined" href="https://docs.google.com/forms/d/1EQognjiUtOYEfifYMtuIlVpz4M98Gp8oqTrLU0OunoU/">
        {{ $t('entry') }}
        <span class="external" place="external"><i class="fas fa-external-link-alt"></i></span>
      </a>
    </p>
  </div>
</template>

<style scoped>
.goto-form {
  text-align: center;
}
</style>
