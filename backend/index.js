const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.PORT||3000;

// Path to the JSON file
const moviesFilePath = path.join(__dirname, "movies_data.json");

// Utility function to read the JSON file
function readMoviesData() {
  try {
    const data = fs.readFileSync(moviesFilePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading the JSON file:", err);
    return [];
  }
}

// ✅ Default route to prevent "Cannot GET /" error
app.get("/", (req, res) => {
  res.redirect("/movies");
});

// Route to get all movies
app.get("/movies", (req, res) => {
  const movies = readMoviesData();
  res.json(movies);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// how to run ??
// enter node index.js
// then after entering into locatHost change the path as '/movies'

