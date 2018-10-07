module.exports = (sequelize, DataTypes) => {
    const code = sequelize.define("code", {
        code: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING(30)
        },
        parentCode: {
            allowNull: true,
            primaryKey: true,
            type: DataTypes.STRING(30)
        },
        name: {
            type: DataTypes.STRING
        },
        descript: {
            type: DataTypes.STRING
        }
    }, {
        tableName: "code",
        timestamps: false,
        comment: "코드"
    });

    return code;
};