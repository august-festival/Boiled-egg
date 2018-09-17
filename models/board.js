module.exports = (sequelize, DataTypes) => {
    const board = sequelize.define("board", {
        board_idx: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT.UNSIGNED
        },
        user_idx: {
            type: DataTypes.BIGINT.UNSIGNED
        },
        team_idx: {
            type: DataTypes.BIGINT.UNSIGNED
        },
        boardType: {
            type: DataTypes.STRING(30)
        },
        visibilityType: {
            type: DataTypes.STRING(30)
        },
        delFlag: {
            type: DataTypes.CHAR(1),
            defaultValue: "N"
        },
        regDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        tableName: "board",
        timestamps: false,
        comment: "보드"
    });

    return board;
};