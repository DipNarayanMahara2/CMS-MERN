// importing express
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./database/database");
const Blog = require("./Model/BlogModal");
const app = express();

const router = require("./routes/authRoutes");

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// connecting to database

connectDB();

// GET API

app.get("/", (req, res) => {
  // res.send('Hello World! Learning MERN Stack!');
  res.render("home");
  // res.json({
  //     message: "Hello World! This is Home Page and I am Learning MERN Stack!",
  //     status: 200,
  // })
});

// auth route
app.use("", router);

// GET API to get all blogs
app.get("/blogs", async (req, res) => {
  // fetching all blogs from database
  const blogs = await Blog.find();
  if (blogs.length === 0) {
    return res.status(404).json({
      message: "No Blogs Found!",
    });
  } else {
    res.status(200).json({
      message: "All Blogs fetched successfully!",
      data: blogs,
    });
  }
});

// GET API to get single blog
app.get("/blogs/:id", async (req, res) => {
  // fetching single blog from database
  const blogId = req.params.id;
  const blog = await Blog.findById(blogId);
  if (!blog) {
    res.status(404).json({
      message: "Blog NOt found with this ID!",
    });
  } else {
    res.json({
      message: "Single Blog fetched successfully!",
      status: 200,
      data: blog,
    });
  }
});

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
  });
  res.status(201).json({
    message: "Blog Created Successfully!",
  });
});

// Update Blog APi
app.patch("/updateBlog/:id", async (req, res) => {
  // getting blog Id
  const blogId = req.params.id;
  // getting data form the body
  const { title, subTitle, description } = req.body;

  // updating blog in database
  const updateBlog = await Blog.findByIdAndUpdate(blogId, {
    title: title,
    subTitle: subTitle,
    description: description,
  });
  if (!updateBlog) {
    res.status(404).json({
      message: "Blog not found with this ID!",
    });
  } else {
    res.status(200).json({
      message: "Blog Updated Successfully!",
    });
  }
});

// Delete Blog API
app.delete("/deleteBlog/:id", async (req, res) => {
  // getting blog id
  const blogId = req.params.id;
  // deleting blog from database
  const deleteBlog = await Blog.findByIdAndDelete(blogId);
  if (deleteBlog) {
    res.status(200).json({
      message: "Blog Deleted Successfully!",
    });
  } else {
    res.status(404).json({
      message: "Blog Not found with this ID!",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
