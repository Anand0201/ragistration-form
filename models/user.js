const mongoose = require('mongoose');

const userschema =new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    phone:{ 
        type:String,
        required:true
    },
    parentphone: {
        type:String,
        required:true
    },

    institute:{
        type:String,
        required:true
    },
    grade:{
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
});

exports.userschema = mongoose.model('User', userschema);