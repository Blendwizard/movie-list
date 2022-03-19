import React from 'react';

const MovieListItem = (props) =>{

  var watchedStyle = {
    "display":"inline-block",
    "padding":"0.3em 1.2em",
    "margin":"0 0.1em 0.1em 1em",
    "color":"#00950F"
  };


  var unwatchedStyle = {
    "display":"inline-block",
    "padding":"0.3em 1.2em",
    "margin":"0 0.1em 0.1em 1em",
    "color":"red"
  };

  var toggleWatchStatus = function(event) {
    console.log("Clicked on a movie", props.movie.title, props.movie.watched);
    var movie = props.movie.title;
    var movie_id = props.movie.id;
    var watchedStatus = props.movie.watched;

    props.toggleStatus(movie_id, movie, watchedStatus);
  }


  return (
    <li>
      {props.movie.title}
      <button onClick={toggleWatchStatus} className="watch-btn" style={props.movie.watched === 'y' ? watchedStyle : unwatchedStyle}>{props.movie.watched === 'y' ? "Watched" : "Unwatched"}</button>
    </li>
  )
}


export default MovieListItem;