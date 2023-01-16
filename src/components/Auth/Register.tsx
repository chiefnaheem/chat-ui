import React from 'react'
import { InputContainer, InputField, InputLabel } from '../../styles'
import styles from './index.module.scss'


export default function Register() {
  return (
    <form className={styles.form}>
        <InputContainer>
            <InputLabel>Email</InputLabel>
            <InputField />
        </InputContainer>
    </form>
  )
}
