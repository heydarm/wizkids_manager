import type { Employee, Role } from '@/types'

export const generateEmployees = (
  emplyees: { name: string; role: Role }[]
): Employee[] => {
  const res = []

  for (let i = 0; i < emplyees.length; i++) {
    const { name: fullName, role } = emplyees[i]
    const [firstName, lastName] = fullName.split(' ')
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`
    res.push({
      id: i + 1,
      firstName,
      lastName,
      role,
      email,
      phone: '+1234567890',
      image: ''
    })
  }

  return res
}
