import React from "react"
import { connect } from "react-redux"
import { getTravelers } from "../actions"
import { filteredMainTableBody } from "../selectors"
import Traveller from "./Traveller.jsx"

class TravellersList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getTravelers()
  }

  render() {
    const { travelers } = this.props

    if (travelers.length === 0) {
      return <h3>Sorry, there are no travellers</h3>
    }

    return (
      <React.Fragment>
        <h3>Travellers</h3>
        <ul id="travellersList">
          {
            travelers.map((traveler) => {
              const {
                id,
                fromName,
                toName,
                departAt,
                vehicle
              } = traveler

              return <Traveller
                key={id}
                fromName={fromName}
                toName={toName}
                departAt={departAt}
                vehicle={vehicle}
              />
            })
          }
        </ul>
      </React.Fragment>
    )
  }
}

export default connect(
  (state) => {
    return {
      travelers: filteredMainTableBody(state)
    }
  },
  {
    getTravelers
  }
)(TravellersList)