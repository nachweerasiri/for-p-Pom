module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isEmail: true,
                },
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    notEmpty: true,
                },
            },
            mobile: {
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    is: /^[0-9]{10}$/,
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            profileImage: DataTypes.STRING,
            coverImage: DataTypes.STRING,
        },
        {
            underscored: true,
        }
    );
    return User;
};
