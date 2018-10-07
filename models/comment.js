module.exports = (sequelize, DataTypes) => {
    const comment = sequelize.define("comment", {
        comment_idx: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT.UNSIGNED
        },
        user_idx: {
            type: DataTypes.BIGINT.UNSIGNED
        },
        card_idx: {
            type: DataTypes.BIGINT.UNSIGNED
        },
        comment: {
            type: DataTypes.STRING
        },
        regDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        tableName: "comment",
        timestamps: false,
        comment: "댓글"
    });

    return comment;
};