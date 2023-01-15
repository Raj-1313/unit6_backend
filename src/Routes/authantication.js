const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const register = require("../Model/authantication_model");
const app = express.Router();

app.post("/register", async (req, res) => {
  const { email, password, name, mobile,category,country } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, secure_password) => {
      if (err) {
        console.log(err);
      } else {
        const encrypted = await register.create({
          email,
          password: secure_password,
          name,
          mobile,
          country,
          category
        });
        res.send({ message: "Successfully registered" });
      }
    });
  } catch (e) {}
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await register.find({ email });
    console.log(user)
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, function (err, result) {
        if (result) {
          const token = jwt.sign({ user_id: user[0]._id }, "robbing");
          res.send({ message: "Login successful", token: token });
        } else {
          res.send({ message: "Invalid Password" });
        }
      });
    } else {
      res.send({ message: "wrong credentials" });
    }
  } catch (e) {}
});

module.exports = app;
