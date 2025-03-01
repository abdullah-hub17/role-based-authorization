const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

const register = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // Creating Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creating new user
    const newUser = new User({ username, password: hashedPassword, role });

    // Saving the new user
    await newUser.save();

    // Response on saved user
    res
      .status(201)
      .json({ message: `User Registered with username ${username}` });
  } catch (error) {
    // Response on error
    res.status(500).json({ message: `Something went wrong` });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // To find via username
    const user = await User.findOne({ username });

    if (!user) {
      return res
        .status(404)
        .json({ message: `User with username ${username} not found` });
    }

    // Comparing the Password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: `Invalid Credentials` });
    }

    // Generating a token if everything went well
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Response once we have token
    res.status(200).json({ token });
  } catch (error) {
    // Response on error
    res.status(500).json({ message: `Something went wrong` });
  }
};

module.exports = { register, login };
