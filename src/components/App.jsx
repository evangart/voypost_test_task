import React from "react"
import Filter from "./Filter.jsx"
import TravellersList from "./TravellersList.jsx"

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <React.Fragment>
        <Filter />
        <TravellersList />
      </React.Fragment>
    )
  }
}