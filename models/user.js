module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    user_idx: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT.UNSIGNED
    },
    nickName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    languageType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    delFlag: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue : "N"
    },
    regDate: {
      type: DataTypes.DATE, 
      defaultValue: DataTypes.NOW
    },
  }, {
    tableName: "user",
    timestamps: false,
    underscored : true,
    comment : "회원 사용자 테이블"
  });
  return user;
};


