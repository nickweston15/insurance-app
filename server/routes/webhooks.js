const express = require('express');
const router = express.Router();
const controller = require('../controllers/webhookController');

router.post('/security-scan', controller.handleSecurityScan);

module.exports = router;