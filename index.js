const express=require('express')
const app=express()
const mongoose = require('mongoose');
const cors=require('cors');
const bcrypt=require('bcrypt')
const Person = require('./Person');
const Doctor = require('./doctor');
const jwt=require('jsonwebtoken')
const multer = require('multer');
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Use the original filename
    }
  });

  const upload = multer({ storage: storage });
  
 // Create a Multer instance

mongoose.connect('mongodb://127.0.0.1:27017/hospital')
  .then(() => console.log('Connected!'));

const db=mongoose.connection
app.use(express.json()) 
app.use(cors())
const saltrounds=10
app.post('/insert', upload.single('image'), async (req, res) => {
    console.log(req.body); // Contains form fields
    console.log(req.file); // Contains information about the uploaded file

    try {
        // Continue with your existing code to process the form data
        const hashPassword = await bcrypt.hash(req.body.password, saltrounds);
        console.log(hashPassword);

        let newdoctor = new Doctor({
            ...req.body,
            password: hashPassword,
            image: req.file.filename // Assuming you have a field for storing the image filename in your Doctor schema
        });

        console.log(newdoctor);

        let response = await newdoctor.save();
        console.log(response);
        res.json(response);
    } catch (e) {
        console.log(e.message);
    }
});

const verifyToken = (req, res, next) => {
  let token = req.headers['authorization'];
  console.log(token);
  token=token.split(' ')
  console.log(token[1]);

  if (!token[1]) {
    return res.status(403).json({ message: 'Token is not provided' });
  }

  jwt.verify(token[1], 'abc', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
    req.decoded = decoded;
    console.log(req.decoded,'asd');
    next();
  });
};



app.get('/find',verifyToken, async (req,res)=>{
    let response=await Doctor.find()
    // let response=await db.collection('doctor').find().toArray()
    console.log(response);
    res.json(response)
})

app.get('/FindOne/:id',async (req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await Doctor.findById(id)
    // let response=await db.collection('doctor').findOne({_id:id})
    console.log(response);
    res.json(response)

})

app.put('/update/:id',async(req,res)=>{
    let id=req.params.id
    let response=await Doctor.findByIdAndUpdate(id,req.body)
    // let response=await db.collection('doctor').updateOne({_id:id},{$set:req.body})
    console.log(response);
})

app.delete('/delete/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await Doctor.findByIdAndDelete(id)
    // let response=await db.collection('doctor').deleteOne({_id:id})
    console.log(response);
})


app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find the user in the database
        const user = await Doctor.findOne({ username });

        // Check if the user exists
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // If username and password are correct, send user data
        const token=jwt.sign({id:user.id,username:user.username},'abc');
        res.json({user,token});


    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/register',(req,res)=>{
    console.log('fdf');
res.send('register')
})

module.exports=app