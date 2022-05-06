const mongoose = require('mongoose');
const {Schema} = mongoose;


const users = new Schema({
  
    username : String,
    firstname : String,
    lastname : String,
    password : String

})

module.exports = mongoose.model('users',users);
