<template>
  <main class="p-5">
    <header class="d-flex alit-center juco-end">
      <VButton :color="Color.blue">+ Add new wizkid</VButton>
    </header>

    <TheEmployees
      :employees="employees"
      @edit-employee="updEmployee"
      @delete-employee="deleteEmployee"
    />
  </main>
</template>

<script setup lang="ts">
import { Role, type Employee } from '@/types'
import { generateEmployees } from '@/utils/employee'
import { ref } from 'vue'
import { VButton } from '@/ui'
import { Color } from '@/ui/types'
import TheEmployees from '../components/TheEmployees.vue'

const employees = ref(
  generateEmployees([
    { name: 'Jack Sparrow', role: Role.boss },
    { name: 'Mary Maximoff', role: Role.designer },
    { name: 'Sam Smith', role: Role.developer },
    { name: 'Kate Moss', role: Role.intern }
  ])
)

function updEmployee(data: Employee) {
  employees.value = employees.value.map((item) =>
    item.id === data.id ? { ...item, ...data } : item
  )
}

function deleteEmployee(id: Employee['id']) {
  employees.value = employees.value.filter((item) => item.id !== id)
}
</script>
