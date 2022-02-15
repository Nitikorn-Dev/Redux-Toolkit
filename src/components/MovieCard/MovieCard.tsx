import React from 'react'
import { useAppSelector } from '../../features/hooks'
import { selectMovie } from '../../features/movies/movieSlice'
import './MovieCard.scss';

interface MovieCardType {
  movie: Movie;
}
function MovieCard({ movie }: MovieCardType) {
  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-inner">
          <div className="card-top">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{movie.Title}</h4>
              <p>{movie.Year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard