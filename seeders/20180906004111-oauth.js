"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("oauth_id", [
      {
        user_idx : 1,
        accessId: "love80@naver.com",
        accessToken: "23442JAFASKJF2423",
        providerType : "facebook",
      },
      {
        user_idx : 2,
        accessId: "hgd@daum.com",
        accessToken: "4242SDAKLFJSA44234234",
        providerType : "google",
      },
      {
        user_idx : 3,
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