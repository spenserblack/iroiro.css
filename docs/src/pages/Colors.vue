<script setup>
import { colors } from "iroiro";
import InteractivePreview from "../components/InteractivePreview.vue";

const colorNames = colors.map(({ romanized }) => romanized.toLowerCase());
</script>

<template>
  <div class="colors-page">
    <h2>Colors</h2>
    <p>
      All of the colors are sourced from <a :href="$iroiro">iroiro</a>. Previews are
      below.
    </p>

    <h3>Interactive Preview</h3>
    <p>
      Use the inputs to change the preview. The preview will update as you select options.
    </p>
    <InteractivePreview />

    <h3><code>.text-*</code></h3>
    <div class="preview-container">
      <div v-for="name in colorNames" :key="name" class="row">
        <div class="on-white col preview-col" :class="`text-${name}`">.text-{{ name }}</div>
        <div class="on-black col preview-col" :class="`text-${name}`">.text-{{ name }}</div>
      </div>
    </div>

    <h3><code>.bg-*</code></h3>
    <div class="preview-container">
      <div v-for="name in colorNames" :key="name" class="row">
        <div class="white col preview-col" :class="`bg-${name}`">.bg-{{ name }}</div>
        <div class="black col preview-col" :class="`bg-${name}`">.bg-{{ name }}</div>
      </div>
    </div>
  </div>

  <h3>Programmatically selecting colors</h3>
  <p>
    <a :href="$iroiro">iroiro</a> provides <code>colors: Color[]</code> and
    <code>getColors(name: string): Color[]</code>, which can aid in selecting colors.
  </p>
  <h4>Example</h4>
  <div class="preview-container">
    <div class="row">
      <div class="col">
        <pre>
          <code>const red = iroiro.getColors('red');</code>
          <code>// NOTE: These stylesheets use the romanized name</code>
          <code>const cssClass = `text-${red[0].romanized}`;</code>
        </pre>
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

  .col {
    $vertical-padding: 0.25rem;

    &.preview-col {
      width: 50%;
      padding: $vertical-padding 0;
    }

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
