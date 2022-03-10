import React from 'react';
import SearchBar from './Search.jsx';
import movies from '/client/src/data.js';
import MovieList from './MovieList.jsx';
import AddMovie from './AddMovie.jsx';


class App extends React.Component {


  constructor(props) {
    super(props)

    this.state = {
      currentMovies: movies,
      filteredMovies: [],
      title: ''
    };
  }



  addMovieToList(title) {
    this.setState({currentMovies: [...this.state.currentMovies].concat({title:title})})
    console.log(this.state.currentMovies)

  }



  filterMovies(query) {
    var filtered = this.state.currentMovies.filter(function(movie) {
      // console.log(query)
      return movie.title.includes(query);
    })
    // console.log("filtered", filtered);
    this.setState({filteredMovies: filtered})
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <div><AddMovie addMovieToList={this.addMovieToList.bind(this)}/></div>
        <div><SearchBar filterMovies={this.filterMovies.bind(this)}/></div>
        <div><MovieList movies={this.state.filteredMovies.length > 0 ? this.state.filteredMovies : this.state.currentMovies}/></div>
      </div>
    )
  }

}


export default App;

