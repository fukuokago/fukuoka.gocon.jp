<template>
  <section class="fukuoka">
    <h2>About Fukuoka</h2>

    <picture>
      <figure class="fukuoka-city">
        <img class="eyecatch" src="~static/fukuoka.jpg" alt="fukuoka" />
        <figcaption>Photo by <a rel="http://showcase.city.fukuoka.lg.jp/photo/img0683.html">Fukuoka City</a></figcaption>
      </figure>
    </picture>

    <p><a href="http://www.city.fukuoka.lg.jp/shisei/profile">福岡市</a>は、九州最大の都市でありながら中心部と空港の距離が近く、都市全体もコンパクトに収まっていています。
    また、気候は温暖であることから、アジアで最も住みやすい都市のひとつと言われています。
    福岡市は、<a ref="http://hakatanomiryoku.com/mamecategory/food">食文化</a>も発達していて、豚骨ラーメンやもつ鍋を筆頭に、水炊き、やきとり、餃子、明太子、などの福岡名物の食べ物が数多く存在します。
    最近では、福岡市の進める「<a href="https://efc.isit.or.jp/">エンジニアフレンドリーシティ</a>」によって、福岡市におけるIT分野の活性化が顕著です。</p>

    <ul>
      <li><a href="https://www.trivago.jp/?aDateRange%5Barr%5D=2019-02-22&aDateRange%5Bdep%5D=2019-02-23&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iPathId=90333&aGeoCode%5Blat%5D=33.590355&aGeoCode%5Blng%5D=130.401718&iGeoDistanceItem=0&aCategoryRange=0%2C1%2C2%2C3%2C4%2C5&aOverallLiking=1%2C2%2C3%2C4%2C5&sOrderBy=relevance%20desc&bTopDealsOnly=false&iRoomType=7&cpt=9033303&iIncludeAll=0&iViewType=0&bIsSeoPage=false&bIsSitemap=false&">福岡市のホテルを探す</a></li>
      <li><a href="https://yokanavi.com/">福岡市のガイド</a></li>
    </ul>
  </section>
</template>

<style scoped>
.fukuoka-city {
  position: relative;
}
.fukuoka-city figcaption {
  position: absolute;
  top: 7px;
  right: -4%;
  color: #fff;
  font-size: .7em;
  font-weight: bold;
}
.fukuoka-city a {
  color: #fff;
  border-bottom: 1px solid #fff;
}
img.eyecatch {
  min-width: 110%;
  height: auto;
  margin-left: -5%;
  overflow: visible;
  padding-bottom: 2em;
}
</style>
