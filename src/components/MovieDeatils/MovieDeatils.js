import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieOrShowDeatil, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../features/movies/movieSlice';

export const MovieDeatils = () => {
  const {imdbID} = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow)

  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDeatil(imdbID))
    return () => {
      dispatch(removeSelectedMovieOrShow())
    }
  }, [dispatch, imdbID])

  return (
    <div>
    {Object.keys(data).length === 0 ? (<div>...Loading</div>)
     :(
        <>
          <div>
            <h3>{data.Title} imdbRating: {data.imdbRating} Year: {data.Year} Genre: {data.Genre}</h3> 
            <img src={data.Poster} alt={data.Title} />
            <p>Actors: {data.Actors}</p>
            <p>Director: {data.Actors}</p>
            <p>Awards: {data.Awards}</p>
            <p>Language: {data.Language}</p>
            <p>Deatils: <br/> {data.Plot}</p>
          </div>
        </>
      )}
    </div>
  )
}
