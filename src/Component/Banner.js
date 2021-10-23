import React, { Component } from 'react';
import {GetMovies} from './GetMovies.js'

export default class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
     let movie = GetMovies.results[1]
    return (
      <>
         {
            movie === '' ?
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            :
            <div className="card banner-card">
              <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top banner-img"  />
              <div className="card-body banner-body">
                <h1 className="card-title banner-title" style = {{color : "white"}}>{movie.original_name} {movie.original_title}</h1>
                <p className="card-text banner-text">
                  {movie.overview}
                </p>
              </div>
            </div>
         }
      </>
    )
  }
}
