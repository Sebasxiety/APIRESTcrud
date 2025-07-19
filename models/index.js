const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_URI || 'postgres://postgres:postgres@localhost:5432/apirestcrud', {
  logging: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user');
db.Role = require('./role');
db.Permission = require('./permission');
db.Group = require('./group');
db.Session = require('./session');

db.Role.belongsToMany(db.Permission, { through: 'RolePermissions' });
db.Permission.belongsToMany(db.Role, { through: 'RolePermissions' });

db.User.belongsTo(db.Role);
db.Role.hasMany(db.User);

db.User.belongsToMany(db.Group, { through: 'UserGroups' });
db.Group.belongsToMany(db.User, { through: 'UserGroups' });

db.User.hasMany(db.Session);
db.Session.belongsTo(db.User);

module.exports = db;
