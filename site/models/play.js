var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PlaySchema = new Schema({
  player: { type: Schema.Types.ObjectId, ref: 'Player' },
  timeofplay: { type: Date, default: Date.now() },
  timewithoutdistraction: Number,
  timewithdistraction: Number
});

module.exports = mongoose.model('Play', PlaySchema );
