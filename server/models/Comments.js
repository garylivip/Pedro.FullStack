module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("Comments", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    commentBody: { type: DataTypes.TEXT, allowNull: false },    
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn("current_timestamp"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn("current_timestamp"),
    },
    username: { type: DataTypes.STRING, allowNull: false },
  });
  return Comments;
};
