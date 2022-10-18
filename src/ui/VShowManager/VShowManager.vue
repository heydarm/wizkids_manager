<template>
  <slot />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { showProvider } from './VShowManagerContext'

const props = defineProps<{
  modelValue?: any
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()

const shouldShow = computed(() => props.modelValue)
function toggle(value?: boolean) {
  emit(
    'update:modelValue',
    typeof props.modelValue !== 'boolean' && value === false
      ? null
      : value ?? !props.modelValue
  )
}

showProvider({ value: shouldShow, toggle })
</script>
