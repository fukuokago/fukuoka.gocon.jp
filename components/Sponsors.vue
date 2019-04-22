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
        DeNA (pronounced “D-N-A”) develops and operates a broad range of services including games, automotive, healthcare, sports and other diversified offerings.
        Founded in 1999, DeNA’s aim is to delight and impact the world through the use of the internet and AI.
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
        1999年に創業した株式会社ディー・エヌ・エーはゲーム事業を中心に、オートモーティブ事業やヘルスケア事業、
        スポーツ事業などにも進出し、インターネットや人工知能（AI）を活用した新しい挑戦を続けています。
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
  <div class="sponsors is-clearfix" v-bind:class="{ simple: isSimple }">
    <h2>Sponsors</h2>
    <p>{{ $t('description') }}</p>
    <p class="goto-becomeasponsor"><a class="button large is-inverted is-outlined" href="https://docs.google.com/forms/d/17v0fB3UxTLpf6G_th-TMyJTSOBMgVBlPogNk0iubxnQ/">💪 {{ $t('cfs_button') }}</a></p>

    <div v-for="(s) in $t('sponsors')">
      <div v-if="s.desc != ''" :class="['sponsor', s.slug]">
          <p class="sponsor-logo"><a :href="s.url"><img :src="'/sponsors/' + s.slug + '.' + s.ext" /></a></p>
        <p v-if="!isSimple" class="sponsor-name"><a :href="s.url">{{ s.name }}</a>
          <span class="external" place="external"><i class="fas fa-external-link-alt"></i></span></p>
        <p v-if="!isSimple" class="sponsor-desc">{{ s.desc }}</p>
      </div>
    </div>

    <p class="note">{{ $t('note') }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Sponsors extends Vue {
  @Prop({ default: false }) public isSimple!: boolean
}
</script>

<style>
.sponsor {
  width: 280px;
  height: 480px;
  float: left;
  margin: 0 3em 3em 0;
  padding: 0;
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
  padding: 2em .6em 1em 0;
  letter-spacing: .3em;
}
.goto-becomeasponsor {
  text-align: center;
  margin-bottom: 2em;
}

.sponsor.circulation img {
  width: 86%;
  margin: 8% 7% 0;
}
.sponsor.dena img {
  margin: 12% 0 0;
}

.simple .sponsor {
  height: auto;
}

@media (min-width: 501px) and (max-width: 800px) {
  .sponsor {
    width: 46%;
    margin: 0 4% 0 0;
    overflow: visible;
  }
  .sponsor-logo {
    width: 240px;
    height: 240px;
    overflow: visible;
  }
  .sponsor-name,
  .sponsor-desc {
    display: block;
  }
}
@media (max-width: 500px) {
  .sponsor {
    width: 100%;
    padding: 0 0 1em;
    overflow: visible;
    float: none;
  }
  .sponsor-logo {
    width: 100%;
    height: auto;
    overflow: visible;
  }
  .sponsor-name,
  .sponsor-desc {
    display: block;
  }
  .simple .sponsor {
    width: 170px;
    height: 170px;
    margin: 0 0 1em;
    float: left;
  }
  .simple .sponsor-logo {
    width: 170px;
    height: 170px;
  }
}
</style>
