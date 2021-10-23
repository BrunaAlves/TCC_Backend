const express = require('express');
const cors = require('cors');

//environment variables
require('dotenv').config();
//database connection
const port = 3000;
require('./db/db');

const app = express();

app.use(cors());
app.use(express.json());

require('./app/controllers/index')(app);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});

/*
var express = require("express");
var mongoose = require("mongoose");

//environment variables
require('dotenv').config();
const dotenv = require("dotenv");
dotenv.config();
//database connection
var app = express();
const uri = process.env.ATLAS_URI;
console.log(uri);
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});
const connection = mongoose.connection;
connection.once('open', () => {
console.log("Connected Database Successfully");
});
app.listen(3000,function(req,res){
console.log("Server is started on port 3000");
});
 */