<template>
  <VModal>
    <template #header>
      <h2 class="title2 fw-semibold">Edit wizkid</h2>
    </template>

    <div class="px-5">
      <VFormGroup label="Name">
        <VInput v-model="localEmployee.first_name" />
      </VFormGroup>
    </div>

    <template #footer>
      <VButton
        :color="Color.green"
        @click="handleSubmit"
      >
        Save
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
import { Color } from '@/ui/types'
import { showInjector, VButton, VModal, VInput, VFormGroup } from '@/ui'
import { ref } from 'vue'
import type { BaseEmployee } from '@/types'
import { Role } from '@/types'

const props = defineProps<{
  employee?: BaseEmployee
}>()

const emit = defineEmits<{
  (e: 'submit', employee: BaseEmployee): void
}>()

function handleSubmit() {
  emit('submit', localEmployee.value)
  toggle?.(false)
}

const localEmployee = ref<BaseEmployee>({
  first_name: '',
  last_name: '',
  role: Role.intern,
  email: '',
  phone: '',
  image: '',
  ...props.employee
})

const { toggle } = showInjector()
</script>

<style scoped></style>
