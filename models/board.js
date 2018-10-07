module.exports = (sequelize, DataTypes) => {
    const board = sequelize.define("board", {
        boardIdx: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT.UNSIGNED,
        },
        userIdx: {
            type: DataTypes.BIGINT.UNSIGNED,
        },
        teamIdx: {
            type: DataTypes.BIGINT.UNSIGNED,
        },
        name: {
            type: DataTypes.STRING
        },
        boardType: {
            type: DataTypes.STRING(30),
        },
        visibilityType: {
            type: DataTypes.STRING(30),
        },
        delFlag: {
            type: DataTypes.CHAR(1),
            defaultValue: "N",
        },
        regDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        tableName: "board",
        timestamps: false,
        comment: "보드",
    });

    return board;
};
