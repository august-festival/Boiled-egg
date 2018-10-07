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
        return isRole(option, "board_idx");
    },
    // 보드 즐겨찾기
    board_favorite(option) {
        return isRole(option, "board_idx");
    },
    // 카드 멤버 할당
    card_assignee(option) {
        return isRole(option, "card_idx");
    },
    // 작업리스트
    activity(option) {
        return isRole(option, "board_idx");
    },
    // 리스트
    list(option) {
        if (option.action === "C") {
            return isRole(option, "board_idx");
        } else {
            return isRole(option, "list_idx");
        }
    },
    // 카드
    card(option) {
        if (option.action === "C") {
            return isRole(option, "list_idx");
        } else {
            return isRole(option, "card_idx");
        }
    },
    // 댓글
    async comment(option) {
        if (option.action === "C") {
            return isRole(option, "card_idx");
        } else {
            const card_idx = await getCard_idx("comment_idx", option.idx);
            if (!card_idx) return false;
            option.idx = card_idx;
            return isRole(option, "card_idx");
        }
    },
    // 작업정보
    async work(option) {
        if (option.action === "C") {
            return isRole(option, "card_idx");
        } else {
            const card_idx = await getCard_idx("work_idx", option.idx);
            if (!card_idx) return false;
            option.idx = card_idx;
            return isRole(option, "card_idx");
        }
    },
    // 체크리스트
    async check_list(option) {
        const card_idx = await getCard_idx("work_idx", option.idx);
        if (!card_idx) return false;
        option.idx = card_idx;
        return isRole(option, "card_idx");
    }
};

// user_idx 조회
async function getUser_idx(board_idx) {
    const rs = await board.findOne({
        attributes: ["user_idx"],
        where: {
            board_idx: board_idx
        }
    });
    return rs.dataValues.user_idx;
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
async function isRole(option, idxType) {
    let user_idx, board_idx, list_idx, card_idx;
    switch (idxType) {
        case "card_idx":
            if (idxType === "card_idx") card_idx = option.idx;
            list_idx = await getList_idx(card_idx);
            if (!list_idx) return false;
        case "list_idx":
            if (idxType === "list_idx") list_idx = option.idx;
            board_idx = await getBoard_idx(list_idx);
            if (!board_idx) return false;
        case "board_idx":
            if (idxType === "board_idx") board_idx = option.idx;
            user_idx = await getUser_idx(board_idx);
            console.log(user_idx);
            if (!user_idx) return false;
            break;
    }
    return user_idx == option.user_idx;
}

// 외부 인터페이스
module.exports = table => {
    return {
        // 조회
        select(user_idx, idx) {
            if(!(user_idx && idx)) return false;
            return permission[table]({
                table: table,
                action: 'R',
                user_idx: user_idx,
                idx: idx
            });
        },
        // 추가
        insert(user_idx, idx) {
            if(!(user_idx && idx)) return false;
            return permission[table]({
                table: table,
                action: 'C',
                user_idx: user_idx,
                idx: idx
            });
        },
        // 수정
        update(user_idx, idx) {
            if(!(user_idx && idx)) return false;
            return permission[table]({
                table: table,
                action: 'U',
                user_idx: user_idx,
                idx: idx
            });
        },
        // 삭제
        delete(user_idx, idx) {
            if(!(user_idx && idx)) return false;
            return permission[table]({
                table: table,
                action: 'D',
                user_idx: user_idx,
                idx: idx
            });
        }
    }
};