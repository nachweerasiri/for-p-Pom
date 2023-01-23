module.exports = (sequelize, DataType) => {
    const Like = sequelize.define("Like", {}, { underscored: true });
    return Like;
};
