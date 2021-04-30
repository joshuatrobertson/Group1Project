const express = require('express');
const router = express.Router();
const Player = require('../../models/player');
const playercommands = require('./player');
const playcommands = require('./play');

router.use('/player', playercommands);
router.use('/play', playcommands);

module.exports = router;
