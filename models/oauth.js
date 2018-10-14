module.exports = (sequelize, DataTypes) => {
  const oauthId = sequelize.define("oauth_id", {
    oauthIdx: {
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
    accessId: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    accessToken: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    providerType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    regDate: {
      type: DataTypes.DATE, 
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: "oauth_id",
    timestamps: false,
    underscored : true,
    comment : "Oauth 인증 테이블"
  });
  return oauthId;
};