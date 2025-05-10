// importing express
const express = require('express');
const { connectDB } = require('./database/database');
const Blog = require('./Model/BlogModal');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connecting to database

connectDB();

// GET API 

app.get('/', (req, res) => {
    // res.send('Hello World! Learning MERN Stack!');
    res.json({
        message: "Hello World! This is Home Page and I am Learning MERN Stack!",
        status: 200,
    })
})

// Create Blog API

app.post("/createBlog", async (req, res) => {

    // fist way to get data from body
    // const title = req.body.title;
    // const subTitle = req.body.subTitle;
    // const description = req.body.description;

    // second way to get data from body
    const { title, subTitle, description } = req.body;

    // inserting data into databse
    await Blog.create({
        title: title,
        subTitle: subTitle,
        description: description,
    })
    res.json({
        status: 201,
        message: "Blog Created Successfully!"
    })
})



app.listen(3000, () => {
    console.log('Server is running on port 3000');
})