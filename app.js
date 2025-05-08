

const app = require('express')();

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