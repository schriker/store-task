import React from 'react'
import { StateObject, ActionObject, ContextType } from './storeContextTypes'
import * as actionType from './actionTypes'

export const initialState: StateObject = {
  search: '',
  products: [],
  isFetching: false,
  error: false,
  cart: [],
}

export const reducer = (
  state: StateObject,
  action: ActionObject
): StateObject => {
  switch (action.type) {
    case actionType.SEARCH:
      return {
        ...state,
        search: action.payload
      }
    case actionType.FETCHING_START:
      return {
        ...state,
        isFetching: true,
      }
    case actionType.FETCHING_SUCCESS:
      return {
        ...state,
        isFetching: false,
        products: [...action.payload],
      }
    case actionType.FETCHING_FAIL:
      return {
        ...state,
        isFetching: false,
        error: true,
      }
    case actionType.CART_ADD:
      return {
        ...state,
        cart: [
          ...state.cart,
          action.payload
        ]
      }
    case actionType.CART_UPDATE:
      return {
        ...state,
        cart: action.payload
      }
    default:
      return state
  }
}

export const StoreContext = React.createContext<ContextType>({
  state: initialState,
  dispatch: () => undefined,
})
