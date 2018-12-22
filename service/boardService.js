/**
 * 보드에 대한 일들은 이놈이 다할 거임
 */

const Board = require("../models").board;

const board = {
    create(userIdx) {
        return Board.create({ userIdx });
    },
    findByUser(userIdx) {
        // user 말고 다른 애들로도 찾을 수 있을 듯.... 일단 유저로... 나중에 수정할 때 추상화 ㄲㄲ
        return Board.findAll({
            where: {
                userIdx,
            },
        });
    },
    findByBoardIdx(boardIdx) {
        // board의 idx를 이용하여 찾을 수 있음
        // 유니크 하니까 하나만 나와야함 findAll 말고 find있으면 좋을것 같음.
        // list 아님 유일
        return Board.findOne({
            where: {
                boardIdx,
            },
        });
    },
    modify(boardIdx, res) {
        // FIXME : 여기 대충만 적어놨어여

        // res에 바꿀 내용 다 들어있음
        const targetBoard = this.findByBoardIdx(boardIdx);
        // 이름만 우선
        targetBoard.name = res.name;

        return targetBoard;
    },
    delete(boardIdx) {
        const targetBoard = this.findByBoardIdx(boardIdx);
        targetBoard.delflag = true;

        return targetBoard;
    },
    all() {
        // user 말고 다른 애들로도 찾을 수 있을 듯.... 일단 유저로... 나중에 수정할 때 추상화 ㄲㄲ
        return Board.all();
    }
};

module.exports = board;
