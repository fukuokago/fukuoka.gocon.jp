<i18n>
en:
  description: |-
    Now call for sponsors is open.
    We also welcome suggestions that are not in the sponsored menu.
  cfs_button: Become a Sponsor
  note: Order by order
  sponsors:
    - name: GMO Pepabo, inc.
      desc: |-
        GMO Pepabo, Inc., based in Tokyo, Fukuoka and Kagoshima, will be Japan's largest handmade market "minne",
        server hosting "Lollipop!", Online shop service "Color Me Shop" and
        blog service "JUGEM" Is a technology company that provides a variety of personalized Internet services.
      url: https://pepabo.com/en/
      logo: pepabo.svg
    - name: Circulation, Inc.
      desc: |-
      url: https://circu.co.jp/
      logo: circulation.svg
    - name: teamLab Inc.
      desc: |-
      url: https://www.team-lab.com/
      logo: teamlab.svg
    - name: DeNA Co., Ltd.
      desc: |-
      url: https://dena.com/jp/recruit/career/engineer/
      logo: dena.svg
    - name: Fusic Co.,Ltd.
      desc: |-
        株式会社Fusicは福岡を拠点に、テクノロジーコンサルティングやWebシステムの開発を中心に事業を展開しています。
        100%自社開発にこだわり、他にはない自由な発想・提案で、お客様の事業の成長に貢献しています。
      url: https://fusic.co.jp
      logo: fusic.svg
    - name: Nulab Inc.
      desc: |-
      url: https://nulab.com/en/about/
      logo: nulab.svg
ja:
  description: |-
    現在、スポンサーを募集しています。
    スポンサーメニューにないご提案も歓迎いたします。
  cfs_button: スポンサーになる
  note: お申込み順で掲載しています
  sponsors:
    - name: GMOペパボ株式会社
      desc: |-
        GMOペパボ株式会社は、東京と福岡と鹿児島を拠点に、日本最大級のハンドメイドマーケット「minne」やレンタルサーバー「ロリポップ！」、
        ネットショップ開業・作成サービス「カラーミーショップ」、ブログサービス「JUGEM」をメインとした
        様々な個人向けインターネットサービスを提供するテクノロジー企業です。
      url: https://recruit.pepabo.com/
      logo: pepabo.svg
    - name: 株式会社サーキュレーション
      desc: |-
      url: https://circu.co.jp/
      logo: circulation.svg
    - name: チームラボ株式会社
      desc: |-
      url: https://www.team-lab.com/
      logo: teamlab.svg
    - name: 株式会社ディー・エヌ・エー
      desc: |-
      url: https://dena.com/jp/recruit/career/engineer/
      logo: dena.svg
    - name: 株式会社Fusic
      desc: |-
        株式会社Fusicは福岡を拠点に、テクノロジーコンサルティングやWebシステムの開発を中心に事業を展開しています。
        100%自社開発にこだわり、他にはない自由な発想・提案で、お客様の事業の成長に貢献しています。
      url: https://fusic.co.jp
      logo: fusic.svg
    - name: 株式会社ヌーラボ
      desc: |-
      url: https://nulab.com/ja/about/
      logo: nulab.svg
</i18n>

<template>
  <div class="sponsors is-clearfix">
    <h2>Sponsors</h2>
    <p>{{ $t('description') }}</p>
    <p><a class="button is-inverted is-outlined" href="https://docs.google.com/forms/d/17v0fB3UxTLpf6G_th-TMyJTSOBMgVBlPogNk0iubxnQ/">{{ $t('cfs_button') }}</a></p>

    <div v-for="(s) in $t('sponsors')">
      <div v-if="s.desc != ''" class="sponsor">
        <p class="sponsor-logo"><a :href="s.url"><img :src="'/sponsors/' + s.logo" /></a></p>
        <p class="sponsor-name"><a :href="s.url">{{ s.name }}</a>
          <span class="external" place="external"><i class="fas fa-external-link-alt"></i></span></p>
        <p class="sponsor-desc">{{ s.desc }}</p>
      </div>
    </div>

    <p class="note">{{ $t('note') }}</p>
  </div>
</template>

<style scoped>
.sponsor {
  width: 280px;
  float: left;
  margin: 0 3em 3em 0;
}
.sponsor-logo {
  width: 280px;
  height: 280px;
  overflow: hidden;
}
.sponsor-logo a {
  text-decoration: none;
  border: none;
}
.sponsor-name {
  font-size: 1em;
}
.sponsor-name a {
  font-weight: bold;
}
.sponsor-desc {
  font-size: .85em;
}
.note {
  clear: both;
  font-size: .7em;
  text-align: center;
  padding-top: 2em;
  letter-spacing: .3em;
}
@media (min-width: 501px) and (max-width: 800px) {
  .sponsor {
    width: 240px;
    padding: 0 1em 1em 0;
  }
  .sponsor-logo {
    width: 240px;
    height: 240px;
    overflow: hidden;
  }
  .sponsor-name,
  .sponsor-desc {
    display: none;
  }
}
@media (max-width: 500px) {
  .sponsor {
    width: 170px;
    margin: 0 0 1em;
  }
  .sponsor-logo {
    width: 170px;
    height: 170px;
    overflow: hidden;
  }
  .sponsor-name,
  .sponsor-desc {
    display: none;
  }
}
</style>
