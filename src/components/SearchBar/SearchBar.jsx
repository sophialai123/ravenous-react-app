import React from "react";
import './SearchBar.css';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      term: " ",
      location: '',
      sortBy: 'best_match'

    }
    //set the values of those keys from API
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    }
  }

  //Get a Sort Option's Class
  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return "active";
    } else {
      return " ";
    }
  }

  //Handle a Change in Sort Option
  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption
    })
  }

  //Handle a Term Change
  //no need to bind this use Arrow Function
  handleTermChange = (event) => {
    this.setState({
      term: event.target.value
    })

  }

  //Handle Location Change
  handleLocationChange = (event) => {
    this.setState({
      location: event.target.value
    })

  }

  //Handle a Search
  handleSearch = (event) => {
    //use searchYelp props from APP parent
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
    event.preventDefault();

  }


  renderSortByOptions() {
    //Call the keys() method on the JavaScript Object library.
    return Object.keys(this.sortByOptions).map(sortByOption => {
      const sortByOptionValue = this.sortByOptions[sortByOption];

      return <li
        //Set the Class Name of a Sort Option
        className={this.getSortByClass(sortByOptionValue)}
        key={sortByOptionValue}
        // both bind to the current value of this (as we usually do in the constructor()) but also bind the current sortByOptionValue as the first argument to the method call, 
        onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
      >{sortByOption}</li>
    })

  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {/* <!-- Use .renderSortByOptions() to sort the businesses by their options --> */}
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <button onClick={this.handleSearch}>Let's Go</button>
        </div>
      </div>
    )
  }
}


export default SearchBar;