<template>
  <label class="container">
    <span class="body2">
      {{ label }}
    </span>
    <slot />
  </label>
</template>

<script setup lang="ts">
defineProps<{
  label?: string
}>()
</script>

<style scoped>
.container {
  display: inline-flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
