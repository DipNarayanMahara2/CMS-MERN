const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userEmail: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  userPassword: {
    type: String,
    required: [true, "Password is required"],
  },
  userName: {
    type: String,
    required: [true, "Username is required"],
  },
  userPhoneNumber: {
    type: Number,
    required: [true, "userPhoneNumber is required"],
  },
  role: {
    type: String,
    enum: ["users", "admin"],
    default: "users",
  },
});

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
