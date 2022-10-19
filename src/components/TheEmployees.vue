<template>
  <EmployeeList class="mt-6">
    <EmployeeListItem
      v-for="(employee, i) in employees"
      :key="employee.id"
      v-bind="employee"
      @edit="updEditing(i)"
      @delete="handleDelete(employee.id)"
    />
  </EmployeeList>

  <VShowManager v-model="editingEmployee">
    <EmployeeEditModal
      :key="editingEmployee!"
      :employee="employees?.[editingEmployee!]"
      @submit="updEmployee"
    />
  </VShowManager>

  <VShowManager v-model="deletingEmployee">
    <DeleteConfirmationModal @submit="deleteEmployee(deletingEmployee)" />
  </VShowManager>
</template>

<script setup lang="ts">
import type { BaseEmployee, Employee } from '@/types'
import { ref } from 'vue'
import EmployeeEditModal from './EmployeeEditModal.vue'
import { VShowManager } from '@/ui'
import DeleteConfirmationModal from './DeleteConfirmationModal.vue'
import EmployeeListItem from './EmployeeList/EmployeeListItem.vue'
import EmployeeList from './EmployeeList/EmployeeList.vue'

const props = defineProps<{
  employees?: Employee[]
}>()

const emit = defineEmits<{
  (e: 'deleteEmployee', id: Employee['id']): void
  (e: 'editEmployee', data: Employee): void
}>()

function updEditing(index: number) {
  editingEmployee.value = index
}

function handleDelete(id: Employee['id']) {
  deletingEmployee.value = id
}

const editingEmployee = ref<number | null>(null)
const deletingEmployee = ref<Employee['id'] | null>(null)

function updEmployee(data: BaseEmployee) {
  if (!props.employees || editingEmployee.value == null) return
  const { id, image } = props.employees[editingEmployee.value]
  emit('editEmployee', Object.assign({ id, image }, data))
}

function deleteEmployee(id: Employee['id'] | null) {
  if (id == null) return
  emit('deleteEmployee', id)
}
</script>

<style scoped></style>
