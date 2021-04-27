var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  email: { type: String, required: [true, 'Please enter your email.'], unique: true},
  birthday: Date
});

PlayerSchema
  .virtual('age')
  .get(function () {
    return (Date.now.getYear() - this.birthday.getYear()).toString();
  });

module.exports = mongoose.model('Player', PlayerSchema );
