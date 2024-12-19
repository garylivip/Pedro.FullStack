module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        username: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
    });
    
    Users.associate = (models) => {
        Users.hasMany(models.Posts, {
            onDelete: "cascade",
        });

        Users.hasMany(models.Likes, {
            onDelete: "cascade",
        });
    }


  return Users;
};
