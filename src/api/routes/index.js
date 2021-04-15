const express = require('express');

const router = express.Router();

/**
 * GET /status
 */
router.get('/api/status', (req, res) => res.send('OK'));

router.get('/api/status1', (req, res) => res.send('OK CD'));


module.exports = router;
