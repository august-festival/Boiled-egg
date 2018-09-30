/**
 * 보드타입 체크 서비스
 */

const {
    board,
    list,
    card,
    work,
    comment
} = require("../models");

// 보드타입체크 테이블분기 처리
const boardTypeTable = {
    // 보드
    board(option) {
        return boardType(option, "board_idx");
    },
    // 리스트
    list(option) {
        return boardType(option, "list_idx");
    },
    // 카드
    card(option) {
        return boardType(option, "card_idx");
    },
    // 댓글
    async comment(option) {
        const card_idx = await getCard_idx("comment_idx", option.idx);
        if (!card_idx) return null;
        option.idx = card_idx;
        return boardType(option, "card_idx");
    },
    // 작업정보
    async work(option) {
        const card_idx = await getCard_idx("work_idx", option.idx);
        if (!card_idx) return null;
        option.idx = card_idx;
        return boardType(option, "card_idx");
    },
    // 체크리스트
    async check_list(option) {
        const card_idx = await getCard_idx("work_idx", option.idx);
        if (!card_idx) return null;
        option.idx = card_idx;
        return boardType(option, "card_idx");
    }
};

// 보드타입 조회
async function getBoardType(board_idx) {
    const rs = await board.findOne({
        attributes: ["boardType"],
        where: {
            board_idx: board_idx
        }
    });
    return rs.dataValues.boardType;
}

// 보드시퀀스 조회
async function getBoard_idx(list_idx) {
    const rs = await list.findOne({
        attributes: ["board_idx"],
        where: {
            list_idx: list_idx
        }
    });
    return rs.dataValues.board_idx;
}

// 리스트시퀀스 조회
async function getList_idx(card_idx) {
    const rs = await card.findOne({
        attributes: ["list_idx"],
        where: {
            card_idx: card_idx
        }
    });
    return rs.dataValues.list_idx;
}

// 카드시퀀스 조회
async function getCard_idx(type, idx) {
    let rs = null;
    switch (type) {
        case "comment_idx":
            rs = await comment.findOne({
                attributes: ["card_idx"],
                where: {
                    comment_idx: idx
                }
            });
            break;
        case "work_idx":
            rs = await work.findOne({
                attributes: ["card_idx"],
                where: {
                    work_idx: idx
                }
            });
            break;
    }
    return rs.dataValues.card_idx;
}

// 시퀀스에 따른 분기 및 boardType 반환
async function boardType(option, idxType) {
    let boardType, board_idx, list_idx, card_idx;
    switch (idxType) {
        case "card_idx":
            if (idxType === "card_idx") card_idx = option.idx;
            list_idx = await getList_idx(card_idx);
            if (!list_idx) return null;
        case "list_idx":
            if (idxType === "list_idx") list_idx = option.idx;
            board_idx = await getBoard_idx(list_idx);
            if (!board_idx) return null;
        case "board_idx":
            if (idxType === "board_idx") board_idx = option.idx;
            boardType = await getBoardType(board_idx);
            if (!boardType) return null;
            break;
    }
    return boardType;
}

// 외부 인터페이스
module.exports = (table, idx) => {
    if(!(table && idx)) return null;
    return boardTypeTable[table]({
        table: table,
        idx: idx
    });
};