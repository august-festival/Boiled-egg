module.exports = (sequelize, DataTypes) => {
    const confirmTeam = sequelize.define("confirm_team", {
        team_idx: DataTypes.BIGINT,
        user_idx: DataTypes.BIGINT
    }, {});

    return confirmTeam;
};