module.exports = (sequelize, DataTypes) => {
    const teamMember = sequelize.define("team_member", {
        team_idx: DataTypes.BIGINT,
        user_idx: DataTypes.BIGINT,
        roleType: DataTypes.STRING
    }, {});

    return teamMember;
};