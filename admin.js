const express=require('express')
const app=express()

app.get('/find',(req,res)=>{
    res.json('in admin module find')
})

module.exports=app