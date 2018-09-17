module.exports = (sequelize, DataTypes) => {
    const board_favorite = sequelize.define("board_favorite", {
        user_idx: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.BIGINT.UNSIGNED
        },
        board_idx: {
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