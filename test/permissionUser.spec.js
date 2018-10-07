const assert = require("assert");
const permissionUser = require("../service/permissionUserService");

describe("개인보드는", () => {

    describe("#보드", () => {
        const permission = permissionUser('board');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(1, 2);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(1, 2);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(1, 2);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(1, 2);
            assert.equal(rs, true);
        });
    });

    describe("#보드 즐겨찾기", () => {
        const permission = permissionUser('board_favorite');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(1, 2);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(1, 2);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(1, 2);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(1, 2);
            assert.equal(rs, true);
        });
    });

    describe("#카드 멤버 할당", () => {
        const permission = permissionUser('card_assignee');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(1, 2);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(1, 2);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(1, 2);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(1, 2);
            assert.equal(rs, true);
        });
    });

    describe("#작업리스트", () => {
        const permission = permissionUser('activity');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(1, 2);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(1, 2);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(1, 2);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(1, 2);
            assert.equal(rs, true);
        });
    });

    describe("#리스트", () => {
        const permission = permissionUser('list');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(1, 2);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(1, 4);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(1, 4);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(1, 4);
            assert.equal(rs, true);
        });
    });

    describe("#카드", () => {
        const permission = permissionUser('card');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(1, 4);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(1, 2);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(1, 2);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(1, 2);
            assert.equal(rs, true);
        });
    });

    describe("#댓글", () => {
        const permission = permissionUser('comment');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(1, 2);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(1, 2);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(1, 2);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(1, 2);
            assert.equal(rs, true);
        });
    });

    describe("#작업정보", () => {
        const permission = permissionUser('work');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(1, 2);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(1, 2);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(1, 2);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(1, 2);
            assert.equal(rs, true);
        });
    });

    describe("#체크리스트", () => {
        const permission = permissionUser('check_list');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(1, 2);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(1, 2);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(1, 2);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(1, 2);
            assert.equal(rs, true);
        });
    });

});