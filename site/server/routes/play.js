const express = require('express');
const router = express.Router();
const Play = require('../../models/play');
const Player = require('../../models/player');

router.post('/', async (req, res) => {
  const player = await Player.find({email: req.body.email})
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

router.get('/:playerEmail', async (req, res) => {
  try {
    const player = await Player.find({email: req.params.playerEmail})
    const playerId = player[0]._id;
    const plays = await Play.find({player: playerId})
    res.json(plays);
  } catch (err) {
    res.json({message : err});
  }
});

router.get('/other/:playerEmail', async (req, res) => {
  try {
    const player = await Player.find({email: { $ne: req.params.playerEmail}})
    let playerId = player[0]._id;
    let plays = await Play.find({player: playerId})
    for (let i = 1; i < player.length; i++) {
       playerId = player[i]._id;
       let playstemp = await Play.find({player: playerId})
       plays.push(playstemp);
    }
    res.json(plays);
  } catch (err) {
    res.json({message : err});
  }
});



module.exports = router;
