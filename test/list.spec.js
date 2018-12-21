const assert = require("assert");
const sut = require("../service/listService");

// 보드에 종속
describe("리스트", () => {
    describe.skip("생성할때", () => {
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

    describe("조회할 때", () => {
        it("리스트의 소유자로 조회할 수 있다", async () => {
            // given
            const userIdx = 123; // dummy user 를 만들어사 가져오자...
            const created_list = await sut.create(userIdx);

            // when
            const found_list = await sut.findByUser(userIdx);

            // then
            console.log(found_list.length);
            assert(found_list.length > 0);
        });
        it("visibility가 false이면 보이면 안됨", async () => {
            
        });
        if("visibility가 true인것만 보여야 한다", async () => {

        });
    });
    
    describe("수정할 때", async () => {
        // given
        const user_idx = 123; // dummy user 를 만들어사 가져오자...
        const created_list = await sut.create(user_idx);
        const list_idx = created_list.list_idx;
        
        var dict = {
            name: "toBe"
          };

        // when
        const modified_list = await sut.modify(list_idx, dict);
        
        // then
        console.log(modified_list.name);
        assert.equal(modified_list.name, dict.name);
    });
    describe("삭제할 때", async () => {
        // given
        const user_idx = 123; // dummy user 를 만들어사 가져오자...
        const created_list = await sut.create(user_idx);
        const list_idx = created_list.list_idx;

        // when
        const deleted_list = await sut.delete(list_idx);

        // then
        console.log(deleted_list.delFlag);
        assert.equal(deleted_list.delFlag, false);
    });
});
