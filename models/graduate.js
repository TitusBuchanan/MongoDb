const mongoose = require('mongoose');

const graduateSchema = new mongoose.Schema({
         name: {
        type: String,
        required: true,
        minlength:2,
        maxlength:20
    },
        lastName: {
        type: String,
        required: true,
        minlength:2,
        maxlength:20
    },
    jobTitle:{
        type:String,
        required:true,

    },
    companyName:{
        type:String,
        required:true,

    },
    keySkills:{
        type:String,
        required:true,
    },
    gitHub:{
        type:String,
        required:true,
    },
    linkedIn:{
        type:String,
        required:true
    },
    twitterName:{
        type:String,
        required:true
    }

});


module.exports = mongoose.model('Graduate', graduateSchema); //this model lets interact directly with the database using this schema