<template>
  <VModal>
    <template #header>
      <h2>Add new employee</h2>
    </template>

    <div class="p-5">
      <VFormGroup
        v-for="{ key, name } in inputs"
        :key="key"
        :label="name"
        class="d-flex mb-5"
      >
        <VInput v-model="state[key]" />
      </VFormGroup>
    </div>

    <template #footer>
      <VButton
        :color="Color.blue"
        @click="handleSubmit()"
        >Create</VButton
      >
    </template>
  </VModal>
</template>

<script setup lang="ts">
import { Color } from '@/ui/types'
import { VModal, VButton, showInjector, VFormGroup, VInput } from '@/ui'
import { Role, type BaseEmployee } from '@/types'
import { reactive, computed } from 'vue'

const emit = defineEmits<{
  (e: 'submit', data: BaseEmployee): void
}>()

const { toggle } = showInjector()

const state = reactive<BaseEmployee>({
  first_name: '',
  last_name: '',
  role: Role.developer,
  email: '',
  phone: '',
  image: ''
})

function handleSubmit() {
  emit('submit', state)
  toggle?.(false)
}

const inputs = computed(() => {
  return Object.keys(state).map((item) => ({
    key: item,
    name: item
      .split('_')
      .map((part) => part.slice(0, 1).toUpperCase() + part.slice(1))
      .join(' ')
  })) as { key: keyof typeof state; name: string }[]
})
</script>

<style scoped></style>
