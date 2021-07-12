import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Temperature from './components/Temperature'
import WindAndHumidity from './components/WindAndHumidity'

const App = () => {
  return (
    <Body>
      <Navbar />
      <Temperature />
      <WindAndHumidity />
    </Body>
  )
}

const Body = styled.div`
 @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap');
 font-family: 'Nunito', sans-serif;
`

export default App
