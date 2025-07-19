const db = require('../models');
const User = db.User;
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username, password } });
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret');
  res.json({ token });
};

exports.verify = (req, res, next) => {
  const header = req.headers['authorization'];
  if (!header) return res.status(401).json({ error: 'No token' });
  const [, token] = header.split(' ');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
