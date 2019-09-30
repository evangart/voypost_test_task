import io from "socket.io-client"
import React from "react"
import { render } from "react-dom"
import getRoot from "./components/Root.jsx"

const socket = io.connect()

socket.on("connect", () => {
  console.log("=== Socket.io connected ===")

  const Root = getRoot({ socket })

  render(<Root />, document.getElementById("root"))
})