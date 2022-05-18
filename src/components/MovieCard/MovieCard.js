import React from 'react'

export const MovieCard = (props) => {
  const { data } = props
  return (
    <div>
      <h4>{data.Title} Year {data.Year}</h4>
      <img src={data.Poster} alt={data.title} />
      
    </div>
  )
}
