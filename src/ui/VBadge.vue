<template>
  <component
    :is="as ?? 'span'"
    :class="['badge', color]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import type { Color } from './types'

defineProps<{
  as?: string | Component
  color?: Color
}>()
</script>

<style scoped lang="scss">
.badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;

  $colors: ('red', 'green', 'blue', 'yellow', 'grey');

  @each $color in $colors {
    &.#{$color} {
      color: var(--#{$color}-700);
      background-color: var(--#{$color}-50);
    }
  }
}
</style>
