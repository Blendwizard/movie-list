import React from 'react';
import MovieListItem from './MovieListItem.jsx'
import movies from '/client/src/data.js';


class AddMovie extends React.Component {

  constructor(props) {
    super(props);

  }


  onSubmit(event) {
    event.preventDefault();

    this.props.addMovieToList(event.target.title.value);
  }

  onChange(event) {
    // console.log(event.target.value)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input
          type="text"
          name="title"
          placeholder="Add Title"
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Add"
          className="button"
        />
      </form>
    )
  }s

}

export default AddMovie;