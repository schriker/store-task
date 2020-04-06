import axios from 'axios'
import styles from './ProductsList.module.css'
import React, { useEffect, useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { Product } from '../../context/storeContextTypes'
import * as actionType from '../../context/actionTypes'
import ProductsListItem from './productsListItem/ProductsListItem'
import Search from '../search/Search'

const ProductsList: React.FC = () => {
  let products: Product[] = []
  const { state, dispatch } = useContext(StoreContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: actionType.FETCHING_START })
        const products = await axios('/data.json')
        dispatch({ type: actionType.FETCHING_SUCCESS, payload: products.data })
      } catch (error) {
        console.error(error)
        dispatch({ type: actionType.FETCHING_FAIL })
      }
    }

    fetchData()
  }, [dispatch])

  products = state.products.filter((product) =>
    product.name.toLowerCase().includes(state.search.toLowerCase())
  )

  return (
    <div className={styles.container}>
      {state.isFetching ? (
        <div className={styles.placeholder}></div>
      ) : (
        <>
          <Search />
          {products.map((product) => (
            <ProductsListItem
              cartView={false}
              key={product.id}
              product={product}
            />
          ))}
        </>
      )}
    </div>
  )
}

export default ProductsList
