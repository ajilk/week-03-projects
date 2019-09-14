import React, { Component } from 'react'

export default class City extends Component {
  render() {
    const { City: city, State: state, TotalWages: wages, Lat, Long, EstimatedPopulation: population } = this.props.city
    return (
      <div className="card bg-light mb-3">
        <div className="text-left card-header">{city}, {state} </div>
        <div className="row no-gutters">
          <div className="col p-0">
            <div className="card-body text-left">
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td style={{ width: "50%" }}><h5 className="font-weight-light"><b>Location:</b></h5></td>
                    <td><h5 className="font-weight-light">({Lat},{Long})</h5></td>
                  </tr>
                  <tr>
                    <td><h5 className="font-weight-light"><b>Population:</b></h5></td>
                    <td><h4 className="font-weight-light">{population} <small>(estimated)</small></h4></td>
                  </tr>
                  <tr>
                    <td><h5 className="font-weight-light"><b>Wages:</b></h5></td>
                    <td><h4 className="font-weight-light">{wages}</h4></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-4 p-0">
            <img src="https://picsum.photos/200/200/?random=2" className="card-img" alt="..." />
          </div>
        </div>
      </div>
    )
  }
}
