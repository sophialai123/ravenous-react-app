import React from "react";
import './SearchBar.css';


//set the values of those keys from API
const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}


class SearchBar extends React.Component {

  renderSortByOptions() {

    //Call the keys() method on the JavaScript Object library.
    return Object.keys(sortByOptions).map(sortByOption => {
      const sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>
    })


  }

  render() {

    return (<div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {/* <!-- Use .renderSortByOptions() to sort the businesses by their options --> */}
          {this.renderSortByOptions()}
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <a >Let's Go</a>
      </div>
    </div>)

  }

}


export default SearchBar;