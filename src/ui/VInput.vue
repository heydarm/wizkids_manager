<template>
  <input
    class="input"
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement)?.value)
    "
  />
</template>

<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue'

defineProps<{
  modelValue: InputHTMLAttributes['value']
}>()
defineEmits<{
  (e: 'update:modelValue', value: InputHTMLAttributes['value']): void
}>()
</script>

<style scoped lang="scss">
.input {
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--grey-300);
  border-radius: 0.25rem;

  &:focus {
    border-color: var(--blue-300);
    outline: none;
    box-shadow: 0px 0px 3px 2px var(--blue-200);
  }
}
</style>
