import React from 'react'
import { Container, EmailInput, SignUpLink } from './styles'
import { signIn } from 'next-auth/react'

const Input = () => {
  return (
    <Container>
      <EmailInput placeholder="Email" />
      <SignUpLink onClick={() => signIn()}>Continue</SignUpLink>
    </Container>
  )
}

export default Input