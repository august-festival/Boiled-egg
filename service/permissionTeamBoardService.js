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
            return isRole(option, "team_idx");
        } else {
            return isRole(option, "board_idx");
        }
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
    },
    // 팀 멤버
    team_member(option) {
        return isRole(option, "team_idx");
    },
    // 팀 초대
    confirm_team(option) {
        return isRole(option, "team_idx");
    }
};

// role 조회
async function getRole(team_idx, user_idx) {
    const rs = await team_member.findOne({
        attributes: ["roleType"],
        where: {
            team_idx: team_idx,
            user_idx: user_idx
        }
    });
    return rs.dataValues.roleType;
}

// 팀시퀀스 조회
async function getTeam_idx(board_idx) {
    const rs = await board.findOne({
        attributes: ["team_idx"],
        where: {
            board_idx: board_idx
        }
    });
    return rs.dataValues.team_idx;
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

// 시퀀스에 따른 분기 및 role 가능여부 반환
async function isRole(option, idxType) {
    let check = false;
    let role, team_idx, board_idx, list_idx, card_idx;
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
            team_idx = await getTeam_idx(board_idx);
            if (!team_idx) return false;
        case "team_idx":
            if (idxType === "team_idx") team_idx = option.idx;
            role = await getRole(team_idx, option.user_idx);
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