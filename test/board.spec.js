const assert = require("assert");
const sut = require("../service/boardService");

describe("보드", () => {
    describe("생성할때", () => {
        it("보드의 소유자는 반드시 있어야 한다", async () => {
            // given
            const userIdx = 123; // dummy user 를 만들어사 가져오자...

            // when
            const created_board = await sut.create(userIdx);

            // then
            assert.notEqual(created_board, null);
        });
    });
    describe("조회할 때", () => {
        it("보드의 소유자로 조회할 수 있다", async () => {
            // given
            const userIdx = 123; // dummy user 를 만들어사 가져오자...
            const created_board = await sut.create(userIdx);

            // when
            const boards = await sut.findByUser(userIdx);

            // then
            console.log(boards.length);
            assert(boards.length > 0);
        });
        it("visibility가 false이면 보이면 안됨", async () => {
            
        });
        if("visibility가 true인것만 보여야 한다", async () => {

        });
    });
    
    describe("수정할 때", () => {
        // given
        const user_idx = 123; // dummy user 를 만들어사 가져오자...
        const created_board = await sut.create(user_idx);
        const board_idx = created_board.boardIdx;
        var dict = {
            name: "toBe"
          };

        // when
        const modified_board = await sut.modify(board_idx, dict);
        

        // then
        console.log(modified_board.name);
        assert.equal(modified_board.name, dict.name);
    });
    describe("삭제할 때", () => {
        // given
        const user_idx = 123; // dummy user 를 만들어사 가져오자...
        const created_board = await sut.create(user_idx);
        const board_idx = created_board.boardIdx;
        const modified_board = await sut.delete(board_idx);

        // when
        const boards = await sut.findByBoardIdx(board_idx);

        // then
        console.log(boards.delFlag);
        assert.equal(boards.delFlag, false);
    });
});
