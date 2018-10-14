module.exports = (sequelize, DataTypes) => {
    const team_member = sequelize.define("team_member", {
        teamIdx: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.BIGINT.UNSIGNED
        },
        userIdx: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.BIGINT.UNSIGNED
        },
        roleType: {
            type: DataTypes.STRING(30)
        }
    }, {
        tableName: "team_member",
        timestamps: false,
        comment: "팀 멤버"
    });

    return team_member;
};