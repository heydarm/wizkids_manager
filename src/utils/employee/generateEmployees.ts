import type { Employee, Role } from '@/types'

export const generateEmployees = (
  emplyees: { name: string; role: Role }[]
): Employee[] => {
  const res = []

  for (let i = 0; i < emplyees.length; i++) {
    const { name: fullName, role } = emplyees[i]
    const [first_name, last_name] = fullName.split(' ')
    const email = `${first_name.toLowerCase()}.${last_name.toLowerCase()}@example.com`
    res.push({
      id: i + 1,
      first_name,
      last_name,
      role,
      email,
      phone: '+1234567890',
      image: ''
    })
  }

  return res
}
