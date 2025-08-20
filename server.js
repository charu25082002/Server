const express = require("express");

const app = express();
const PORT = 5000;

// Default route
app.get("/", (req, res) => {
  res.send("🚀 HEllo Mental!");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
