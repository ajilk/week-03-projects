import React, { Component } from 'react';
import ZipSearch from './ZipSearch';
import './App.css';

function City(props) {
  return (<div></div>);
}

function ZipSearchField(props) {
  return (<div></div>);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>City / Zip Code Search</h1>
        </div>
        <div className="container w-50 text-center">
          <ZipSearch />
        </div>
      </div >
    );
  }
}

export default App