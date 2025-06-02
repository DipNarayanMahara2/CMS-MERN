const Users = require("../../Model/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// User register Logic
exports.userRegister = async (req, res) => {
  const { email, password, userName, phoneNumber } = req.body;

  if (!email || !password || !userName || !phoneNumber) {
    res.status(400).json({
      message: "Please provide an email, password, username and phone number",
    });
  }

  const userFound = await Users.find({ userEmail: email });
  if (userFound.length > 0) {
    return res.status(400).json({
      message: "This email is already exists.",
    });
  }

  try {
    const newUser = await Users.create({
      userName: userName,
      userEmail: email,
      userPhoneNumber: phoneNumber,
      userPassword: bcrypt.hashSync(password, 10),
    });

    res.status(200).json({
      message: "User Registered Successfully",
      users: newUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong...",
    });
  }
};

// user Login
exports.userLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Please provide an email or password",
    });
  }

  // checking if user email exists or not
  const userFound = await Users.find({ userEmail: email });
  if (userFound.length == 0) {
    return res.status(404).json({
      message: "This email is not registered",
    });
  }

  // verifying email or password is worng
  const isPasswordMatched = bcrypt.compareSync(
    password,
    userFound[0].userPassword
  );
  if (isPasswordMatched) {
    const key = process.env.JWT_KEY;
    const token = jwt.sign({ id: userFound[0]._id }, key, {
      expiresIn: "30d",
    });

    res.status(200).json({
      message: "User loged in successfully.",
      token: token,
    });
  } else {
    res.status(400).json({
      message: "Invalid password or email",
    });
  }
};
