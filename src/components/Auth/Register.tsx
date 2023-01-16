import React from 'react'
import { Button, InputContainer, InputField, InputLabel } from '../../styles'
import styles from './index.module.scss'


export default function Register() {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('submit')
    }
  return (
    <form className={styles.form}>
        <InputContainer>
            <InputLabel htmlFor="email">Email</InputLabel>
            <InputField type="email" id='email' />
        </InputContainer>
        <section className={styles.nameFieldRow}>
        <InputContainer >
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <InputField type="text" id='firstName' />
        </InputContainer>
        <InputContainer >
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <InputField type="text" id='lastName' />
        </InputContainer>
        </section>
        <InputContainer >
            <InputLabel htmlFor="password">Password</InputLabel>
            <InputField type="password" id='password' />
        </InputContainer>
        <Button type="submit" className={styles.button}>Register</Button>
    </form>
  )
}
