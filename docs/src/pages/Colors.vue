<script setup>
import { computed, ref } from "vue";
import { colors, getColors } from "iroiro";
import InteractivePreview from "../components/InteractivePreview.vue";
import { $iroiro } from "../global-props";

const colorNames = colors.map(({ romanized }) => romanized.toLowerCase());
const searchableNames = Array.from(
  colors.reduce((set, { names }) => new Set([...set, ...names]), new Set()),
).sort((a, b) => a.localeCompare(b));
const searchTerm = ref("red");
const foundColors = computed(() =>
  (searchTerm.value ? getColors(searchTerm.value) : []).map(({ romanized }) =>
    romanized.toLowerCase(),
  ),
);
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
      Use the inputs to change the preview. The preview will update as you select
      options.
    </p>
    <InteractivePreview />

    <h3 class="mt-5"><code>.text-*</code></h3>
    <div class="row">
      <div class="col-8 offset-2 preview-container text-center">
        <div v-for="name in colorNames" :key="name" class="row">
          <div class="bg-light col p-1" :class="`text-${name}`">.text-{{ name }}</div>
          <div class="bg-dark col p-1" :class="`text-${name}`">.text-{{ name }}</div>
        </div>
      </div>
    </div>

    <h3 class="mt-5"><code>.bg-*</code></h3>
    <div class="row">
      <div class="col-8 offset-2 preview-container text-center">
        <div v-for="name in colorNames" :key="name" class="row">
          <div class="text-light col p-1" :class="`bg-${name}`">.bg-{{ name }}</div>
          <div class="text-dark col p-1" :class="`bg-${name}`">.bg-{{ name }}</div>
        </div>
      </div>
    </div>

    <h3 class="mt-5">Programmatically selecting colors</h3>
    <p>
      <a :href="$iroiro">iroiro</a> provides <code>colors: Color[]</code> and
      <code>getColors(name: string): Color[]</code>, which can aid in selecting colors.
    </p>
    <h4>Example</h4>
    <div class="row">
      <div class="col">
        <pre>
          <code>const red = iroiro.getColors('red');</code>
          <code>// NOTE: These stylesheets use the romanized name</code>
          <code>const cssClass = `text-${red[0].romanized}`;</code>
        </pre>
      </div>
    </div>
    <p>
      Try using the input to search for some colors. This input wraps the
      <code>getColors</code> function.
    </p>
    <input type="text" v-model="searchTerm" class="form-control" list="search-terms" />
    <datalist id="search-terms">
      <option v-for="name in searchableNames" :key="name" :value="name">
        {{ name }}
      </option>
    </datalist>
    <div class="row my-5">
      <div class="col-8 offset-2 preview-container text-center">
        <div v-for="name in foundColors" :key="name" class="row">
          <div class="text-light col p-1" :class="`bg-${name}`">.bg-{{ name }}</div>
          <div class="text-dark col p-1" :class="`bg-${name}`">.bg-{{ name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.preview-container {
  max-height: 20rem;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
