const express = require('express');
const router = express.Router();
const Player = require('../../models/player');

//Add a player to the database
router.post('/', async (req, res) => {
  const player = new Player({
    email: req.body.email,
    birthday: req.body.birthday
    });
  try{
    const savedPlayer = await player.save()
    res.json(savedPlayer);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
