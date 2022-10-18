<template>
  <VModal>
    <template #header>
      <div></div>
    </template>

    <div class="p-0">
      <input type="text" />
    </div>

    <template #footer>
      <VButton :color="Color.green">Save</VButton>
      <VButton :color="Color.grey">Cancel</VButton>
    </template>
  </VModal>
</template>

<script setup lang="ts">
import { Color } from '@/ui/types'
import { VButton, VModal } from '../ui'
</script>

<style scoped></style>
