<template>
  <button :class="['button', color]"><slot /></button>
</template>

<script setup lang="ts">
import type { Color } from './types'

interface Props {
  color?: Color
}
defineProps<Props>()
</script>

<style scoped lang="scss">
.button {
  display: inline-flex;
  padding: 0.375rem 1rem;
  border-radius: 0.25rem;
  transition: background-color ease-in-out 0.15s;
  cursor: pointer;

  $colors: ('red', 'green', 'blue', 'yellow', 'grey');

  @each $color in $colors {
    &.#{$color} {
      color: var(--#{$color}-700);
      border: 1px solid var(--#{$color}-700);
      background-color: var(--#{$color}-50);

      &:hover {
        background-color: var(--#{$color}-100);
      }
    }
  }
}
</style>
