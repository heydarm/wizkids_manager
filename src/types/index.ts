export interface Employee {
  id: number
  firstName: string
  lastName: string
  role: Role
  email: string
  phone: string
  image: string
}

export enum Role {
  boss = 'boss',
  developer = 'developer',
  designer = 'designer',
  intern = 'intern'
}
