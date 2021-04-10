const express = require('express');
const router = express.Router();
const Player = require('../../models/player');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('Testing123');
});

router.get('/test', (req, res) => {
  res.send('Testing456');
});

router.post('/testdata', (req, res) => {
  const player = new Player({
    username: req.body.username
    });
  player.save()
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json({ message: err });
  });
});
module.exports = router;
