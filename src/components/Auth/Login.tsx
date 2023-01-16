import React from 'react'
import { Button, InputContainer, InputField, InputLabel } from '../../styles'
import styles from './index.module.scss'

export default function Login() {
    return (
        <form className={styles.form}>
            <InputContainer>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputField type="email" id='email' />
            </InputContainer>

            <InputContainer className={styles.loginFormPassword}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <InputField type="password" id='password' />
            </InputContainer>
            <Button type="submit" className={styles.button}>Login</Button>
        </form>
      )
}
