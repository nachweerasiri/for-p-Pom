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
    return Post;
};
