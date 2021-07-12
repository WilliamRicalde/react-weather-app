import React from 'react'
import styled from 'styled-components'
import { useWeather } from '../hooks/useWeather'

const Temperature = () => {
  const { weather } = useWeather()

  return (
    <Wrapper>
      <Subwrapper>
        <Temp>{weather?.current?.temp_c} °C</Temp>
      </Subwrapper>
      <Subwrapper>
        <Icon src={weather?.current?.condition?.icon} />
        <Condition>{weather?.current?.condition?.text}</Condition>
      </Subwrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin: auto;
  margin-top: 0.5rem;
  padding: 1rem 0.5rem;
  background: linear-gradient(to right, #0575e6, #021b79);
  border-radius: 15px;
`

const Subwrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100%;
`

const Temp = styled.h3`
  font-size: 3rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
`

const Condition = styled.span`
  font-size: 16px;
  line-height: 20px;
  color: #fff;
`

const Icon = styled.img`
  width: 100px;
  height: 100px;
  margin-top: -0.5rem;
`

export default Temperature
