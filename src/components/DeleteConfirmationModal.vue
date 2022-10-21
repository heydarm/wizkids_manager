<template>
  <VModal>
    <template #header>
      <h2>Confirm delete</h2>
    </template>

    <div class="px-5">Are you sure you want to delete this user?</div>

    <template #footer>
      <VButton
        :color="Color.red"
        @click="handleSubmit"
      >
        Delete
      </VButton>
      <VButton
        :color="Color.grey"
        @click="toggle?.(false)"
        variant="outlined"
      >
        Cancel
      </VButton>
    </template>
  </VModal>
</template>

<script setup lang="ts">
import { showInjector, VButton, VModal } from '@/ui'
import { Color } from '@/ui/types'

const { toggle } = showInjector()

const emit = defineEmits<{
  (e: 'submit'): void
}>()

function handleSubmit() {
  emit('submit')
  toggle?.(false)
}
</script>

<style scoped></style>
