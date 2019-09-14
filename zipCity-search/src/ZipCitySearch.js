import React, { Component } from 'react'
import TextField from './components/TextField';
import Button from './components/Button';

export class ZipSearch extends Component {
  state = {
    search: '',
    searchField: 'zip'
  }

  onSelectZip = (event) => {
    this.setState({ searchField: 'zip' })
  }

  onSelectCity = (event) => {
    this.setState({ searchField: 'city' })
  }

  onChange = (event) => {
    this.setState({ search: event.target.value.toUpperCase() })
  }

  // Utility function
  search = (event) => {
    switch (this.state.searchField) {
      case 'city':
        fetch("http://ctp-zip-api.herokuapp.com/city/" + this.state.search)
          .then(result => result.json())
          .then(result => {
            for (var i = 0; i < result.length; i++) {
              this.fetchByZip(result[i])
            }
          });
        break;
      case 'zip':
        this.fetchByZip(this.state.search)
        break;
      default: break;
    }
  }

  fetchByZip(zip) {
    fetch("http://ctp-zip-api.herokuapp.com/zip/" + zip) 
      .then(result => result.json())
      .then(
        result => { this.props.onSearchResults(result) },
        error => { this.props.onNoResults(error) }
      )
  }

  render() {
    return (
      <div className="input-group p-5">
        <div className="input-group-prepend">
          <button className="btn btn-outline-secondary btn-block dropdown-toggle rounded-0" type="button" data-toggle="dropdown">{this.state.searchField}</button>
          <div className="dropdown-menu">
            <a className="dropdown-item" onClick={this.onSelectZip}>Zip Code</a>
            <a className="dropdown-item" onClick={this.onSelectCity}>City</a>
          </div>
        </div>
        <TextField
          onChange={this.onChange}
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
