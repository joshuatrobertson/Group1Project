const express = require('express');
const router = express.Router();
const Play = require('../../models/play');
const Player = require('../../models/player');

router.post('/', async (req, res) => {
  console.log("whatever");
  const player = await Player.find({username: req.body.username})
  const play = new Play({
    player: player[0]._id,
    timewithoutdistraction: req.body.time1,
    timewithdistraction: req.body.time2
    });
  try{
    const savedPlay = await play.save()
    res.json(savedPlay);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/:playerId', async (req, res) => {
  try {
    const plays = await Play.find({player: req.params.playerId})
    res.json(plays);
  } catch (err) {
    res.json({message : err});
  }
});

module.exports = router;
