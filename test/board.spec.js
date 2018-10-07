const assert = require("assert");
const sut = require("../service/boardService");

describe("보드", () => {
    describe("생성할때", () => {
        it("보드의 소유자는 반드시 있어야 한다", async () => {
            // given
            const user_idx = 123; // dummy user 를 만들어사 가져오자...

            // when
            const created_board = await sut.create(user_idx);

            // then
            assert.notEqual(created_board, null);
        });
    });
    describe("조회할 때", () => {
        it("보드의 소유자로 조회할 수 있다", async () => {
            // given
            const user_idx = 123; // dummy user 를 만들어사 가져오자...
            const created_board = await sut.create(user_idx);

            // when
            const boards = await sut.findByUser(user_idx);

            // then
            console.log(boards.length);
            assert(boards.length > 0);
        });
    });
});
