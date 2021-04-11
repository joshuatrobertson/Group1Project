const express = require('express');
const router = express.Router();
// const data = require('./data.json')
var Play = require('../../models/play')

/* GET api listing. */
router.get('/', function (req, res) {
  // res.header("Content-Type",'application/json');
  // res.send(JSON.stringify(data));
  Play.
  find().
  select('timeofplay timewithoutdistraction timewithdistraction').
  exec(function (err, plays) {
    if (err) return handleError(err);
    res.send(JSON.stringify(plays[0]));
  });
});

module.exports = router;
