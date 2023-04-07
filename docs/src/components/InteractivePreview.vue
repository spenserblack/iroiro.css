<script setup>
import { ref } from "vue";
import ColorDropdown from "./ColorDropdown.vue";

const bg = ref("ruri");
const fg = ref("gofun");
</script>

<template>
  <div class="interactive-preview">
    <!-- TODO Label accessibility -->
    <div class="row mb-1">
      <div class="col-1 offset-3">
        <span><code>.bg-</code></span>
      </div>
      <div class="col-2">
        <ColorDropdown v-model="bg" />
      </div>
      <div class="col-1">
        <span><code>.text-</code></span>
      </div>
      <div class="col-2">
        <ColorDropdown v-model="fg" />
      </div>
    </div>

    <div class="row">
      <div
        class="col-6 offset-3 rounded text-center py-2"
        :class="`bg-${bg} text-${fg}`"
      >
        Hello, 世界
      </div>
    </div>
  </div>
</template>
