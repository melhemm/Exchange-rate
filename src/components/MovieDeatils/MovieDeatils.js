import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieOrShowDeatil, getSelectedMovieOrShow } from '../../features/movies/movieSlice';

export const MovieDeatils = () => {
  const {imdbID} = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow)

  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDeatil(imdbID))
  }, [dispatch, imdbID])

  return (
    <div>
     <h1>MovieDeatils</h1> 
      <div>
        <h3>{data.Title} imdbRating: {data.imdbRating} Year: {data.Year} Genre: {data.Genre}</h3> 
        <img src={data.Poster} alt={data.Title} />
        <p>Actors: {data.Actors}</p>
        <p>Director: {data.Actors}</p>
        <p>Awards: {data.Awards}</p>
        <p>Language: {data.Language}</p>
        <p>Deatils: <br/> {data.Plot}</p>
      </div>
    </div>
  )
}
