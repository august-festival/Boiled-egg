module.exports = (sequelize, DataTypes) => {
    const team = sequelize.define("team", {
        team_idx: DataTypes.BIGINT,
        visibilityType: DataTypes.STRING,
        delFlag: DataTypes.CHAR,
        regDate: DataTypes.DATE
    }, {});

    return team;
};