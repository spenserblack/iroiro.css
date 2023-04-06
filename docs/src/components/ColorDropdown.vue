<script setup>
import { computed, ref } from 'vue';
import { colors } from 'iroiro';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
});
const emit = defineEmits(['update:modelValue']);

// NOTE: Maps a color's romanized name to the color.
const colorRecord = colors.reduce((record, { romanized, ...color }) => ({
  ...record,
  [romanized.toLowerCase()]: color,
}), {});
const colorChoices = Object.keys(colorRecord);

const isDark = (color) => color.lightness < 0.5;
const textColor = (color) => `text-${isDark(color) ? 'white' : 'black'}`;

const open = ref(false);
const btnTextClass = computed(() => (props.modelValue ? textColor(colorRecord[props.modelValue]) : 'text-gofun'));
const btnClass = computed(() => `${btnTextClass.value} bg-${props.modelValue || 'ruri'}`);

const select = (color) => {
  open.value = false;
  emit('update:modelValue', color);
};
</script>

<template>
  <div class="color-dropdown">
    <button type="button" class="dropdown-toggle" :class="btnClass" @click="open = !open" aria-label="Toggle Dropdown">
      <span v-if="props.modelValue">{{ props.modelValue }}</span>
      <span v-else>Select a color</span>
    </button>
    <div class="dropdown-menu" v-show="open">
      <div class="dropdown-item" v-for="color in colorChoices"  :class="[textColor(colorRecord[color]), `bg-${color}`]" :key="color" @click="select(color)">
        {{ color }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$dropdown-width: 10rem;
.text-white {
  color: white;
}
.text-black {
  color: black;
}

.color-dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  width: $dropdown-width;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  z-index: 1000;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 10rem;
}

.dropdown-item {
  padding: 0.5rem 1rem;
  cursor: pointer;
  width: $dropdown-width;
}
</style>
