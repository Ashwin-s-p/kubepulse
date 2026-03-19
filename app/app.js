const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("KubePulse Running 🚀");
});

app.get("/metrics", (req, res) => {
  res.set("Content-Type", "text/plain");
  res.send("kubepulse_up 1\n");
});

// 🔥 IMPORTANT FIX
app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});