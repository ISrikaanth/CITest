const express = require('express');

const router = express.Router();

/**
 * GET /status
 */
router.get('/api/status', (req, res) => res.status(500).send('Error'));

router.get('/api/statuscd', (req, res) => res.send('OK CD'));

module.exports = router;
