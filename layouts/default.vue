<template>
  <div>
    <header id="global-header">
      <h1 class="title">GoCon 2019<span>summer in Fukuoka</span></h1>
      <h2 class="subtitle">\ʕ◔ϖ◔ʔ/<span>   🍜  </span>\ʕ◔ϖ◔ʔ/ </h2>
    </header>
    <nuxt />
  </div>
</template>

<style>
#global-header {
  padding: 3em 0 2em;
  font-family: 'Arvo', serif;
  text-align: center;
}
#global-header .title {
  font-size: 8em;
  letter-spacing: .03em;
}
#global-header .title span {
  font-size: .6em;
  display: block;
  letter-spacing: 0;
}
#global-header .subtitle {
  font-size: 2em;
  color: #3399FF;
  font-weight: bold;
  padding: 1em;
}
#global-header .subtitle span {
  font-size: 3em;
  display: inline-block;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
