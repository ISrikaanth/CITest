const express = require('express');

const router = express.Router();

/**
 * GET /status
 */
router.get('/api/status', (req, res) => res.send('OKK'));

module.exports = router;
