module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    postText: { type: DataTypes.TEXT, allowNull: false },
    userName: { type: DataTypes.STRING, allowNull: false },
    published: { type: DataTypes.BOOLEAN, defaultValue: false },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn("current_timestamp"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.fn("current_timestamp"),
    },
  });

  Posts.associate = (models) => {
    Posts.hasMany(models.Comments, {
      onDelete: "cascade",
    });

    Posts.hasMany(models.Likes, {
      onDelete: "cascade",
    });
  };



  return Posts;
};
