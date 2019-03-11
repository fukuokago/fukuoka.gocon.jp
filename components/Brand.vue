<i18n>
en:
  desc: |-
    These are the assets we use for the brand of "Go Conference'19 Summer in Fukuoka".
    Please download and use it.
ja:
  desc: |-
    これらは、Go Conference'19 Summer in Fukuokaを識別するために使っている統一ビジュアルです。
    ダウンロードしてご利用ください。
</i18n>

<template>
  <section class="brand">
    <h2>Brand</h2>
    <p>{{ $t('desc') }}</p>

    <div class="logo">
      <h3>Logo</h3>
      <p><a class="button" href="/logo/go-conference-19-summer-in-fukuoka.tar.gz">Download Logo Assets</a></p>
    </div>

    <div class="is-clearfix">
      <h3>Wallpaper</h3>

      <div class="wallpaper">
        <picture class="eyecatch">
          <source type="image/webp" srcset="~static/img/gopher-noodle.webp">
          <img src="~assets/img/gopher-noodle.png" >
        </picture>
        <p>Gopher Noodle</p>
        <ul>
          <li><a class="button" href="/wallpaper/gopher-noodle-phone.png">For Phone</a></li>
          <li><a class="button" href="/wallpaper/gopher-noodle-laptop.png">For Laptop</a></li>
        </ul>
      </div>

      <div class="wallpaper">
        <picture class="eyecatch">
          <source type="image/webp" srcset="~static/img/gophers-pattern.webp">
          <img src="~assets/img/gophers-pattern.png" >
        </picture>
        <p>Gophers Pattern</p>
        <ul>
          <li><a class="button" href="/wallpaper/gophers-pattern-phone.png">For Phone</a></li>
          <li><a class="button" href="/wallpaper/gophers-pattern-laptop.png">For Laptop</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.logo p {
  padding-top: 2em;
}

.wallpaper {
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
.wallpaper ul {
  list-style-type: none;
}
.wallpaper li {
  margin-bottom: .5em;
}
</style>
