const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_URI || 'postgres://postgres:123456@localhost:5432/apirestcrud',
  { logging: false }
);

const db = {
  Sequelize,    // la clase
  sequelize     // la instancia
};

// Registra cada modelo pasándole la instancia de Sequelize y DataTypes
db.User       = require('./user')(sequelize, DataTypes);
db.Role       = require('./role')(sequelize, DataTypes);
db.Permission = require('./permission')(sequelize, DataTypes);
db.Group      = require('./group')(sequelize, DataTypes);
db.Session    = require('./session')(sequelize, DataTypes);

// ——— Relaciones ———

// Roles ↔ Permisos (many-to-many)
db.Role.belongsToMany(db.Permission, { through: 'RolePermissions' });
db.Permission.belongsToMany(db.Role, { through: 'RolePermissions' });

// Usuario → Rol (many Users belong to one Role)
db.User.belongsTo(db.Role,    { foreignKey: 'roleId',   as: 'role' });
db.Role.hasMany(db.User,      { foreignKey: 'roleId',   as: 'users' });

// Usuarios ↔ Grupos (many-to-many)
db.User.belongsToMany(db.Group, { through: 'UserGroups', foreignKey: 'userId', otherKey: 'groupId' });
db.Group.belongsToMany(db.User, { through: 'UserGroups', foreignKey: 'groupId', otherKey: 'userId' });

// Usuario → Sesiones (one-to-many)
db.User.hasMany(db.Session,    { foreignKey: 'userId',   as: 'sessions' });
db.Session.belongsTo(db.User,  { foreignKey: 'userId',   as: 'user' });

module.exports = db;