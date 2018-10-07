module.exports = (sequelize, DataTypes) => {
    const activity = sequelize.define("activity", {
        boardIdx: {
            type: DataTypes.BIGINT.UNSIGNED
        },
        userIdx: {
            type: DataTypes.BIGINT.UNSIGNED
        },
        descript: {
            type: DataTypes.STRING
        },
        activityType: {
            type: DataTypes.STRING(30)
        },
        url: {
            type: DataTypes.STRING
        },
        regDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        tableName: "activity",
        timestamps: false,
        comment: "작업기록"
    });

    return activity;
};