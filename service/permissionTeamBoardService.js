/**
 * 팀보드 permission 서비스
 */

const {
    team_member,
    board,
    list,
    card,
    work,
    comment
} = require("../models");

// 팀보드 권한 정보
const roleTeamBoard = require("../role/teamBoard");

// 팀보드 권한 테이블분기 처리
const permission = {
    // 팀보드
    board(option) {
        if (option.action === "C") {
            return isRole(option, "teamIdx");
        } else {
            return isRole(option, "boardIdx");
        }
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
    },
    // 팀 멤버
    team_member(option) {
        return isRole(option, "teamIdx");
    },
    // 팀 초대
    confirm_team(option) {
        return isRole(option, "teamIdx");
    }
};

// role 조회
async function getRole(teamIdx, userIdx) {
    const rs = await team_member.findOne({
        attributes: ["roleType"],
        where: {
            teamIdx: teamIdx,
            userIdx: userIdx
        }
    });
    return rs.dataValues.roleType;
}

// 팀시퀀스 조회
async function getTeamIdx(boardIdx) {
    const rs = await board.findOne({
        attributes: ["teamIdx"],
        where: {
            boardIdx: boardIdx
        }
    });
    return rs.dataValues.teamIdx;
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

// 시퀀스에 따른 분기 및 role 가능여부 반환
async function isRole(option, idxType) {
    let check = false;
    let role, teamIdx, boardIdx, listIdx, cardIdx;
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
            teamIdx = await getTeamIdx(boardIdx);
            if (!teamIdx) return false;
        case "teamIdx":
            if (idxType === "teamIdx") teamIdx = option.idx;
            role = await getRole(teamIdx, option.userIdx);
            if (!role) return false;
            check = roleTeamBoard[role][option.table][option.action];
            break;
    }
    return check;
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