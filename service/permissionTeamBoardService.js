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

// 팀보드 권한처리할 테이블
const permission = {
    board: null,
    board_favorite: null,
    card_assignee: null,
    activity: null,
    list: null,
    card: null,
    comment: null,
    work: null,
    check_list: null,
    team_member: null,
    confirm_team: null
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
    const rs = null;
    switch (type) {
        case "comment_idx":
            rs = await comment.findOne({
                attributes: ["card_idx"],
                where: {
                    comment_idx: idx
                }
            });
        case "work_idx":
            rs = await work.findOne({
                attributes: ["card_idx"],
                where: {
                    work_idx: idx
                }
            });
    }
    return rs.dataValues.card_idx;
}

// 시퀀스에 따른 분기 및 role 가능여부 반환
async function getIdx(option, idx) {
    let check = false;
    let role, team_idx, board_idx, list_idx, card_idx;
    switch (idx) {
        case "card_idx":
            if (idx === "card_idx") card_idx = option.card_idx;
            list_idx = await getList_idx(card_idx);
            if (!list_idx) return false;
        case "list_idx":
            if (idx === "list_idx") list_idx = option.list_idx;
            board_idx = await getBoard_idx(list_idx);
            if (!board_idx) return false;
        case "board_idx":
            if (idx === "board_idx") board_idx = option.board_idx;
            team_idx = await getTeam_idx(board_idx);
            if (!team_idx) return false;
        case "team_idx":
            if (idx === "team_idx") team_idx = option.team_idx;
            role = await getRole(team_idx, option.user_idx);
            console.log(role);
            if (!role) return false;
            check = roleTeamBoard[role][option.table][option.action];
            break;
    }
    return check;
}

// 팀보드
permission.board = option => {
    if (option.action === "C") {
        return getIdx(option, "team_idx");
    } else {
        return getIdx(option, "board_idx");
    }
};

// 보드 즐겨찾기
permission.board_favorite = option => {
    return getIdx(option, "board_idx");
};

// 카드 멤버 할당
permission.card_assignee = option => {
    return getIdx(option, "card_idx");
};

// 작업리스트
permission.activity = option => {
    return getIdx(option, "board_idx");
};

// 리스트
permission.list = option => {
    if (option.action === "C") {
        return getIdx(option, "board_idx");
    } else {
        return getIdx(option, "list_idx");
    }
};

// 카드
permission.card = option => {
    if (option.action === "C") {
        return getIdx(option, "list_idx");
    } else {
        return getIdx(option, "card_idx");
    }
};

// 댓글
permission.comment = option => {
    if (option.action === "C") {
        return getIdx(option, "card_idx");
    } else {
        const card_idx = getCard_idx("comment_idx", option.comment_idx);
        if (!card_idx) return false;
        option.card_idx = card_idx;
        return getIdx(option, "card_idx");
    }
};

// 작업정보
permission.work = option => {
    if (option.action === "C") {
        return getIdx(option, "card_idx");
    } else {
        const card_idx = getCard_idx("work_idx", option.work_info_idx);
        if (!card_idx) return false;
        option.card_idx = card_idx;
        return getIdx(option, "card_idx");
    }
};

// 체크리스트
permission.check_list = option => {
    const card_idx = getCard_idx("work_idx", option.work_info_idx);
    if (!card_idx) return false;
    option.card_idx = card_idx;
    return getIdx(option, "card_idx");
};

// 팀 멤버
permission.team_member = option => {
    return getIdx(option, "team_idx");
};

// 팀 초대
permission.confirm_team = option => {
    return getIdx(option, "team_idx");
};

// 외부 인터페이스
module.exports = {
    get: option => {
        if (!option) return false;
        return permission[option.table](option);
    }
};

