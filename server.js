const express = require("express")
const app = express()
const server = require("http").Server(app)
const io = require("socket.io")(server)
const path = require("path")

const db = require("./db")

const port = 3000

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/:file", (req, res) => {
  const file = req.params.file;
  switch (file) {
    case "favicon.ico":
      res.sendFile(path.join(__dirname, "favicon.ico"))
      break
    case "style.css":
      res.sendFile(path.join(__dirname, "style.css"))
      break
    case "client.js":
      res.sendFile(path.join(__dirname, "dist", "client.js"))
      break
    case "logo.svg":
      res.sendFile(path.join(__dirname, "logo.svg"))
      break
    default:
      res.redirect("/")
      break
  }
})

io.on("connection", (socket) => {
  console.log("=== Socket.io connected ===")

  socket.on("getTravelers", (cb) => cb(db))
})

server.listen(
  port,
  "localhost",
  console.log(`=== Server running on port ${port} ===`)
)