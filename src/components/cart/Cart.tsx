import React, { useContext, useState } from 'react'
import Button from '../../components/button/Button'
import CartList from './cartList/CartList'
import { StoreContext } from '../../context/StoreContext'
import styles from './Cart.module.css'

const Cart: React.FC = () => {
  const [showCart, setShowCart] = useState<boolean>(false)
  const { state } = useContext(StoreContext)

  const value = state.cart.reduce((prev, current) => {
    return +(prev + current.price * current.amount!).toFixed(12)
  }, 0)

  return (
    <>
      <CartList show={showCart} />
      <div className={styles.container}>
        Yo have: <span>{state.cart.length}</span> product of total value:{' '}
        <span>{value}$</span>
        <Button
          isDisabled={state.cart.length > 0 || showCart ? false : true}
          action={() => setShowCart(!showCart)}
          label={showCart ? 'Hide Cart' : 'View Cart'}
          cssStyle={'standard'}
        />
      </div>
    </>
  )
}

export default Cart
