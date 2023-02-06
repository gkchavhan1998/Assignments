const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.send("error " + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.send("error " + err);
  }
});

router.post("/", async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    contactNumber: req.body.contactNumber,
    email: req.body.email,
    interest: req.body.interest,
  });

  try {
    const u1 = await user.save();
    res.json(u1);
  } catch (err) {
    res.send("error" + err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.subscription = req.body.subscription;
    const u1 = await user.save();
    res.json(u1);
  } catch (err) {
    res.send("error", err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    await user.remove();
    res.send("deleted");
  } catch (err) {
    res.send("error", err);
  }
});

module.exports = router;
