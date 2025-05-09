// importing express
const express = require('express');
const { connectDB } = require('./database/database');
const app = express();

// connecting to database
// First way to connect to database
// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://dipnarayanmahara28:Dipnarayanmahara@project1.b4mntu1.mongodb.net/?retryWrites=true&w=majority&appName=Project1")
//     .then(() => {
//         console.log("Database Connected Successfully");
//     })

// second way to connect to database
connectDB();

// GET API 

app.get('/', (req, res) => {
    // res.send('Hello World! Learning MERN Stack!');
    res.json({
        message: "Hello World! This is Home Page and I am Learning MERN Stack!",
        status: 200,
    })
})

app.get("/about", (req, res) => {
    res.json({
        message: "Hello World! This is About Page and I am Learning MERN Stack!",
        status: 200,
    })
})

app.get("/contact", (req, res) => {
    res.json({
        message: "Hello World! This is Contact Page and I am Learning MERN Stack!",
        status: 200,
    })
})
app.get("/services", (req, res) => {
    res.json({
        message: "Hello World! This is Services Page and I am Learning MERN Stack!",
        status: 200,
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})