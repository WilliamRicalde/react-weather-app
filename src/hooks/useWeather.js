import { useEffect, useState } from 'react'
import { reqRes } from '../axiosConf'

export const useWeather = () => {
  const [weather, setWeather] = useState(null)

  const getWeather = (city = 'auto:ip') => {
    reqRes.get('/v1/current.json', {
      params: {
        q: city
      }
    }).then(res => setWeather(res.data))
  }

  useEffect(() => {
    getWeather()
  }, [])

  return {
    getWeather,
    weather
  }
}
