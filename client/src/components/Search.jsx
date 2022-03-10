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
    console.log("submit handled", event.target.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Search..." onChange={this.handleChange.bind(this)} />
        <input type="submit" value="Go!"/>
      </form>
    )
  }


}


export default SearchBar;
