import React from 'react'
import { Link } from 'react-router-dom'

export const MovieCard = (props) => {
  const { data } = props
  return (
    <Link to={`/movie/${data.imdbID}`}>
      <div>
        <h4>{data.Title} Year {data.Year}</h4>
        <img src={data.Poster} alt={data.title} />
      </div>
    </Link>
   
  )
}
