const mongoose=require('mongoose')


const doctorscheme=new mongoose.Schema({

    username:{
        type:String,
        unique:true,
        required:true

    },
    password:{
        type:String,
        required:true
    },
    firstName:{
        type:String
    },
    image:{
        type:String
    }


})

let Doctor=mongoose.model('Doctor',doctorscheme,'doctor')

module.exports=Doctor