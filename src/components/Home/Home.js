import React, {useEffect} from 'react'
import { MovieListing } from '../Movies/MovieListing'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncShows())
  }, [dispatch]);

  return (
    <div>
      <MovieListing />
    </div>
  )
}
