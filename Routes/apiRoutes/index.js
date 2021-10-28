const express = require('express');
const router = express.Router();
const noteRoutes = require('./noteRoutes');
router.use('/notes', noteRoutes);

module.exports = router;
  