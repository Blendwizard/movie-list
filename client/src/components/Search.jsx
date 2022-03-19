import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props)

  }


  handleChange(event) {
    this.props.filterMovies(event.target.value)
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log("submit handled", event.target.query.value);
    this.props.searchMovie(event.target.query.value);

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" name="query" placeholder="Search..." onChange={this.handleChange.bind(this)} />
        <input type="submit" value="Go!"/>
      </form>
    )
  }


}


export default SearchBar;
