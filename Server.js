require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.urlencoded({extended:false, limit:"50mb"}));
app.use(express.json({limit:'50mb'}))


const port = process.env.port || 4000;

const userRout = require('./Routers/userRout');
app.use('/user', userRout);  

app.listen(port, ()=>{
    console.log(`my server is run on ${port}`)
});