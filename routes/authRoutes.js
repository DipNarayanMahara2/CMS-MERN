const {
  userRegister,
  userLogin,
} = require("../controller/authController/authController");

const router = require("express").Router();

// routes here

router.route("/register").post(userRegister);
router.route("/login").post(userLogin);

module.exports = router;
