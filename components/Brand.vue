<i18n>
en:
  desc: |-
    These are the assets we use for the brand of "Go Conference'19 Summer in Fukuoka".
    Please download and use it.
    Guidelines for assets using is nothing. So use freely.
  note: |-
    The Go gopher was created by renowned illustrator {renee} {external}.
    Gophers on Go Conference'19 Summer in Fukuoka was written {kawamoto} {external}.
ja:
  desc: |-
    これらは、"Go Conference'19 Summer in Fukuoka" を識別するために使っている統一ビジュアルです。
    ダウンロードしてご利用ください。
    なお、利用のためのガイドラインは設けいていないので自由に使って大丈夫です。
  note: |-
    Go Gopherは有名なイラストレーター {renee} {external} によって作成されました。
    Go Conference'19 Summer in Fukuoka のGopherは {kawamoto} {external} によるものです。
</i18n>

<template>
  <section class="brand">
    <h2>Brand</h2>
    <p>{{ $t('desc') }}</p>

    <i18n path="note" tag="p">
      <a place="renee" href="http://reneefrench.blogspot.com/">Renee French</a>
      <a place="kawamoto" href="https://blog.orangebomb.org/">Keita Kawamoto</a>
      <span class="external" place="external"><i class="fas fa-external-link-alt"></i></span>
    </i18n>

    <div class="assets logo is-clearfix">
      <h3>Logo</h3>

      <div class="inner">
        <picture class="eyecatch">
          <source type="image/webp" srcset="~static/img/logo.webp">
          <img src="~assets/img/logo.png" >
        </picture>
        <p>Included format: ai, eps, pdf and svg</p>
        <p><a class="button" href="/assets/logo.tar.gz">Download Logo Assets</a></p>
      </div>
    </div>

    <div class="assets wallpaper is-clearfix">
      <h3>Wallpaper</h3>

      <div class="inner">
        <picture class="eyecatch">
          <source type="image/webp" srcset="~static/img/gopher-noodle.webp">
          <img src="~assets/img/gopher-noodle.png" >
        </picture>
        <p>Gopher Noodle</p>
        <ul>
          <li><nuxt-link class="button" :to="localePath({name: 'assets-slug', params: { slug: 'gopher-noodle-phone' }})">For Phone</nuxt-link></li>
          <li><nuxt-link class="button" :to="localePath({name: 'assets-slug', params: { slug: 'gopher-noodle-laptop' }})">For Laptop</nuxt-link></li>
        </ul>
      </div>

      <div class="inner">
        <picture class="eyecatch">
          <source type="image/webp" srcset="~static/img/gophers-pattern.webp">
          <img src="~assets/img/gophers-pattern.png" >
        </picture>
        <p>Gophers Pattern</p>
        <ul>
          <li><nuxt-link class="button" :to="localePath({name: 'assets-slug', params: { slug: 'gophers-pattern-phone' }})">For Phone</nuxt-link></li>
          <li><nuxt-link class="button" :to="localePath({name: 'assets-slug', params: { slug: 'gophers-pattern-laptop' }})">For Laptop</nuxt-link></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.assets {
  padding-bottom: 2em;
}

.inner {
  width: 400px;
  float: left;
  padding: 2em 1em 0 0;
}
.eyecatch {
  width: 200px;
  float: left;
  padding: 0 2em 0 0;
}
.eyecatch img {
  width: 194px;
  border: 3px solid #fff;
}
.logo .inner {
  width: auto;
  float: none;
  padding: 2em 1em 0 0;
}
.logo .eyecatch {
  width: 400px;
}
.logo .eyecatch img {
  width: 394px;
}
.inner ul {
  list-style-type: none;
}
.inner li {
  margin-bottom: .5em;
}
@media (max-width: 400px) {
  .inner,
  .logo .inner {
    width: 100%;
    float: none;
    padding-right: 0;
  }
  .logo .eyecatch {
    width: 100%;
    padding-right: 0;
  }
  .logo .eyecatch img {
    width: 100%;
  }
}
</style>
