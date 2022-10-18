<template>
  <li class="container">
    <img
      height="60"
      width="60"
      class="avatar"
      src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Sunglasses&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Hearts&eyebrowType=FlatNatural&mouthType=Twinkle&skinColor=DarkBrown"
    />

    <div class="info">
      <div class="header">
        <span class="title4 fw-semibold">{{ firstName }} {{ lastName }}</span>
        <VBadge
          :color="Color.blue"
          class="caption fw-medium"
        >
          {{ role.toUpperCase() }}
        </VBadge>
      </div>
      <div class="body2 contact-info">{{ email }} | {{ phone }}</div>
    </div>

    <div class="action-btns">
      <VButton
        :color="Color.blue"
        @click="emit('edit')"
      >
        Edit
      </VButton>
      <VButton
        :color="Color.red"
        @click="emit('delete')"
      >
        &times;
      </VButton>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { Role } from '@/types'
import { VBadge, VButton } from '@/ui'
import { Color } from '@/ui/types'

interface Employee {
  id: number
  firstName: string
  lastName: string
  role: Role
  email: string
  phone: string
  image: string
}
defineProps<Employee>()

const emit = defineEmits<{
  (e: 'edit'): void
  (e: 'delete'): void
}>()
</script>

<style scoped>
.container {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr auto;
  gap: 0.5rem;
  margin: 1rem;
  padding: 1rem 1.5rem;
  border: 1px solid var(--blue-300);
  border-radius: 0.25rem;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.header {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
}

.avatar {
  border-radius: 1rem;
}

.contact-info {
  color: var(--grey-500);
}

.action-btns {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
