const assert = require("assert");
const teamBoard = require("../service/permissionTeamBoardService");

describe("팀의 관리자는", () => {
    describe("#보드", () => {
        it("추가 할 수 있다", function () {
            assert(teamBoard.get({
                table: 'board',
                action: 'C',
                user_idx: 1,
                team_idx: 1
            }), true)
        });
        it("조회 할 수 있다", function () {
            assert(teamBoard.get({
                table: 'board',
                action: 'R',
                user_idx: 1,
                board_idx: 1
            }), true)
        });
        it("수정 할 수 있다", function () {
            assert(teamBoard.get({
                table: 'board',
                action: 'U',
                user_idx: 1,
                board_idx: 1
            }), true)
        });
        it("삭제 할 수 있다", function () {
            assert(teamBoard.get({
                table: 'board',
                action: 'D',
                user_idx: 1,
                board_idx: 1
            }), true)
        });
    });

    describe("#보드 즐겨찾기", () => {
        it("추가 할 수 있다", function () {
            assert(teamBoard.get({
                table: 'board_favorite',
                action: 'C',
                user_idx: 1,
                board_idx: 1
            }), true)
        });
        it("삭제 할 수 있다", function () {
            assert(teamBoard.get({
                table: 'board_favorite',
                action: 'D',
                user_idx: 1,
                board_idx: 1
            }), true)
        });
        it("수정 할 수 없다", function () {
            assert(teamBoard.get({
                table: 'board_favorite',
                action: 'U',
                user_idx: 1,
                board_idx: 1
            }), false)
        });
        it("조회 할 수 있다", function () {
            assert(teamBoard.get({
                table: 'board_favorite',
                action: 'R',
                user_idx: 1,
                board_idx: 1
            }), true)
        });
    });

    describe("#카드 멤버 할당", () => {
        it("추가 할 수 있다", function () {
            assert(teamBoard.get({
                table: 'card_assignee',
                action: 'C',
                user_idx: 1,
                card_idx: 1
            }), true)
        });
        it("삭제 할 수 있다", function () {
            assert(teamBoard.get({
                table: 'card_assignee',
                action: 'D',
                user_idx: 1,
                card_idx: 1
            }), true)
        });
        it("수정 할 수 있다", function () {
            assert(teamBoard.get({
                table: 'card_assignee',
                action: 'U',
                user_idx: 1,
                card_idx: 1
            }), true)
        });
        it("조회 할 수 있다", function () {
            assert(teamBoard.get({
                table: 'card_assignee',
                action: 'R',
                user_idx: 1,
                card_idx: 1
            }), true)
        });
    });

    describe("#작업리스트", () => {
        it("추가 할 수 있다", function () {
            assert(teamBoard.get({
                table: 'activity',
                action: 'C',
                user_idx: 1,
                board_idx: 1
            }), true)
        });
        it("삭제 할 수 있다", function () {
            assert(teamBoard.get({
                table: 'activity',
                action: 'D',
                user_idx: 1,
                board_idx: 1
            }), true)
        });
        it("수정 할 수 있다", function () {
            assert(teamBoard.get({
                table: 'activity',
                action: 'U',
                user_idx: 1,
                board_idx: 1
            }), true)
        });
        it("조회 할 수 있다", function () {
            assert(teamBoard.get({
                table: 'activity',
                action: 'R',
                user_idx: 1,
                board_idx: 1
            }), true)
        });
    });

    describe("#리스트", () => {
        it("추가 할 수 있다", function () {
            assert(teamBoard.get({
                table: 'list',
                action: 'C',
                user_idx: 1,
                board_idx: 1
            }), true)
        });
        it("삭제 할 수 있다", function () {
            assert(teamBoard.get({
                table: 'list',
                action: 'D',
                user_idx: 1,
                list_idx: 1
            }), true)
        });
        it("수정 할 수 있다", function () {
            assert(teamBoard.get({
                table: 'list',
                action: 'U',
                user_idx: 1,
                list_idx: 1
            }), true)
        });
        it("조회 할 수 있다", function () {
            assert(teamBoard.get({
                table: 'list',
                action: 'R',
                user_idx: 1,
                list_idx: 1
            }), true)
        });
    });

    describe("#카드", () => {
        it("추가 할 수 있다", function () {
            assert(teamBoard.get({
                table: 'card',
                action: 'C',
                user_idx: 1,
                list_idx: 1
            }), true)
        });
        it("삭제 할 수 있다", function () {
            assert(teamBoard.get({
                table: 'card',
                action: 'D',
                user_idx: 1,
                card_idx: 1
            }), true)
        });
        it("수정 할 수 있다", function () {
            assert(teamBoard.get({
                table: 'card',
                action: 'U',
                user_idx: 1,
                card_idx: 1
            }), true)
        });
        it("조회 할 수 있다", function () {
            assert(teamBoard.get({
                table: 'card',
                action: 'R',
                user_idx: 1,
                card_idx: 1
            }), true)
        });
    });

});