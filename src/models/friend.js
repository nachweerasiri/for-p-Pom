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
    return Friend;
};
