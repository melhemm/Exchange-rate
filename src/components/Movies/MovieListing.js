import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import { MovieCard } from '../MovieCard/MovieCard'

export const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows)
  let renderMovies, renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <>
      <h2>Movies</h2>
      {renderMovies}

      <h3>Series</h3>
      {renderShows}
    </>
  )
}
