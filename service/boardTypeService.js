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
        return boardType(option, "boardIdx");
    },
    // 리스트
    list(option) {
        return boardType(option, "listIdx");
    },
    // 카드
    card(option) {
        return boardType(option, "cardIdx");
    },
    // 댓글
    async comment(option) {
        const cardIdx = await getCardIdx("commentIdx", option.idx);
        if (!cardIdx) return null;
        option.idx = cardIdx;
        return boardType(option, "cardIdx");
    },
    // 작업정보
    async work(option) {
        const cardIdx = await getCardIdx("workIdx", option.idx);
        if (!cardIdx) return null;
        option.idx = cardIdx;
        return boardType(option, "cardIdx");
    },
    // 체크리스트
    async check_list(option) {
        const cardIdx = await getCardIdx("workIdx", option.idx);
        if (!cardIdx) return null;
        option.idx = cardIdx;
        return boardType(option, "cardIdx");
    }
};

// 보드타입 조회
async function getBoardType(boardIdx) {
    const rs = await board.findOne({
        attributes: ["boardType"],
        where: {
            boardIdx: boardIdx
        }
    });
    return rs.dataValues.boardType;
}

// 보드시퀀스 조회
async function getBoardIdx(listIdx) {
    const rs = await list.findOne({
        attributes: ["boardIdx"],
        where: {
            listIdx: listIdx
        }
    });
    return rs.dataValues.boardIdx;
}

// 리스트시퀀스 조회
async function getListIdx(cardIdx) {
    const rs = await card.findOne({
        attributes: ["listIdx"],
        where: {
            cardIdx: cardIdx
        }
    });
    return rs.dataValues.listIdx;
}

// 카드시퀀스 조회
async function getCardIdx(type, idx) {
    let rs = null;
    switch (type) {
        case "commentIdx":
            rs = await comment.findOne({
                attributes: ["cardIdx"],
                where: {
                    commentIdx: idx
                }
            });
            break;
        case "workIdx":
            rs = await work.findOne({
                attributes: ["cardIdx"],
                where: {
                    workIdx: idx
                }
            });
            break;
    }
    return rs.dataValues.cardIdx;
}

// 시퀀스에 따른 분기 및 boardType 반환
async function boardType(option, idxType) {
    let boardType, boardIdx, listIdx, cardIdx;
    switch (idxType) {
        case "cardIdx":
            if (idxType === "cardIdx") cardIdx = option.idx;
            listIdx = await getListIdx(cardIdx);
            if (!listIdx) return null;
        case "listIdx":
            if (idxType === "listIdx") listIdx = option.idx;
            boardIdx = await getBoardIdx(listIdx);
            if (!boardIdx) return null;
        case "boardIdx":
            if (idxType === "boardIdx") boardIdx = option.idx;
            boardType = await getBoardType(boardIdx);
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