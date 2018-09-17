module.exports = (sequelize, DataTypes) => {
    const card_assignee = sequelize.define("card_assignee", {
        user_idx: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.BIGINT.UNSIGNED
        },
        card_idx: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.BIGINT.UNSIGNED
        }
    }, {
        tableName: "card_assignee",
        timestamps: false,
        comment: "카드 멤버"
    });

    return card_assignee;
};