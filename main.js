const express=require('express')
const router=express()

const adminrouter=require('./admin')
const userrouter=require('./index')

router.use('/',userrouter)
router.use('/admin',adminrouter)



router.listen(4000)