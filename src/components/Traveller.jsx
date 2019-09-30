import React from "react"

export default class Traveller extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const {
      fromName,
      toName,
      departAt,
      vehicle
    } = this.props

    const departDate = new Date(departAt)

    return (
      <li>
        <p>{`From: ${fromName}`}</p>
        <p>{`To: ${toName} `}</p>
        <p>{`Depart at: ${departDate.toLocaleDateString()}`}</p>
        <p>{`Vehicle: ${vehicle}`}</p>
      </li>
    )
  }
}