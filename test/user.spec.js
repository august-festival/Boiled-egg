const assert = require("assert");
const sut = require("../service/userService");

describe("사용자 테스트", () => {
    describe("사용자를 추가할 수 있다.", () => {
        it("사용자는 아이디가 필수 값이다.", function() {
            user = User(null, '')
            assert(sut.save(user), false)
        });
    });
});
