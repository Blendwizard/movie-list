import React from 'react';
import movies from '/client/src/data.js';
import MovieListItem from './MovieListItem.jsx';



const MovieList = (props) => (
  <ul>
    {props.movies.map(singleMovie =>
      <MovieListItem movie={singleMovie}/>
      )}
  </ul>
);


export default MovieList;