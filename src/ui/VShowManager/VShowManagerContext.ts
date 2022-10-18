import { inject, provide, type ComputedRef } from 'vue'

type Value = {
  value: ComputedRef<boolean>
  toggle: (value?: boolean) => void
}
export const showProvider = (value: Value) => provide('value', value)
export const showInjector = () => inject<Value>('value')
