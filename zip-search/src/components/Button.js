import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <button 
        className={"btn btn-dark " + this.props.className}
        onClick={this.props.onClick}>{this.props.value || 'Search'}
      </button>
    );
  }
}

export default Button