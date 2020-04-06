import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  label: string
  cssStyle: 'standard' | 'danger'
  action?: () => void
  isDisabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  label,
  cssStyle,
  action,
  isDisabled,
}) => {
  return (
    <button
      disabled={isDisabled ? true : false}
      className={`${styles.button} ${styles[cssStyle]}`}
      onClick={action}
    >
      {label}
    </button>
  )
}

export default Button
