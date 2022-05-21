import React, {useEffect} from 'react'
import { MovieListing } from '../Movies/MovieListing'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'

export const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const series = "Friends";

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(series))
  }, [dispatch]);

  return (
    <div>
      <MovieListing />
    </div>
  )
}
