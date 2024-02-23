const mongoose=require('mongoose')

const person=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true

    }
})
const Person=mongoose.model('Person',person,'user')
module.exports=Person 