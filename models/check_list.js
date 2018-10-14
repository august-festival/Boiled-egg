module.exports = (sequelize, DataTypes) => {
    const check_list = sequelize.define("check_list", {
        check_list_uuid: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1
        },
        workIdx: {
            type: DataTypes.BIGINT.UNSIGNED
        },
        name: {
            type: DataTypes.STRING
        },
        statusType: {
            type: DataTypes.STRING(30)
        }
    }, {
        tableName: "check_list",
        timestamps: false,
        comment: "체크리스트"
    });

    return check_list;
};