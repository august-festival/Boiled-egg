const assert = require("assert");
const teamBoard = require("../service/permissionService");

describe("팀의 관리자는", () => {
    describe("#보드", () => {
        it("추가 할 수 있다", function () {
            assert(teamBoard({
                table: 'board',
                action: 'C',
                user_idx: 1,
                team_idx: 1
            }), true)
        });
        it("조회 할 수 있다", function () {
            assert(teamBoard({
                table: 'board',
                action: 'R',
                user_idx: 1,
                board_idx: 1
            }), true)
        });
        it("수정 할 수 있다", function () {
            assert(teamBoard({
                table: 'board',
                action: 'U',
                user_idx: 1,
                board_idx: 1
            }), true)
        });
        it("삭제 할 수 있다", function () {
            assert(teamBoard({
                table: 'board',
                action: 'D',
                user_idx: 1,
                board_idx: 1
            }), true)
        });
    });

    describe("#보드 즐겨찾기", () => {
        it("추가 할 수 있다", function () {
            assert(teamBoard({
                table: 'board_favorite',
                action: 'C',
                user_idx: 1,
                board_idx: 1
            }), true)
        });
        it("삭제 할 수 있다", function () {
            assert(teamBoard({
                table: 'board_favorite',
                action: 'D',
                user_idx: 1,
                board_idx: 1
            }), true)
        });
        it("수정 할 수 없다", function () {
            assert(teamBoard({
                table: 'board_favorite',
                action: 'U',
                user_idx: 1,
                board_idx: 1
            }), false)
        });
        it("조회 할 수 있다", function () {
            assert(teamBoard({
                table: 'board_favorite',
                action: 'R',
                user_idx: 1,
                board_idx: 1
            }), true)
        });
    });

    describe("#카드 멤버 할당", () => {
        it("추가 할 수 있다", function () {
            assert(teamBoard({
                table: 'card_assignee',
                action: 'C',
                user_idx: 1,
                card_idx: 1
            }), true)
        });
        it("삭제 할 수 있다", function () {
            assert(teamBoard({
                table: 'card_assignee',
                action: 'D',
                user_idx: 1,
                card_idx: 1
            }), true)
        });
        it("수정 할 수 있다", function () {
            assert(teamBoard({
                table: 'card_assignee',
                action: 'U',
                user_idx: 1,
                card_idx: 1
            }), true)
        });
        it("조회 할 수 있다", function () {
            assert(teamBoard({
                table: 'card_assignee',
                action: 'R',
                user_idx: 1,
                card_idx: 1
            }), true)
        });
    });

    describe("#작업리스트", () => {
        it("추가 할 수 있다", function () {
            assert(teamBoard({
                table: 'activity',
                action: 'C',
                user_idx: 1,
                board_idx: 1
            }), true)
        });
        it("삭제 할 수 있다", function () {
            assert(teamBoard({
                table: 'activity',
                action: 'D',
                user_idx: 1,
                board_idx: 1
            }), true)
        });
        it("수정 할 수 있다", function () {
            assert(teamBoard({
                table: 'activity',
                action: 'U',
                user_idx: 1,
                board_idx: 1
            }), true)
        });
        it("조회 할 수 있다", function () {
            assert(teamBoard({
                table: 'activity',
                action: 'R',
                user_idx: 1,
                board_idx: 1
            }), true)
        });
    });

    describe("#리스트", () => {
        it("추가 할 수 있다", function () {
            assert(teamBoard({
                table: 'list',
                action: 'C',
                user_idx: 1,
                board_idx: 1
            }), true)
        });
        it("삭제 할 수 있다", function () {
            assert(teamBoard({
                table: 'list',
                action: 'D',
                user_idx: 1,
                list_idx: 1
            }), true)
        });
        it("수정 할 수 있다", function () {
            assert(teamBoard({
                table: 'list',
                action: 'U',
                user_idx: 1,
                list_idx: 1
            }), true)
        });
        it("조회 할 수 있다", function () {
            assert(teamBoard({
                table: 'list',
                action: 'R',
                user_idx: 1,
                list_idx: 1
            }), true)
        });
    });

    describe("#카드", () => {
        it("추가 할 수 있다", function () {
            assert(teamBoard({
                table: 'card',
                action: 'C',
                user_idx: 1,
                list_idx: 1
            }), true)
        });
        it("삭제 할 수 있다", function () {
            assert(teamBoard({
                table: 'card',
                action: 'D',
                user_idx: 1,
                card_idx: 1
            }), true)
        });
        it("수정 할 수 있다", function () {
            assert(teamBoard({
                table: 'card',
                action: 'U',
                user_idx: 1,
                card_idx: 1
            }), true)
        });
        it("조회 할 수 있다", function () {
            assert(teamBoard({
                table: 'card',
                action: 'R',
                user_idx: 1,
                card_idx: 1
            }), true)
        });
    });

});

describe("팀의 사용자는", () => {
    describe("보드를 지울 수 없다...", () => {
        it("보드를  생성할때 이름은 필수값이다.", function () {
            user = User(null, '')
            assert(sut.save(user), false)
        });
    });
});