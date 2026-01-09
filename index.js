
const express = require("express");
const app = express();

console.log("starting server");

app.get("/", (req, res) => {
  res.json({ message: "Server is alive 🚀" });
});

const server = app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});

server.on("error", (err) => {
  console.error("Listen error:", err);
});
console.log("hello Dev this side!")
