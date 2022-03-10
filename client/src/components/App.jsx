import React from 'react';
import SearchBar from './Search.jsx';
import movies from '/client/src/data.js';
import MovieList from './MovieList.jsx';
import AddMovie from './AddMovie.jsx';
import WatchTabs from './WatchTabs.jsx'


class App extends React.Component {


  constructor(props) {
    super(props)

    this.state = {
      currentMovies: movies,
      filteredMovies: [],
      title: '',
    };
  }

  // Used when switching to 'unwatched' Tab
  switchToUnwatched() {
    this.setState({currentMovies: movies});
    setTimeout(() => {
      var unwatchedMovies = this.state.currentMovies.filter(function(movie) {
        return movie.watched === false;
      })
      this.setState({currentMovies: unwatchedMovies});

    }, 10)
  }


  switchToWatched() {
    this.setState({currentMovies: movies});
    setTimeout(() => {
      var watchedMovies = this.state.currentMovies.filter(function(movie) {
        return movie.watched === true;
      })
      this.setState({currentMovies: watchedMovies});
    }, 10)
  }



  // Adds a movie title to our list
  addMovieToList(title) {
    this.setState({currentMovies: [...this.state.currentMovies].concat({title:title})})
    console.log(this.state.currentMovies)

  }

  // Handles the search functionality to find matches
  filterMovies(query) {
    var filtered = this.state.currentMovies.filter(function(movie) {
      return movie.title.includes(query);
    })
    this.setState({filteredMovies: filtered})
  }

  // Renders all components on page
  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <div><AddMovie addMovieToList={this.addMovieToList.bind(this)}/></div>
        <div><SearchBar filterMovies={this.filterMovies.bind(this)}/></div>
        <div><WatchTabs switchToUnwatched={this.switchToUnwatched.bind(this)} switchToWatched={this.switchToWatched.bind(this)}/> </div>
        <div><MovieList movies={this.state.filteredMovies.length > 0 ? this.state.filteredMovies : this.state.currentMovies}/></div>
      </div>
    )
  }

}


export default App;

