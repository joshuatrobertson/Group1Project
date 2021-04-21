var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  username: { type: String, required: [true, 'Please choose a username.'] },
  birthday: Date
});

PlayerSchema
  .virtual('age')
  .get(function () {
    return (Date.now.getYear() - this.birthday.getYear()).toString();
  });

module.exports = mongoose.model('Player', PlayerSchema );
