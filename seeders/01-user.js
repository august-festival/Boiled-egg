"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("user", [
      {
        nickName : "love",
        email: "love80@naver.com",
        name: "김사랑",
        phone : "0108430433",
        languageType : "KOR",
        delFlag : "N",
      },
      {
        nickName : "hgd",
        email: "hgd@daum.com",
        name: "홍길동",
        phone : "01034430433",
        languageType : "KOR",
        delFlag : "N",
      },
      {
        nickName : "sonick",
        email: "son@gmail.com",
        name: "손흥민",
        phone : "01023643023",
        languageType : "KOR",
        delFlag : "N",
      },      
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("user", null, {});
  }
};