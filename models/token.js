module.exports = (sequelize, DataTypes) => {
  const token = sequelize.define("token", {
    tokenIdx: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    userIdx: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: "user",
        key: "userIdx"
      },
    },
    oauthIdx: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: "oauth_id",
        key: "oauthIdx"
      },
    },    
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    tableName: "token",
    timestamps: true,
    underscored : true,
    comment : "login token table"
  });
  return token;
};
