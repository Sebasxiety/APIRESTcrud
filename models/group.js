const { DataTypes } = require('sequelize');
const db = require('./index');

const Group = db.sequelize.define('Group', {
  name: { type: DataTypes.STRING, allowNull: false, unique: true }
});

module.exports = Group;
