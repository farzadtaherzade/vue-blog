const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const auth = require("../middleware/auth")
const jwt = require("jsonwebtoken");
const Post = require("../models/Post");


//? Register user
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    const salt = await bcrypt.genSalt();

    const hashPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: hashPassword,
    });
    res.status(201).json('Register was success');
  } catch (err) {
    res.status(500).json(err);
  }
});

//? Login user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    const isEqual = await bcrypt.compare(password , user.password)

    if (user && isEqual) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.ACCESS_TOKEN_SECRET,
      );

      // user
      res.status(200).json(token);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    res.status(500).json(err);
  }
});

//? Update user
router.put("/:id", auth,async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = bcrypt.genSalt();
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can Update only your account!");
  }
});

//? Delete user
router.delete("/:id", auth, async (req, res) => {
  if (req.body.userId === req.params.id) {
    const user = await User.findById(req.params.id);
    if (user) {
      try {
        await User.findByIdAndDelete(req.params.id);
        await Post.deleteMany({author:user.username})
        res.status(200).json("User has been deleted...");
      } catch (err) {
        res.status(401).json(err);
      }
    } else {
      res.status(401).json("user not found");
    }
  } else {
    res.status(401).json("You can Delete only your account!");
  }
});

//? Get user
router.get("/", auth, async (req, res) => {
  try {
    const token = req.header('x-auth-token');

    const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decode.user_id);
    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
