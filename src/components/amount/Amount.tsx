import React from 'react'
import styles from './Amount.module.css'

interface AmountProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any
}

const Amount: React.FC<AmountProps> = ({ value, onChange }) => {
  const setSelectionRange = (e:React.FocusEvent<HTMLInputElement>) => {
    e.target.select()
  }

  return (
    <input
      onFocus={setSelectionRange}
      className={styles.amount}
      min={0}
      value={value}
      onChange={onChange}
      type="number"
    />
  )
}

export default Amount
