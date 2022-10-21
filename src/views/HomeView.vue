<template>
  <main class="p-5">
    <header class="d-flex alit-center juco-end">
      <VButton
        :color="Color.blue"
        @click="showCreateModal = true"
        >+ Add new wizkid</VButton
      >
    </header>

    <TheEmployees
      :employees="employees"
      @edit-employee="updEmployee"
      @delete-employee="deleteEmployee"
    />

    <VShowManager v-model="showCreateModal">
      <NewEmployeeModal @submit="createEmployee" />
    </VShowManager>
  </main>
</template>

<script setup lang="ts">
import { Role, type BaseEmployee, type Employee } from '@/types'
import { generateEmployees } from '@/utils/employee'
import { ref } from 'vue'
import { VButton, VShowManager } from '@/ui'
import { Color } from '@/ui/types'
import TheEmployees from '../components/TheEmployees.vue'
import NewEmployeeModal from '../components/NewEmployeeModal.vue'

const showCreateModal = ref(false)

const employees = ref(
  generateEmployees([
    { name: 'Jack Sparrow', role: Role.boss },
    { name: 'Mary Maximoff', role: Role.designer },
    { name: 'Sam Smith', role: Role.developer },
    { name: 'Kate Moss', role: Role.intern }
  ])
)

function createEmployee(data: BaseEmployee) {
  employees.value.push({
    id: employees.value.length + 1,
    ...data
  })
}

function updEmployee(data: Employee) {
  employees.value = employees.value.map((item) =>
    item.id === data.id ? { ...item, ...data } : item
  )
}

function deleteEmployee(id: Employee['id']) {
  employees.value = employees.value.filter((item) => item.id !== id)
}
</script>
