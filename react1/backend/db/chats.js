const mongoose = require("mongoose");

let chatSchema = mongoose.Schema({
    userId:Number,
    chatId:Number,
    promptId:String,
    question:String,
    answer:String,
    location:String,
    ip:String,
    chatDate:Date,
    content:String
})
module.exports = mongoose.model("chats", chatSchema);