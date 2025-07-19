// models/session.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Session', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'sessions',
    timestamps: true
  });
};
