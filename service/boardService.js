/**
 * 보드에 대한 일들은 이놈이 다할 거임
 */

// const Board = require("../models/board");
const Board = require("../models").board;

const board = {
    create(userIdx) {
        return Board.create({ user_idx: userIdx });
    },
    findByUser(userIdx) {
        // user 말고 다른 애들로도 찾을 수 있을 듯.... 일단 유저로... 나중에 수정할 때 추상화 ㄲㄲ
        return Board.findAll({
            where: {
                user_idx: userIdx,
            },
        });
    },
};

module.exports = board;
