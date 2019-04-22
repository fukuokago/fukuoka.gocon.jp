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
      slug: pepabo
      ext: svg
    - name: Circulation, Inc.
      desc: |-
        Circulation has Japan's largest "professional human resource sharing service".
        With the vision of "Creation a society in which experiences and knowledge around the world circulate".
        We have an in-house engineer organization and work on new web service development.
      url: https://circu.co.jp/
      slug: circulation
      ext: png
    - name: teamLab Inc.
      desc: |-
      url: https://www.team-lab.com/
      slug: teamlab
      ext: svg
    - name: DeNA Co., Ltd.
      desc: |-
      url: https://dena.com/jp/recruit/career/engineer/
      slug: dena
      ext: svg
    - name: Fusic Co.,Ltd.
      desc: |-
        Fusic Co., Ltd., based in Fukuoka, expands businesses focusing on technology consulting and Web system development.
        We are committed to 100% in-house development and contribute to the growth of our customers' businesses with unique ideas and suggestions.
      url: https://fusic.co.jp
      slug: fusic
      ext: svg
    - name: Nulab Inc.
      desc: |-
      url: https://nulab.com/about/
      slug: nulab
      ext: svg
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
      slug: pepabo
      ext: svg
    - name: 株式会社サーキュレーション
      desc: |-
        サーキュレーションは「世界中の経験・知見が循環する社会の創造」をビジョンに掲げる、
        日本最大規模のプロシェアリングサービス（プロ人材の高い専門性を複数企業でシェア）を展開する企業です。
        社内にエンジニア組織を持ち、新規のWebサービス開発に取り組んでいます。
      url: https://circu.co.jp/
      slug: circulation
      ext: png
    - name: チームラボ株式会社
      desc: |-
      url: https://www.team-lab.com/
      slug: teamlab
      ext: svg
    - name: 株式会社ディー・エヌ・エー
      desc: |-
      url: https://dena.com/jp/recruit/career/engineer/
      slug: dena
      ext: svg
    - name: 株式会社Fusic
      desc: |-
        株式会社Fusicは福岡を拠点に、テクノロジーコンサルティングやWebシステムの開発を中心に事業を展開しています。
        100%自社開発にこだわり、他にはない自由な発想・提案で、お客様の事業の成長に貢献しています。
      url: https://fusic.co.jp
      slug: fusic
      ext: svg
    - name: 株式会社ヌーラボ
      desc: |-
      url: https://nulab.com/ja/about/
      slug: nulab
      ext: svg
</i18n>

<template>
  <div class="sponsors is-clearfix">
    <h2>Sponsors</h2>
    <p>{{ $t('description') }}</p>
    <p><a class="button is-inverted is-outlined" href="https://docs.google.com/forms/d/17v0fB3UxTLpf6G_th-TMyJTSOBMgVBlPogNk0iubxnQ/">{{ $t('cfs_button') }}</a></p>

    <div v-for="(s) in $t('sponsors')">
      <div v-if="s.desc != ''" :class="['sponsor', s.slug]">
          <p class="sponsor-logo"><a :href="s.url"><img :src="'/sponsors/' + s.slug + '.' + s.ext" /></a></p>
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
  height: 480px;
  float: left;
  margin: 0 3em 3em 0;
  overflow: hidden;
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

.sponsor.circulation img {
  width: 86%;
  margin: 16% 7% 0;
}

@media (min-width: 501px) and (max-width: 800px) {
  .sponsor {
    width: 240px;
    height: 240px;
    padding: 0 1em 1em 0;
  }
  .sponsor-logo {
    width: 240px;
    height: 240px;
  }
  .sponsor-name,
  .sponsor-desc {
    display: none;
  }
}
@media (max-width: 500px) {
  .sponsor {
    width: 170px;
    height: 170px;
    margin: 0 0 1em;
  }
  .sponsor-logo {
    width: 170px;
    height: 170px;
  }
  .sponsor-name,
  .sponsor-desc {
    display: none;
  }
}
</style>
