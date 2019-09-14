import React, { Component } from 'react'

class TextField extends Component {
  render() {
    return (
      <input
        type="text"
        className="form-control"
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}>
      </input>
    );
  }
}

export default TextField