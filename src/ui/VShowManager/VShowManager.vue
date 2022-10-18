<template>
  <slot />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { showProvider } from './VShowManagerContext'

const props = defineProps<{
  modelValue?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const shouldShow = computed(() => Boolean(props.modelValue))
function toggle(value?: boolean) {
  emit('update:modelValue', value ?? !shouldShow.value)
}

showProvider({ value: shouldShow, toggle })
</script>

<style scoped>
.dialog {
  margin: auto;
  border: none;
  border-radius: 0.25rem;
}
</style>
