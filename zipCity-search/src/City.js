import React, { Component } from 'react'

export default class City extends Component {
  render() {
    const { City: city, State: state, TotalWages: wages, Lat, Long, EstimatedPopulation: population } = this.props.city
    return (
      <div className="card bg-light mb-3">
        <div className="text-left card-header">{city}, {state} </div>
        <div className="row no-gutters">
          <div className="col">
            <div className="card-body text-left">
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td><h5 className="font-weight-light"><b>Location:</b></h5></td>
                    <td><h4 className="font-weight-light">({Lat}, {Long})</h4></td>
                  </tr>
                  <tr>
                    <td><h5 className="font-weight-light"><b>Population (estimated):</b></h5></td>
                    <td><h4 className="font-weight-light">{population}</h4></td>
                  </tr>
                  <tr>
                    <td><h5 className="font-weight-light"><b>Wages:</b></h5></td>
                    <td><h4 className="font-weight-light">{wages}</h4></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-4">
            <img src="https://picsum.photos/200/200/?random=2" class="card-img" alt="..." />
          </div>
        </div>
      </div>
    )
  }
}
