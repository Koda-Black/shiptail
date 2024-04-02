const jwt = require("jsonwebtoken");
const User = require("../models/user");

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
      algorithm: "HS256",
    }
  );
};

const create = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      isAdmin: false,
    });

    if (!user) {
      res.status(400).send("Invalid username or password");
    }
    const token = generateToken(user);

    res.status(201).send({ user, token });
  } catch (err) {
    return res.status(500).send(err, { message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.get_user_by_email(email);

    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    if (password !== user.password) {
      return res.status(400).send("Invalid password");
    }

    const token = generateToken(user);
    return res.status(200).send({ user, token });
  } catch (err) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = { login, create };
