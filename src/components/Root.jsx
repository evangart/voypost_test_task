import React from "react"
import { Provider } from "react-redux"
import initStore from "../store"
import App from "./App.jsx"

export default (initialState) => {
  const store = initStore(initialState)

  return class Root extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      )
    }
  }
}