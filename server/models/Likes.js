module.exports = (sequelize, DataTypes) => { 
    const Likes = sequelize.define('Likes', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    });

    // Likes.associate = (models) => {
    //     Likes.belongsTo(models.User, {
    //         foreignKey: 'userId',
    //         onDelete: 'CASCADE'
    //     });
    //     Likes.belongsTo(models.Post, {
    //         foreignKey: 'postId',
    //         onDelete: 'CASCADE'
    //     });
    // };

    return Likes;
};