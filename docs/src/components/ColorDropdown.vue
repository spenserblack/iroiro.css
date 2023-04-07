<script setup>
import { computed, ref } from "vue";
import { colors } from "iroiro";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["update:modelValue"]);

// NOTE: Maps a color's romanized name to the color.
const colorRecord = colors.reduce(
  (record, { romanized, ...color }) => ({
    ...record,
    [romanized.toLowerCase()]: color,
  }),
  {},
);
const colorChoices = Object.keys(colorRecord);

const isDark = (color) => color.lightness < 0.5;
const textColor = (color) => `text-${isDark(color) ? "light" : "dark"}`;

const open = ref(false);
const btnClass = computed(() => `btn-${props.modelValue || "ruri"}`);

const select = (color) => {
  open.value = false;
  emit("update:modelValue", color);
};
</script>

<template>
  <div class="dropdown">
    <button
      type="button"
      class="btn dropdown-toggle"
      :class="btnClass"
      @click="open = !open"
      aria-label="Toggle Dropdown"
    >
      <span v-if="props.modelValue">{{ props.modelValue }}</span>
      <span v-else>Select a color</span>
    </button>
    <ul class="dropdown-menu" v-show="open">
      <li v-for="color in colorChoices" :key="color">
        <button
          class="dropdown-item"
          :class="[textColor(colorRecord[color]), `bg-${color}`]"
          @click="select(color)"
        >
          {{ color }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.dropdown-menu {
  overflow-y: auto;
  max-height: 20rem;
  display: revert;
}
</style>
