const express=require('express')
const app=express()

app.get('/userfind',(req,res)=>{
    res.json('in user module find')
})


module.exports=app