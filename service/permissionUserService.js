/**
 * 유저 권한 서비스
 */

const {
    board,
    list,
    card,
    work,
    comment
} = require("../models");

// 유저 권한 테이블분기 처리
const permission = {
    // 보드
    board(option) {
        return isRole(option, "boardIdx");
    },
    // 보드 즐겨찾기
    board_favorite(option) {
        return isRole(option, "boardIdx");
    },
    // 카드 멤버 할당
    card_assignee(option) {
        return isRole(option, "cardIdx");
    },
    // 작업리스트
    activity(option) {
        return isRole(option, "boardIdx");
    },
    // 리스트
    list(option) {
        if (option.action === "C") {
            return isRole(option, "boardIdx");
        } else {
            return isRole(option, "listIdx");
        }
    },
    // 카드
    card(option) {
        if (option.action === "C") {
            return isRole(option, "listIdx");
        } else {
            return isRole(option, "cardIdx");
        }
    },
    // 댓글
    async comment(option) {
        if (option.action === "C") {
            return isRole(option, "cardIdx");
        } else {
            const cardIdx = await getCardIdx("commentIdx", option.idx);
            if (!cardIdx) return false;
            option.idx = cardIdx;
            return isRole(option, "cardIdx");
        }
    },
    // 작업정보
    async work(option) {
        if (option.action === "C") {
            return isRole(option, "cardIdx");
        } else {
            const cardIdx = await getCardIdx("workIdx", option.idx);
            if (!cardIdx) return false;
            option.idx = cardIdx;
            return isRole(option, "cardIdx");
        }
    },
    // 체크리스트
    async check_list(option) {
        const cardIdx = await getCardIdx("workIdx", option.idx);
        if (!cardIdx) return false;
        option.idx = cardIdx;
        return isRole(option, "cardIdx");
    }
};

// userIdx 조회
async function getUserIdx(boardIdx) {
    const rs = await board.findOne({
        attributes: ["userIdx"],
        where: {
            boardIdx: boardIdx
        }
    });
    return rs.dataValues.userIdx;
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
async function isRole(option, idxType) {
    let userIdx, boardIdx, listIdx, cardIdx;
    switch (idxType) {
        case "cardIdx":
            if (idxType === "cardIdx") cardIdx = option.idx;
            listIdx = await getListIdx(cardIdx);
            if (!listIdx) return false;
        case "listIdx":
            if (idxType === "listIdx") listIdx = option.idx;
            boardIdx = await getBoardIdx(listIdx);
            if (!boardIdx) return false;
        case "boardIdx":
            if (idxType === "boardIdx") boardIdx = option.idx;
            userIdx = await getUserIdx(boardIdx);
            if (!userIdx) return false;
            break;
    }
    return userIdx == option.userIdx;
}

// 외부 인터페이스
module.exports = table => {
    return {
        // 조회
        select(userIdx, idx) {
            if(!(userIdx && idx)) return false;
            return permission[table]({
                table: table,
                action: 'R',
                userIdx: userIdx,
                idx: idx
            });
        },
        // 추가
        insert(userIdx, idx) {
            if(!(userIdx && idx)) return false;
            return permission[table]({
                table: table,
                action: 'C',
                userIdx: userIdx,
                idx: idx
            });
        },
        // 수정
        update(userIdx, idx) {
            if(!(userIdx && idx)) return false;
            return permission[table]({
                table: table,
                action: 'U',
                userIdx: userIdx,
                idx: idx
            });
        },
        // 삭제
        delete(userIdx, idx) {
            if(!(userIdx && idx)) return false;
            return permission[table]({
                table: table,
                action: 'D',
                userIdx: userIdx,
                idx: idx
            });
        }
    }
};