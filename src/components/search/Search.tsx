import React, { useContext, useState } from 'react'
import styles from './Search.module.css'
import { StoreContext } from '../../context/StoreContext'
import * as actionType from '../../context/actionTypes'
import Button from '../button/Button'

const Search: React.FC = () => {
  const { dispatch } = useContext(StoreContext)
  const [value, setValue] = useState<string>('')

  const searchHanlder = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch({
      type: actionType.SEARCH,
      payload: value,
    })
  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      dispatch({
        type: actionType.SEARCH,
        payload: '',
      })
      setValue(e.target.value)
    } else {
      setValue(e.target.value)
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={searchHanlder}>
        <input
          className={styles.input}
          placeholder="Search for product..."
          value={value}
          onChange={changeHandler}
          type="text"
        />
        <Button label="Search" cssStyle="standard" />
      </form>
    </div>
  )
}

export default Search
