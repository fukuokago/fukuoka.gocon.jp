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

    <div id="brand--logo" class="assets logo is-clearfix">
      <h3>Logo</h3>

      <div class="inner">
        <picture class="eyecatch">
          <source type="image/webp" srcset="~static/img/logo.webp">
          <img src="~assets/img/logo.png" >
        </picture>
        <p>Included format: ai, eps, pdf and svg</p>
        <p><a class="button" href="/download/logo.tar.gz">Download Logo Assets</a></p>
      </div>
    </div>

    <div id="brand--icon" class="assets logo is-clearfix">
      <h3>Icon</h3>

      <div class="inner">
        <picture class="eyecatch">
          <source type="image/webp" srcset="~static/img/icon.webp">
          <img src="~assets/img/icon.png" >
        </picture>
        <p>Included format: ai, eps, pdf and svg</p>
        <p><a class="button" href="/download/icon.tar.gz">Download Icon Assets</a></p>
      </div>
    </div>
    </div>

    <div class="brand--slide is-clearfix">
      <h3>Slide</h3>

      <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vT_QLQzWq58AOI2TyW59NM0kXelHOThBLLtOnrxor1tDMA21UddPfxTHMk2gAeiYQfuvr2xtv9umHXm/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

      <div class="brand--slide--inner">
        <h3>Google Slide</h3>
        <p>Look at the preview right there</p>
        <p><a class="button" href="https://docs.google.com/presentation/d/1qQ51kVEvvE_s8Ntj-s93B8sYIF3smRhfFUFkJ0nKv0k/copy">Copy Slide</a></p>
        <h3>Mac Keynote</h3>
        <p>Included font: Arvo by <a href="http://files.korkork.com/">Anton Koovit</a></p>
        <p><a class="button" href="/download/keynote.tar.gz">Download Theme</a></p>
      </div>
    </div>

    <div id="brand--wallpaper" class="assets wallpaper is-clearfix">
      <h3>Wallpaper</h3>

      <div class="inner">
        <picture class="eyecatch">
          <source type="image/webp" srcset="~static/img/gopher-noodle.webp">
          <img src="~assets/img/gopher-noodle.png" >
        </picture>
        <p>Gopher Noodle</p>
        <ul>
          <li><nuxt-link class="button" :to="localePath({name: 'assets-slug', params: { slug: 'gopher-noodle-for-phone' }})">For Phone</nuxt-link></li>
          <li><nuxt-link class="button" :to="localePath({name: 'assets-slug', params: { slug: 'gopher-noodle-for-laptop' }})">For Laptop</nuxt-link></li>
        </ul>
      </div>

      <div class="inner">
        <picture class="eyecatch">
          <source type="image/webp" srcset="~static/img/freehand-gopher-noodle.webp">
          <img src="~assets/img/freehand-gopher-noodle.png" >
        </picture>
        <p>Gopher Noodle(freehand)</p>
        <ul>
          <li><nuxt-link class="button" :to="localePath({name: 'assets-slug', params: { slug: 'freehand-gopher-noodle-for-phone' }})">For Phone</nuxt-link></li>
          <li><nuxt-link class="button" :to="localePath({name: 'assets-slug', params: { slug: 'freehand-gopher-noodle-for-laptop' }})">For Laptop</nuxt-link></li>
        </ul>
      </div>

      <div class="inner">
        <picture class="eyecatch">
          <source type="image/webp" srcset="~static/img/gopher-pattern.webp">
          <img src="~assets/img/gopher-pattern.png" >
        </picture>
        <p>Gopher Pattern</p>
        <ul>
          <li><nuxt-link class="button" :to="localePath({name: 'assets-slug', params: { slug: 'gopher-pattern-for-phone' }})">For Phone</nuxt-link></li>
          <li><nuxt-link class="button" :to="localePath({name: 'assets-slug', params: { slug: 'gopher-pattern-for-laptop' }})">For Laptop</nuxt-link></li>
        </ul>
      </div>

      <div class="inner">
        <picture class="eyecatch">
          <source type="image/webp" srcset="~static/img/gopher-sunglass.webp">
          <img src="~assets/img/gopher-sunglass.png" >
        </picture>
        <p>Gopher Sunglass</p>
        <ul>
          <li><nuxt-link class="button" :to="localePath({name: 'assets-slug', params: { slug: 'gopher-sunglass-for-phone' }})">For Phone</nuxt-link></li>
          <li><nuxt-link class="button" :to="localePath({name: 'assets-slug', params: { slug: 'gopher-sunglass-for-laptop' }})">For Laptop</nuxt-link></li>
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
  height: 220px;
  overflow: hidden;
  float: left;
  padding: 1.5em 1em 0 0;
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
.brand--slide {
  padding: 1em 0 2em;
}
.brand--slide iframe {
  border: 3px solid #fff;
  width: 742px;
  height: 450px;
  float: left;
  margin-top: 1em;
}
.brand--slide--inner {
  float: left;
  padding: 0 0 0 2em;
}
.punch-viewer-container {
  height: 700px;
}
@media (max-width: 400px) {
  .inner,
  .logo .inner {
    width: 100%;
    height: auto;
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
  .brand--slide iframe {
    width: 100%;
    height: 220px;
    float: none;
  }
  .brand--slide--inner {
    float: none;
    padding: 0;
  }
  .punch-viewer-container {
    height: auto;
  }
}
</style>
