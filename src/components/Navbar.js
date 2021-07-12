import React from 'react'
import styled from 'styled-components'
import { useWeather } from '../hooks/useWeather'

const Navbar = () => {
  const { weather } = useWeather()

  return (
    <Navigation>
      <Title>{weather?.location?.name}</Title>

      <Span>Search</Span>
    </Navigation>
  )
}

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`

const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
`

const Span = styled.span`
  font-size: 16px;
`

export default Navbar
