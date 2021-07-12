import axios from 'axios'

export const reqRes = axios.create({
  baseURL: 'http://api.weatherapi.com',
  params: {
    key: '15941ddd1b8e43e1829174148210907'
  }
})
