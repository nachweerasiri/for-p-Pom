const db = require(".");

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
    // ทำความ3000 กับ Post ที่เป็น many (กล่าวคือ User has many)
    User.associate = db => {
        User.hasMany(db.Post, {
            foreignKey: {
                name: "userId",
                allowNull: false,
            },
            onDelete: "RESTRICT",
        });

        User.hasMany(db.Comment, {
            foreignKey: {
                name: "userId",
                allowNull: false,
            },
            onDelete: "RESTRICT",
        });

        User.hasMany(db.Like, {
            foreignKey: {
                name: "userId",
                allowNull: false,
            },
            onDelete: "RESTRICT",
        });

        User.hasMany(db.Friend, {
            as: "Requester",
            foreignKey: {
                name: "requesterId",
                allowNull: false,
            },
            onDelete: "RESTRICT",
        });

        User.hasMany(db.Friend, {
            as: "Accepter",
            foreignKey: {
                name: "accepterId",
                allowNull: false,
            },
            onDelete: "RESTRICT",
        });
    };

    return User;
};
