<script setup>
import { $iroiro } from "./global-props";
</script>

<template>
  <div class="bg-gofun text-sumi app">
    <header class="header bg-usu text-center">
      <h1><code class="text-shironeri">iroiro.css</code></h1>
    </header>
    <aside class="drawer left-drawer bg-sakura">
      <h2>Menu</h2>
      <nav class="nav flex-column">
        <router-link class="nav-link" to="/" exact>Home</router-link>
        <router-link class="nav-link" to="/colors" exact>Colors</router-link>
        <a class="nav-link" :href="$iroiro">iroiro</a>
        <a class="nav-link" href="//github.com/spenserblack/iroiro.css">GitHub</a>
      </nav>
    </aside>
    <main class="main container-xxl">
      <!-- TODO Remove -->
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.app {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header header"
    "left-drawer main";
  grid-gap: 0;
  height: 100vh;
}

.header {
  grid-area: header;
}
.drawer {
  --bs-link-color: var(--bs-ebicha);
  --bs-link-hover-color: var(--bs-kurenai);
  padding-left: 1rem;
}
.left-drawer {
  grid-area: left-drawer;
}

.main {
  grid-area: main;
  max-height: 100vh;
  overflow-y: auto;
}
</style>
