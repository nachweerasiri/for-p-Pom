module.exports = (sequelize, DataType) => {
    const Comment = sequelize.define(
        "Comment",
        {
            title: {
                type: DataType.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
        },
        { underscored: true }
    );
    return Comment;
};
