module.exports = (sequelize, DataTypes) => {
    const list = sequelize.define("list", {
        list_idx: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT.UNSIGNED
        },
        board_idx: {
            type: DataTypes.BIGINT.UNSIGNED
        },
        name: {
            type: DataTypes.STRING
        },
        displayOrder: {
            type: DataTypes.INTEGER
        },
        regDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        tableName: "list",
        timestamps: false,
        comment: "리스트"
    });

    return list;
};