import React from 'react';
import movies from '/client/src/data.js';
import MovieListItem from './MovieListItem.jsx';



const MovieList = (props) => (
  <div>
    <ul>
      {props.movies.map(singleMovie =>
        <MovieListItem movie={singleMovie}/>
        )}
    </ul>
  </div>
);


export default MovieList;