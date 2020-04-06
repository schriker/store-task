type Product = {
  id: number
  name: string
  price: number
  amount?: number
}

export interface ActionObject {
  type: string
  payload?: any
}

export interface StateObject {
  search: string
  products: Product[]
  isFetching: boolean
  error: boolean
  cart: Product[]
}

export interface ContextType {
  state: StateObject
  dispatch: React.Dispatch<ActionObject>
}
