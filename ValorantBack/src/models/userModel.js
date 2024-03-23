const mongoose = require('mongoose');
const userSchema = new mongoose.Schema ({
    userName : String ,
    userEmail : String ,
    password : String ,
    
})

module.exports = mongoose.model ("User", userSchema)