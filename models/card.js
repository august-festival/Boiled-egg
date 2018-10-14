module.exports = (sequelize, DataTypes) => {
    const card = sequelize.define("card", {
        cardIdx: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT.UNSIGNED
        },
        listIdx: {
            type: DataTypes.BIGINT.UNSIGNED
        },
        name: {
            type: DataTypes.STRING
        },
        descript: {
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
        tableName: "card",
        timestamps: false,
        comment: "카드"
    });

    return card;
};