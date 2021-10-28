const path = require('path');
const router = require('express').Router();
const express = require('express');

router.use('/', express.static('./public/index.html'));
router.use('/notes', express.static('./public/notes.html'));

module.exports = router;