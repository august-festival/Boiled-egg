module.exports = (sequelize, DataTypes) => {
    const comment = sequelize.define("comment", {
        commentIdx: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT.UNSIGNED
        },
        userIdx: {
            type: DataTypes.BIGINT.UNSIGNED
        },
        cardIdx: {
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