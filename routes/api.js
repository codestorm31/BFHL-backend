// backend/routes/api.js
const express = require('express');
const router = express.Router();
const { handleGet, handlePost } = require('../controllers/dataControllers');

router.get('/', handleGet);
router.post('/', handlePost);

module.exports = router;
