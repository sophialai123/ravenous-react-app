
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar";
import BusinessList from './components/BusinessList/BusinessList';
import React from 'react';
import { Yelp } from './util/Yelp';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    }

  }

  //no need to bind in constructor use Arrow Function
  searchYelp = (term, location, sortBy) => {
    //call Yelp.search()
    Yelp.search(term, location, sortBy)
      .then((businesses) => {
        this.setState({
          businesses: businesses //the returned array of businesses).
        })
      })
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`)
  }

  render() {
    return (
      <div className="App" >
        <h1>Ravenous</h1>
        {/* Set the searchYelp Prop in SearchBar  */}
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
