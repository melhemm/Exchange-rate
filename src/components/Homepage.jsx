import React, {useEffect, useState} from 'react'
import axios from 'axios'

export const Homepage = ({handleRatesChange}) => {
  const baseUrl = 'https://api.exchangerate.host/latest';
  const [exchange, setExchange] = useState([])

  

  useEffect(() => {
    axios.get(baseUrl)
    .then(response => {
      setExchange(response.data)
      console.log(response.data);
    }).catch(err => {
      console.log(err)
    })
  }, [setExchange]) 

  return (
    <div>
      <h1>{exchange.base}</h1>
      <h1>{exchange.date}</h1>

      <select defaultValue="" onChange={(e) => handleRatesChange(e.target.value)}> 
        <option value="Currency"></option>
        
      </select>
    </div>
  )
}
