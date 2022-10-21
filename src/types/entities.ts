export interface BaseEmployee {
  first_name: string
  last_name: string
  role: Role
  email: string
  phone: string
  image: string
}

export interface Employee extends BaseEmployee {
  id: number
}

export enum Role {
  boss = 'boss',
  developer = 'developer',
  designer = 'designer',
  intern = 'intern'
}
