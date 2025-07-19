const { DataTypes } = require('sequelize');
const db = require('./index');

const Session = db.sequelize.define('Session', {
  token: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Session;
