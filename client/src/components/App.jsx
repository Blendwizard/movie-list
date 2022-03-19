import React from 'react';
import SearchBar from './Search.jsx';
// import movies from '/client/src/data.js';
import MovieList from './MovieList.jsx';
import AddMovie from './AddMovie.jsx';
import WatchTabs from './WatchTabs.jsx'


class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      currentMovies: [],
      allMovies: [],
      filteredMovies: [],
      title: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/movies')
    .then(res=>res.json())
    .then(
      (movies) => {
        this.setState({
          allMovies: movies,
          currentMovies: movies
        })
      }
    )
  }


  //:::::::::::::::::::::: FUNCTIONS ::::::::::::::::::::::

  // Create GET request for onSubmit of Search
  searchMovie(query) {
    fetch(`http://localhost:3000/api/movies/search?term=${query}`)
    .then(res => res.json())
    .then(
      (results) => {
        console.log(results);
      }
    )
  }

  // Used when switching to 'unwatched' tab (**Should refactor to toggle between tabs instead**)
  switchToUnwatched() {
    this.setState({currentMovies: this.state.allMovies}, () => {
      var unwatchedMovies = this.state.currentMovies.filter(function(movie) {
        return movie.watched === 'n';
      })
      this.setState({currentMovies: unwatchedMovies});
    });
  }

  // Used to switch to 'watched' tab
  switchToWatched() {
    this.setState({currentMovies: this.state.allMovies}, () => {
      var watchedMovies = this.state.currentMovies.filter(function(movie) {
        return movie.watched === 'y';
      })
      this.setState({currentMovies: watchedMovies});
    });
  }


  // Adds a movie title to our list
  addMovieToList(title) {
    var movieBody = { title };
    // console.log(JSON.stringify(movieBody));

    fetch('http://localhost:3000/api/movies/',
      {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(movieBody)
      })

    this.setState({currentMovies: [...this.state.currentMovies].concat({title:title})})

  }

  // Handles the search functionality to find matches
  filterMovies(query) {
    var filtered = this.state.currentMovies.filter(function(movie) {
      return movie.title.includes(query);
    })
    this.setState({filteredMovies: filtered})
  }


  // Toggles a movies individual 'watched' status
  toggleStatus(movie_id, movie, watchedStatus) {
    // console.log(movie_id, movie);
    // Not currently making use of movie variable
    // Backend is up, now I need to change the state here to reflect the change
    var movieTitle = {movie};
    var watchStatus = {watchedStatus};
    console.log("MOVIE TITLE", movieTitle , "STATUS::", watchStatus);

    fetch(`http://localhost:3000/api/movies/${movie_id}`,
    {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(watchStatus)
    })

  }


  // ::::: RENDER :::::::

  // Renders all components on page
  render() {

    return (
      <div >
        <h1>Movie List</h1>
        <div><AddMovie addMovieToList={this.addMovieToList.bind(this)}/></div>
        <div><SearchBar filterMovies={this.filterMovies.bind(this)} searchMovie={this.searchMovie.bind(this)}/></div>
        <div><WatchTabs switchToUnwatched={this.switchToUnwatched.bind(this)} switchToWatched={this.switchToWatched.bind(this)}/> </div>
        <div><MovieList movies={this.state.filteredMovies.length > 0 ? this.state.filteredMovies : this.state.currentMovies} toggleStatus={this.toggleStatus.bind(this)}/></div>
      </div>
    )
  }

}


export default App;

