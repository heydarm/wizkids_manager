<template>
  <EmployeeList>
    <EmployeeListItem
      v-for="employee in employees"
      :key="employee.id"
      v-bind="employee"
      @edit="handleEdit()"
      @delete="handleDelete(employee.id)"
    />
  </EmployeeList>
</template>

<script setup lang="ts">
import { EmployeeList, EmployeeListItem } from '@/components/EmployeeList'
import { Role, type Employee } from '@/types'
import { generateEmployees } from '@/utils/employee'
import { ref } from 'vue'

const employees = ref(
  generateEmployees([
    { name: 'Jack Sparrow', role: Role.boss },
    { name: 'Mary Maximoff', role: Role.designer },
    { name: 'Sam Smith', role: Role.developer },
    { name: 'Kate Moss', role: Role.intern }
  ])
)

function handleEdit() {
}

function handleDelete(id: Employee['id']) {
  employees.value = employees.value.filter((item) => item.id !== id)
}
</script>
