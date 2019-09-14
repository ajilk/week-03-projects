import React, { Component } from 'react';
import ZipCitySearch from './ZipCitySearch';
import City from './City';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: []
    }
    this.baseState = this.state
  }

  resetState = () => this.setState(this.baseState)

  updateResults = (cities) => {
    this.setState({ error: false, cities: cities });
  }

  onNoResults = (error) => {
    this.setState({ error });
  }

  render() {
    let result
    console.log(this.state.cities)
    if (this.state.error) result = <div>{this.state.error.toString()}</div>
    else { result = this.state.cities.map((city) => <City city={city} />) }
    return (
      <div className="App">
        <div className="App-header">
          <h1>City / Zip Code Search</h1>
        </div>
        <div className="container w-50 text-center">
          <ZipCitySearch onNoResults={this.onNoResults} onSearchResults={this.updateResults} />
          <div className="p-5">{result}</div>
        </div>
      </div >
    );
  }
}

export default App