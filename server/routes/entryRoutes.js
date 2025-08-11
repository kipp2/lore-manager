const express = require('express');
const router = express.Router();

// Example endpoint
router.get('/', (req, res) => {
  res.send('Entries API is working');
});

module.exports = router;
