"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("oauth_id", [
      {
        userIdx : 1,
        accessId: "love80@naver.com",
        accessToken: "23442JAFASKJF2423",
        providerType : "facebook",
      },
      {
        userIdx : 2,
        accessId: "hgd@daum.com",
        accessToken: "4242SDAKLFJSA44234234",
        providerType : "google",
      },
      {
        userIdx : 3,
        accessId: "son@gmail.com",
        accessToken: "jDdsd342131234234",
        providerType : "kakao",
      },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("oauth_id", null, {});
  }
};