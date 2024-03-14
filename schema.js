const mongoose = require("mongoose");


const Schema = mongoose.Schema;


const user = new Schema({
    name: String,
    age:Number,
    userId:String
});


const USER = mongoose.model("USER", user);

module.exports = USER;