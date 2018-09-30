module.exports = (sequelize, DataTypes) => {
    const team = sequelize.define("team", {
        team_idx: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.BIGINT.UNSIGNED
        },
        name: {
            type: DataTypes.STRING
        },
        visibilityType: {
            type: DataTypes.STRING(30)
        },
        delFlag: {
            type: DataTypes.CHAR(1),
            defaultValue: 'N'
        },
        regDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        tableName: "team",
        timestamps: false,
        comment: "팀"
    });

    return team;
};