export interface BaseEmployee {
  firstName: string
  lastName: string
  role: Role
  email: string
  phone: string
}

export interface Employee extends BaseEmployee {
  id: number
  image: string
}

export enum Role {
  boss = 'boss',
  developer = 'developer',
  designer = 'designer',
  intern = 'intern'
}
