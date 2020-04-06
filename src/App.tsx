import React, { useReducer } from 'react'
import { initialState, reducer, StoreContext } from './context/StoreContext'
import ProductsList from './components/products/ProductsList'
import Cart from './components/cart/Cart'

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="container">
      <div className="row">
        <StoreContext.Provider value={{ state, dispatch }}>
          <ProductsList />
          <Cart />
        </StoreContext.Provider>
      </div>
    </div>
  )
}

export default App
