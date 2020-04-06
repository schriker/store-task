import React, { useContext } from 'react'
import styles from './CartList.module.css'
import { StoreContext } from '../../../context/StoreContext'
import ProductListItem from '../../products/productsListItem/ProductsListItem'

const CartList: React.FC<{ show: boolean }> = ({ show }) => {
  const { state } = useContext(StoreContext)
  return (
    <div
      style={{ display: show ? 'block' : 'none' }}
      className={styles.wrapper}
    >
      <div className={styles.container}>
        {state.cart.length > 0 ? (
          state.cart.map((product) => (
            <ProductListItem key={product.id} cartView product={product} />
          ))
        ) : (
          <div className={styles.empty}>Your cart is empty.</div>
        )}
      </div>
    </div>
  )
}

export default CartList
