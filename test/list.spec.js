const assert = require("assert");
const sut = require("../service/listService");

// 보드에 종속
describe("리스트", () => {
    describe("생성할때", () => {
        it("리스트를 소유하는 보드가 반드시 있어야 한다.", async () => {
            // given
            const userIdx = 123; // dummy user 를 만들어사 가져오자...
            const created_board = await sut.create(userIdx);

            // when
            const created_list = await sut.create(boardIdx);

            // then
            assert.notEqual(created_list, null);
        });
    });
});
