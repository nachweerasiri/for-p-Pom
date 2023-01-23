module.exports = (sequelize, DataType) => {
    const Post = sequelize.define(
        "Post",
        {
            title: {
                type: DataType.STRING,
                validate: {
                    notEmpty: true,
                },
            },
            image: {
                type: DataType.STRING,
                validate: {
                    notEmpty: true,
                },
            },
        },
        { underscored: true }
    );
    // ทำความ3000 กับ User
    Post.associate = db => {
        Post.belongsTo(db.User, {
            foreignKey: {
                name: "userId",
                allowNull: false,
            },
            onDelete: "RESTRICT",
        });

        Post.hasMany(db.Comment, {
            foreignKey: {
                name: "postId",
                allowNull: false,
            },
            onDelete: "RESTRICT",
        });

        Post.hasMany(db.Like, {
            foreignKey: {
                name: "postId",
                allowNull: false,
            },
            onDelete: "RESTRICT",
        });
    };

    return Post;
};
