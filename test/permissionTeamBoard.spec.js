const assert = require("assert");
const permissionTeamBoard = require("../service/permissionTeamBoardService");


//==================== 관리자 ====================
describe("팀의 관리자는", () => {

    describe("#보드", () => {
        const permission = permissionTeamBoard('board');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(1, 1);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(1, 1);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(1, 1);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(1, 1);
            assert.equal(rs, true);
        });
    });

    describe("#보드 즐겨찾기", () => {
        const permission = permissionTeamBoard('board_favorite');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(1, 1);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(1, 1);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(1, 1);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(1, 1);
            assert.equal(rs, true);
        });
    });

    describe("#카드 멤버 할당", () => {
        const permission = permissionTeamBoard('card_assignee');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(1, 1);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(1, 1);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(1, 1);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(1, 1);
            assert.equal(rs, true);
        });
    });

    describe("#작업리스트", () => {
        const permission = permissionTeamBoard('activity');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(1, 1);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(1, 1);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(1, 1);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(1, 1);
            assert.equal(rs, true);
        });
    });

    describe("#리스트", () => {
        const permission = permissionTeamBoard('list');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(1, 1);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(1, 1);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(1, 1);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(1, 1);
            assert.equal(rs, true);
        });
    });

    describe("#카드", () => {
        const permission = permissionTeamBoard('card');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(1, 1);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(1, 1);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(1, 1);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(1, 1);
            assert.equal(rs, true);
        });
    });

    describe("#댓글", () => {
        const permission = permissionTeamBoard('comment');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(1, 1);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(1, 1);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(1, 1);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(1, 1);
            assert.equal(rs, true);
        });
    });

    describe("#작업정보", () => {
        const permission = permissionTeamBoard('work');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(1, 1);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(1, 1);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(1, 1);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(1, 1);
            assert.equal(rs, true);
        });
    });

    describe("#체크리스트", () => {
        const permission = permissionTeamBoard('check_list');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(1, 1);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(1, 1);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(1, 1);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(1, 1);
            assert.equal(rs, true);
        });
    });

    describe("#팀 멤버", () => {
        const permission = permissionTeamBoard('team_member');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(1, 1);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(1, 1);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(1, 1);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(1, 1);
            assert.equal(rs, true);
        });
    });

    describe("#팀 초대", () => {
        const permission = permissionTeamBoard('confirm_team');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(1, 1);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(1, 1);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(1, 1);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(1, 1);
            assert.equal(rs, true);
        });
    });

});
//==================== 관리자 END ====================









//==================== 일반사용자 ====================
describe("팀의 일반사용자는", () => {

    describe("#보드", () => {
        const permission = permissionTeamBoard('board');
        it("추가 할 수 없다", async () => {
            const rs = await permission.insert(2, 1);
            assert.equal(rs, false);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(2, 1);
            assert.equal(rs, true);
        });
        it("수정 할 수 없다", async () => {
            const rs = await permission.update(2, 1);
            assert.equal(rs, false);
        });
        it("삭제 할 수 없다", async () => {
            const rs = await permission.delete(2, 1);
            assert.equal(rs, false);
        });
    });

    describe("#보드 즐겨찾기", () => {
        const permission = permissionTeamBoard('board_favorite');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(2, 1);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(2, 1);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(2, 1);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(2, 1);
            assert.equal(rs, true);
        });
    });

    describe("#카드 멤버 할당", () => {
        const permission = permissionTeamBoard('card_assignee');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(2, 1);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(2, 1);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(2, 1);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(2, 1);
            assert.equal(rs, true);
        });
    });

    describe("#작업리스트", () => {
        const permission = permissionTeamBoard('activity');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(2, 1);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(2, 1);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(2, 1);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(2, 1);
            assert.equal(rs, true);
        });
    });

    describe("#리스트", () => {
        const permission = permissionTeamBoard('list');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(2, 1);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(2, 1);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(2, 1);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(2, 1);
            assert.equal(rs, true);
        });
    });

    describe("#카드", () => {
        const permission = permissionTeamBoard('card');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(2, 1);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(2, 1);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(2, 1);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(2, 1);
            assert.equal(rs, true);
        });
    });

    describe("#댓글", () => {
        const permission = permissionTeamBoard('comment');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(2, 1);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(2, 1);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(2, 1);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(2, 1);
            assert.equal(rs, true);
        });
    });

    describe("#작업정보", () => {
        const permission = permissionTeamBoard('work');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(2, 1);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(2, 1);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(2, 1);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(2, 1);
            assert.equal(rs, true);
        });
    });

    describe("#체크리스트", () => {
        const permission = permissionTeamBoard('check_list');
        it("추가 할 수 있다", async () => {
            const rs = await permission.insert(2, 1);
            assert.equal(rs, true);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(2, 1);
            assert.equal(rs, true);
        });
        it("수정 할 수 있다", async () => {
            const rs = await permission.update(2, 1);
            assert.equal(rs, true);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(2, 1);
            assert.equal(rs, true);
        });
    });

    describe("#팀 멤버", () => {
        const permission = permissionTeamBoard('team_member');
        it("추가 할 수 없다", async () => {
            const rs = await permission.insert(2, 1);
            assert.equal(rs, false);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(2, 1);
            assert.equal(rs, true);
        });
        it("수정 할 수 없다", async () => {
            const rs = await permission.update(2, 1);
            assert.equal(rs, false);
        });
        it("삭제 할 수 있다", async () => {
            const rs = await permission.delete(2, 1);
            assert.equal(rs, true);
        });
    });

    describe("#팀 초대", () => {
        const permission = permissionTeamBoard('confirm_team');
        it("추가 할 수 없다", async () => {
            const rs = await permission.insert(2, 1);
            assert.equal(rs, false);
        });
        it("조회 할 수 있다", async () => {
            const rs = await permission.select(2, 1);
            assert.equal(rs, true);
        });
        it("수정 할 수 없다", async () => {
            const rs = await permission.update(2, 1);
            assert.equal(rs, false);
        });
        it("삭제 할 수 없다", async () => {
            const rs = await permission.delete(2, 1);
            assert.equal(rs, false);
        });
    });

});
//==================== 일반사용자 END ====================