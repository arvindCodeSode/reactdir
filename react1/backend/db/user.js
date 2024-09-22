const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    ip:String,
    isActive:{
        type:Boolean,
        default:0
    },
    joinDate:{
        type:Date,
        required:true
    }
});

mongoose.exports = mongoose.model('users',userSchema);