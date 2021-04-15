const express = require('express');
const router = express.Router();
const Player = require('../../models/player');
const playercommands = require('./player');
const playcommands = require('./play');

router.use('/player', playercommands);
router.use('/play', playcommands);

/*
//Add a player to the database
router.post('/', async (req, res) => {
  const player = new Player({
    username: req.body.username,
    birthday: req.body.birthday
    });
  try{
    const savedPlayer = await player.save()
    res.json(savedPlayer);
  } catch (err) {
    res.json({ message: err });
  }
});

//Return all players stored in the database
router.get('/getplayers', async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (err) {
    res.json({message : err});
  }
});

//Get a specific player
router.get('/:playerId', async (req, res) => {
  try {
    const player = await Player.findById(req.params.playerId)
    res.json(player);
  } catch (err) {
    res.json({message : err});
  }
});
*/

module.exports = router;
