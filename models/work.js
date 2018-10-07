module.exports = (sequelize, DataTypes) => {
    const work = sequelize.define("work", {
        workIdx: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT.UNSIGNED
        },
        cardIdx: {
            type: DataTypes.BIGINT.UNSIGNED
        },
        workType: {
            type: DataTypes.STRING(30)
        },
        name: {
            type: DataTypes.STRING
        },
        regDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        tableName: "work",
        timestamps: false,
        comment: "작업"
    });

    return work;
};