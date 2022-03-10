import React from 'react';

const MovieListItem = (props) =>{

  var style = {
    "display":"inline-block",
   " padding":"0.3em 1.2em",
    "margin":"0 0.1em 0.1em 0",
    "color":"green",
  };


  return (
    <li>
      {props.movie.title}
      <button className="watch-btn" style={style}>Watched</button>
    </li>
  )
}


export default MovieListItem;