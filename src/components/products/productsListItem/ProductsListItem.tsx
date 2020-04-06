import React, { useState, useContext, useEffect } from 'react'
import { StoreContext } from '../../../context/StoreContext'
import { Product } from '../../../context/storeContextTypes'
import * as actionType from '../../../context/actionTypes'
import styles from './ProductsListItem.module.css'
import Amount from '../../amount/Amount'
import Buton from '../../button/Button'

interface ProductsListItemProps {
  product: Product
  cartView: boolean
}

const ProductsListItem: React.FC<ProductsListItemProps> = ({
  product,
  cartView,
}) => {
  const [amount, setAmount] = useState('0')

  useEffect(() => {
    if (product.amount) {
      setAmount(`${product.amount}`)
    }
  }, [product.amount])

  const { dispatch, state } = useContext(StoreContext)

  const updateAmountHanlder = () => {
    if (+amount > 0) { 
      const products = state.cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            amount: amount,
          }
        } else {
          return item
        }
      })
    
      dispatch({
        type: actionType.CART_UPDATE,
        payload: products
      })
    }
  }

  const removeHandler = () => {
    const products = state.cart.filter(item => item.id !== product.id)
    dispatch({
      type: actionType.CART_UPDATE,
      payload: products
    })
  }

  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value)
  }

  const addHanlder = () => {
    if (+amount > 0) {
      if (state.cart.filter((item) => item.id === product.id).length > 0) {
        const cartProducts = state.cart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              amount: item.amount! + amount,
            }
          } else {
            return item
          }
        })
        dispatch({
          type: actionType.CART_UPDATE,
          payload: cartProducts,
        })
      } else {
        dispatch({
          type: actionType.CART_ADD,
          payload: {
            ...product,
            amount
          },
        })
      }
    }
    setAmount('0')
  }

  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <span>{product.name}</span>
        <span className={styles.price}>{product.price}$</span>
      </div>
      <div className={styles.amount}>
        <Amount
          value={amount}
          onChange={onChangeHandler}
        />
        {!cartView && (
          <Buton
            label={'Add'}
            cssStyle={'standard'}
            action={addHanlder}
          />
        )}
        {cartView && (
          <Buton
            label={'Update'}
            cssStyle={'standard'}
            action={updateAmountHanlder}
          />
        )}
        {cartView && (
          <Buton
            label={'Remove'}
            cssStyle={'danger'}
            action={removeHandler}
          />
        )}
      </div>
    </div>
  )
}

export default ProductsListItem
