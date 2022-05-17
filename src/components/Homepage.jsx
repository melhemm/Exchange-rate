import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { DropDown } from './DropDown';

export const Homepage = ({handleRatesChange}) => {
  const baseUrl = 'https://api.exchangerate.host/latest';
  const [exchange, setExchange] = useState([])
  const [selected, setSelected] = useState(exchange.data.rates[0])
  

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

      <Dropdown selected={selected} exchange={exchange} onSelectedChange={setSelected} />

    </div>
  )
}
