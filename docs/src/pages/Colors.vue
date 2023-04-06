<script setup>
import { colors } from "iroiro";

const colorNames = colors.map(({ romanized }) => romanized.toLowerCase());
</script>

<template>
  <div class="colors-page">
    <h2>Colors</h2>
    <p>
      All of the colors are sourced from <a :href="$iroiro">iroiro</a>.
      Previews are below.
    </p>

    <h3><code>.text-*</code></h3>
    <div class="preview-container">
      <div v-for="name in colorNames" :key="name" class="row">
        <div class="on-white col" :class="`text-${name}`">.text-{{ name }}</div>
        <div class="on-black col" :class="`text-${name}`">.text-{{ name }}</div>
      </div>
    </div>

    <h3><code>.bg-*</code></h3>
    <div class="preview-container">
      <div v-for="name in colorNames" :key="name" class="row">
        <div class="white col" :class="`bg-${name}`">.bg-{{ name }}</div>
        <div class="black col" :class="`bg-${name}`">.bg-{{ name }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.preview-container {
  max-height: 25vh;
  width: 25rem;
  margin: auto;
  overflow: auto;

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .col {
    $vertical-padding: 0.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: $vertical-padding 0;

    &.on-black {
      background-color: #000;
    }
    &.on-white {
      background-color: #fff;
    }
    &.black {
      color: #000;
    }
    &.white {
      color: #fff;
    }
  }
}
</style>
