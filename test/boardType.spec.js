const assert = require("assert");
const boardType = require("../service/boardTypeService");

describe("팀보드이면", () => {

    it("보드 idx", async () => {
        const rs = await boardType('board', 1);
        assert.equal(rs, "TEAM");
    });

    it("리스트 idx", async () => {
        const rs = await boardType('list', 1);
        assert.equal(rs, "TEAM");
    });

    it("카드 idx", async () => {
        const rs = await boardType('card', 1);
        assert.equal(rs, "TEAM");
    });

    it("댓글 idx", async () => {
        const rs = await boardType('comment', 1);
        assert.equal(rs, "TEAM");
    });

    it("작업정보 idx", async () => {
        const rs = await boardType('work', 1);
        assert.equal(rs, "TEAM");
    });

});

describe("개인보드이면", () => {

    it("보드 idx", async () => {
        const rs = await boardType('board', 2);
        assert.equal(rs, "USER");
    });

    it("리스트 idx", async () => {
        const rs = await boardType('list', 4);
        assert.equal(rs, "USER");
    });

    it("카드 idx", async () => {
        const rs = await boardType('card', 2);
        assert.equal(rs, "USER");
    });

    it("댓글 idx", async () => {
        const rs = await boardType('comment', 2);
        assert.equal(rs, "USER");
    });

    it("작업정보 idx", async () => {
        const rs = await boardType('work', 2);
        assert.equal(rs, "USER");
    });

});
