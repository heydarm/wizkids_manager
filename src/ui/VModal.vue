<template>
  <dialog
    ref="dialogEl"
    class="dialog"
  >
    <header class="header p-4">
      <slot name="header" />

      <VButton
        class="close-btn"
        :color="Color.red"
        @click="toggle?.(false)"
      >
        &times;
      </VButton>
    </header>

    <slot />

    <footer class="footer p-4">
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

function toggleDialog(open?: any) {
  const el = dialogEl.value
  if (!el) return

  if (open === 0) {
    el.showModal()
    return
  }

  const flag = open === undefined ? !el.open : open
  el[flag ? 'showModal' : 'close']()
}

watchPostEffect(() => {
  toggleDialog(value?.value)
})
</script>

<style scoped>
.dialog {
  width: max(20rem, 75%);
  margin: auto;
  border: none;
  border-radius: 0.25rem;
}

.header {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;
  margin-top: 1rem;
  border-top: 1px solid var(--grey-200);
}

.close-btn {
  display: flex;
  border-radius: 10rem;
  margin-left: auto;
  padding: 0.25rem 0.5rem;
  border: none;
  line-height: 1;
  background-color: transparent;
  font-size: 1.5rem;
}
</style>
