import React, { Component } from 'react'
import TextField from './components/TextField';
import Button from './components/Button';

export class ZipSearch extends Component {
  state = {
    zip: ''
  }

  onSelectZip = (event) => {
    onSelectZip = (event) => {
      this.setState({ searchField: 'zip' });
    }

    onSelectCity = (event) => {
      this.setState({ searchField: 'city' });
    }

    // Utility function
    search = (event) => {
      this.setState({ zip: event.target.value });
    }

    render() {
      return (
        <div className="input-group p-5" >
          <div className="input-group-prepend">
            <button className="btn btn-outline-secondary dropdown-toggle rounded-0" type="button" data-toggle="dropdown" onChange={this.onSearchFieldChange}>Search By</button>
            <div className="dropdown-menu">
              <a className="dropdown-item" onClick={this.onSelectCity}>Zip Code</a>
              <a className="dropdown-item" onClick={this.onSelectZip}>City</a>
            </div>
          </div>
          <TextField
            onChange={this.search}
            placeholder="e.g. 11223 or New York"
          />
          <div className="input-group-append">
            <Button className="btn-block rounded-0" onClick={this.search} />
          </div>
        </div>
      );
    }
  }

  export default ZipSearch
