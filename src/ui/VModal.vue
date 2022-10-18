<template>
  <dialog
    ref="dialogEl"
    class="dialog"
  >
    <header class="header">
      <slot name="header" />

      <VButton
        :color="Color.red"
        @click="toggle?.(false)"
      >
        &times;
      </VButton>
    </header>

    <slot />

    <footer class="footer">
      <slot name="footer" />
    </footer>
  </dialog>
</template>

<script setup lang="ts">
import { ref, watchPostEffect } from 'vue'
import { Color } from './types'

import VButton from './VButton.vue'
import { showInjector } from './VShowManager'

const { value, toggle } = showInjector() ?? {}

const dialogEl = ref<HTMLDialogElement | null>(null)

function toggleDialog(open?: boolean) {
  const el = dialogEl.value
  if (!el) return
  el[open ?? !el.open ? 'showModal' : 'close']()
}

watchPostEffect(() => {
  toggleDialog(Boolean(value?.value))
})
</script>

<style scoped>
.dialog {
  margin: auto;
  border: none;
  border-radius: 0.25rem;
}
</style>
