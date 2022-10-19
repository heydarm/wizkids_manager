<template>
  <button :class="['button', color, variant]"><slot /></button>
</template>

<script setup lang="ts">
import type { Color } from './types'

withDefaults(
  defineProps<{
    color?: Color
    variant?: 'contained' | 'outlined'
  }>(),
  { variant: 'contained' }
)
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
    &:where(.outlined.#{$color}) {
      color: var(--#{$color}-700);
      border: 1px solid var(--#{$color}-600);
      background-color: var(--#{$color}-50);

      &:hover {
        background-color: var(--#{$color}-100);
      }
    }

    &:where(.contained.#{$color}) {
      color: white;
      border: 1px solid var(--#{$color}-600);
      background-color: var(--#{$color}-500);

      &:hover {
        background-color: var(--#{$color}-600);
      }
    }
  }
}
</style>
