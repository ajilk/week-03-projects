import React, { Component } from 'react'

export default class Zip extends Component {
  render() {
    return (
      <div className="card bg-light mb-3">
        <div className="text-left card-header">{this.props.zip}</div>
      </div >
    )
  }
}
