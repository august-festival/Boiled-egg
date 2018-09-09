const assert = require("assert");
const sut = require("service/permissionService");

describe("팀의 관리자는", () => {
    describe("보드를 만들 수 있다..", () => {
        it("보드를  생성할때 이름은 필수값이다.", function() {
            user = User(null, '')
            assert(sut.save(user), false)
        });
        it("디스크립션은 옵셔널이다.", function() {
            user = User(null, '')
            assert(sut.save(user), false)
        });
    });
});

describe("팀의 사용자는", () => {
    describe("보드를 지울 수 없다...", () => {
        it("보드를  생성할때 이름은 필수값이다.", function() {
            user = User(null, '')
            assert(sut.save(user), false)
        });
    });
});
