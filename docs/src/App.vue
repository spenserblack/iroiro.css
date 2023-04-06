<script setup>
const name = 'World';
</script>

<template>
  <div class="app">
    <header class="header bg-usu text-shironeri">
      <h1><code>iroiro.css</code></h1>
    </header>
    <div class="drawer left-drawer bg-sakura text-ebicha">
      <h2>Menu</h2>
      <ul class="nav">
        <li><router-link to="/">Home</router-link></li>
        <li>
          <a href="//github.com/spenserblack/iroiro.css">GitHub</a>
        </li>
      </ul>
    </div>
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" scoped>
$header-height: 100px;
$drawer-width: 300px;
.app {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: $header-height;
}

.drawer {
  position: absolute;
  top: $header-height;
  bottom: 0;
  width: 300px;
}

.left-drawer {
  left: 0;
}

.main {
  position: absolute;
  top: $header-height;
  left: $drawer-width;
  right: 0;
  bottom: 0;
}

ul.nav {
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    margin: 0;
    padding: 0.5em;
  }
}
</style>
