module.exports = (sequelize, DataTypes) => {
    const activity = sequelize.define("activity", {
        board_idx: {
            type: DataTypes.BIGINT.UNSIGNED
        },
        user_idx: {
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