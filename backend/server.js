const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to backend server!");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
