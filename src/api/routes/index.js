const express = require('express');

const router = express.Router();

/**
 * GET /status
 */
router.get('/api/status', (req, res) => res.send('OK'));

router.get('/api/statuscd', (req, res) => res.send('OK'));

module.exports = router;
