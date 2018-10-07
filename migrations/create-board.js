

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable("board", {
        boardIdx: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.BIGINT.UNSIGNED,
        },
        userIdx: {
            type: Sequelize.BIGINT.UNSIGNED,
        },
        teamIdx: {
            type: Sequelize.BIGINT.UNSIGNED,
        },
        name: {
            type: Sequelize.STRING,
        },
        boardType: {
            type: Sequelize.STRING(30),
        },
        visibilityType: {
            type: Sequelize.STRING(30),
        },
        delFlag: {
            type: Sequelize.CHAR(1),
            defaultValue: "N",
        },
        regDate: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
    }),
    down: (queryInterface, Sequelize) => queryInterface.dropTable("board"),
};
