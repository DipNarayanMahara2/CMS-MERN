

const mongoose = require("mongoose");

exports.connectDB = async () => {
    await mongoose.connect("mongodb+srv://dipnarayanmahara28:Dipnarayanmahara@project1.b4mntu1.mongodb.net/?retryWrites=true&w=majority&appName=Project1")
    console.log("Database Connected Successfully");
}