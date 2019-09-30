import React from "react"
import { connect } from "react-redux"
import { setFilter } from  "../actions"

class Filter extends React.Component {
  constructor(props) {
    super(props)
  }

  handleChange = (event) => {
    this.props.setFilter({
      [event.target.id]: event.target.value
    })
  }
  
  render() {
    const { fromName, toName } = this.props.filters

    return (
      <React.Fragment>
        <h3>Filter</h3>
        <form id="filter">
          <label htmlFor="fromName">From:</label>
          <input
            id="fromName"
            name="fromName"
            type="text"
            onChange={this.handleChange}
            value={fromName}
          />
          <label htmlFor="toName">To:</label>
          <input
            id="toName"
            name="toName"
            type="text"
            onChange={this.handleChange}
            value={toName}
          />
        </form>
      </React.Fragment>
    )
  }
}

export default connect(
  (state) => {
    return {
      filters: state.filters
    }
  },
  {
    setFilter
  }
)(Filter)