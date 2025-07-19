const db = require('../models');
const Session = db.Session;

exports.list = async (req, res) => {
  const data = await Session.findAll();
  res.json(data);
};

exports.get = async (req, res) => {
  const item = await Session.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
};

exports.create = async (req, res) => {
  const item = await Session.create(req.body);
  res.status(201).json(item);
};

exports.update = async (req, res) => {
  const item = await Session.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: 'Not found' });
  await item.update(req.body);
  res.json(item);
};

exports.remove = async (req, res) => {
  const item = await Session.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: 'Not found' });
  await item.destroy();
  res.json({ message: 'deleted' });
};
