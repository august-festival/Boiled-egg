module.exports = (sequelize, DataTypes) => {
    const board_favorite = sequelize.define("board_favorite", {
        userIdx: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.BIGINT.UNSIGNED
        },
        boardIdx: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.BIGINT.UNSIGNED
        }
    }, {
        tableName: "board_favorite",
        timestamps: false,
        comment: "보드 즐겨찾기"
    });

    return board_favorite;
};