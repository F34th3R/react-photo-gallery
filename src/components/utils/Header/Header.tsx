import React from 'react'
import { Title } from '../../shared'

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <Title>
      <div style={{ marginTop: '20px' }} />
      <h1>Memories gallery</h1>
      <h2>Your Pictures</h2>
      <div style={{ marginTop: '10px' }} />
      <p>Every memory has its photo</p>
    </Title>
  )
}
