const { DataTypes } = require('sequelize');
const db = require('./index');

const Role = db.sequelize.define('Role', {
  name: { type: DataTypes.STRING, allowNull: false, unique: true }
});

module.exports = Role;
