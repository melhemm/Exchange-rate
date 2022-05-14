import React from 'react'
import { useGetExchangeQuery } from '../services/exchangeApi'



export const Homepage = () => {
  const {data, isFetching} = useGetExchangeQuery();
  console.log(data);
  
  return (
    <div>Homepage</div>
  )
}
