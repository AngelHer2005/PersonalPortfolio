const express = require("express");
const path = require("path");
const homeRoutes = require("./routes/home");

const app = express();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", homeRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
