const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Route หลัก
app.get("/", (req, res) => {
  res.send("Welcome to backend server!");
});

// API Hello
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// 🎮 API Minigame
app.get("/api/minigame", (req, res) => {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  if (randomNum === 5) {
    res.json({ number: randomNum, result: "🎉 คุณชนะ! ได้เลข 5" });
  } else {
    res.json({ number: randomNum, result: "😅 ลองใหม่อีกครั้ง..." });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
