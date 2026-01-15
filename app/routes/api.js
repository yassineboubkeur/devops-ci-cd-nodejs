// routes/api.js

const express = require('express');
const router = express.Router();

// / => welcome message
router.get('/', (req, res) => {
  res.json({ message: "Welcome to the DevOps CI/CD Project!" });
});

// /health => health check
router.get('/health', (req, res) => {
  res.json({ status: "UP" });
});

// /users => mock users data
router.get('/users', (req, res) => {
  const users = [
    { id: 1, name: "Ahmed" },
    { id: 2, name: "Sara" },
    { id: 3, name: "Youssef" }
  ];
  res.json(users);
});

module.exports = router;
