<script setup>
import { ref } from 'vue'
import ColorDropdown from './ColorDropdown.vue'

const bg = ref('ruri');
const fg = ref('gofun');
</script>

<template>
  <div class="interactive-preview">
    <!-- TODO Label accessibility -->
    <div class="row">
      <div class="col">
        <span><code>.bg-</code></span>
        <ColorDropdown v-model="bg" />
      </div>
      <div class="col">
        <span><code>.text-</code></span>
        <ColorDropdown v-model="fg" />
      </div>
    </div>

    <div class="row preview">
      <div class="col preview-contents" :class="`bg-${bg} text-${fg}`">Hello, 世界</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.interactive-preview {
  max-width: 25rem;
  margin: auto;
}
.preview {
  margin-top: 1rem;

  .preview-contents {
    padding: 0.25rem;
    width: 50%;
    margin: auto;
    border-radius: 10px;
  }
}
</style>
