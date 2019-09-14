import React, { Component } from 'react';
import ZipCitySearch from './ZipCitySearch';
import City from './City';
import Zip from './Zip';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: [],
      zips: []
    }
    this.baseState = this.state
  }

  resetState = () => this.setState(this.baseState)

  updateResults = (dataType, data) => {
    this.resetState()
    if (dataType === 'zip') { this.setState({ zips: data }) }
    else if (dataType === 'city') { this.setState({ cities: data }) }
  }

  onNoResults = (error) => this.resetState()

  render() {
    let result
    if (this.state.cities.length) { result = this.state.cities.map((city) => <City key={city.RecordNumber} city={city} />) }
    else if (this.state.zips.length) { result = this.state.zips.map((zip) => <Zip key={zip} zip={zip} />) }
    else result = <div>NO RESULTS</div>
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