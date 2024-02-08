const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({

    description : {type : String , required : true} ,
    image : {type : String , required : true} , 
    charge : {type : Number , required : true} , 
    bookedTimeSlots : [
        {
            from : {type : String , required : true},
            to : {type : String , required : true}
        }
    ] , 
}, {timestamps : true}

)
const servicemodel = mongoose.model('services' , serviceSchema)
module.exports = servicemodel