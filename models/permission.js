const { DataTypes } = require('sequelize');
const db = require('./index');

const Permission = db.sequelize.define('Permission', {
  name: { type: DataTypes.STRING, allowNull: false, unique: true }
});

module.exports = Permission;
