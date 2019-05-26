<i18n>
en:
  support:
    title: Support
    body:
      - Go Conference19 Summer in Fukuokaへの参加
      - 交通費・宿泊費（金額に上限あり）
      - スカラーシップスポンサーであるアイキューブドシステムズ様（https://www.i3-systems.com/）のオフィス見学（前日）
  date:
    title: Date
    body: 2019年7月12日(金)〜2019年7月13日(土)
ja:
  support:
    title: サポート内容
    body:
      - Go Conference19 Summer in Fukuokaへの参加
      - 交通費・宿泊費（金額に上限あり）
      - スカラーシップスポンサーであるアイキューブドシステムズ様（https://www.i3-systems.com/）のオフィス見学（前日）
  date:
    title: 日程
    body: 2019年7月12日(金)〜2019年7月13日(土)
</i18n>

<template>
  <div class="scholarships">
    <h2>Scholarships</h2>

    <h3>{{ $t('support.title') }}</h3>
    <ul class="colored">
      <li v-for="text in $t('support.body')">{{ text }}</li>
    </ul>

    <h3>{{ $t('date.title') }}</h3>
    <p>{{ $t('date.body') }}</p>

    <h3>応募資格</h3>
        - 日本国内に在住の方
        - 福岡県または近隣以外にお住まいの方（参加にあたって飛行機や新幹線を使う必要のある方）
        - 2019年7月13日時点で学生の方で博士、修士、学部、学年は不問（高専生、高校生歓迎）
        - 参加に対して自分なりのアウトプットをしていただける方（参加ブログ、Twitter実況、GitHubへコードPushなど）

    <h3>応募方法と締切</h3>
    応募には以下のフォームから「2019年6月23日」までにお申込み下さい。
    https://docs.google.com/forms/d/e/1FAIpQLSdNNuCpWDeJ65ltyGqUBnBbcHCUqWqGUrUeu2TUKrL888p1ow/viewform

    <h3>当選発表</h3>
    6月28日迄にメールで結果にかかわらずご連絡いたします。

    <h3>注意事項および免責事項</h3>
        - 未成年者の応募には保護者の同意が必要です
        - 参加にあたって授業などを欠席する場合は所属する学校の許可を得て下さい
        - 期間中に発生しましたいかなる事故などによる損害につきましては責任を負いかねます
        - カンファレンス当日に学生であることを確認するために学生証などを提示をお願いする場合があります
  </div>
</template>

<style scoped>
</style>
