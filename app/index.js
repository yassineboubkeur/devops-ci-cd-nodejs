// index.js

const express = require('express');
const app = express();
const logger = require('./middlewares/logger');
const apiRoutes = require('./routes/api');

// Middleware
app.use(logger);
app.use(express.json()); // For future POST requests

// Routes
app.use('/', apiRoutes);

// Export app for testing
module.exports = app;

// Start server unless it is in test
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server located at http://localhost:${PORT}`);
  });
}
