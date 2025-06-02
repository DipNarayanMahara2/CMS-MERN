const mongoose = require("mongoose");

exports.connectDB = async () => {
  //   const bd_key = process.env.DB_CONNECT;
  await mongoose.connect(
    "mongodb+srv://dipnarayanmahara28:mithun11@project1.b4mntu1.mongodb.net/?retryWrites=true&w=majority&appName=Project1"
  );
  console.log("Database Connected Successfully");
};
