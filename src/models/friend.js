const { FRIEND_ACCEPTED, FRIEND_PENDING } = require("../config/constants");

module.exports = (sequelize, DataType) => {
    const Friend = sequelize.define(
        "Friend",
        {
            status: {
                type: DataType.ENUM(FRIEND_PENDING, FRIEND_ACCEPTED),
                allowNull: false,
                defaultValue: FRIEND_PENDING,
            },
        },
        { underscored: true }
    );

    Friend.associate = db => {
        Friend.belongsTo(db.User, {
            as: "Requester",
            foreignKey: {
                name: "requesterId",
                allowNull: false,
            },
            onDelete: "RESTRICT",
        });

        Friend.belongsTo(db.User, {
            as: "Accepter",
            foreignKey: {
                name: "accepterId",
                allowNull: false,
            },
            onDelete: "RESTRICT",
        });
    };

    return Friend;
};
