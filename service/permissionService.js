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

module.export = function (option) {
    if (!option) return false;
    return permission[option.table](option);
};

// role 조회
function getRole(team_idx, user_idx) {
    return team_member.findAll({
        attributes: ["roleType"],
        where: {
            team_idx: team_idx,
            user_idx: user_idx
        }
    });
}

// 팀시퀀스 조회
function getTeam_idx(board_idx) {
    return board.findAll({
        attributes: ["team_idx"],
        where: {
            board_idx: board_idx
        }
    });
}

// 보드시퀀스 조회
function getBoard_idx(list_idx) {
    return list.findAll({
        attributes: ["board_idx"],
        where: {
            list_idx: list_idx
        }
    });
}

// 리스트시퀀스 조회
function getList_idx(card_idx) {
    return card.findAll({
        attributes: ["list_idx"],
        where: {
            card_idx: card_idx
        }
    });
}

// 카드시퀀스 조회
function getCard_idx(type, idx) {
    switch (type) {
        case "comment_idx":
            return comment.findAll({
                attributes: ["card_idx"],
                where: {
                    comment_idx: idx
                }
            });
        case "work_idx":
            return work.findAll({
                attributes: ["card_idx"],
                where: {
                    work_idx: idx
                }
            });
    }

}

// 시퀀스에 따른 분기 및 role 가능여부 반환
function getIdx(option, idx) {
    let check = false;
    let role, team_idx, board_idx, list_idx, card_idx;
    switch (idx) {
        case "card_idx":
            if (idx === "card_idx") card_idx = option.card_idx;
            list_idx = getList_idx(card_idx);
            if (!list_idx) return false;
        case "list_idx":
            if (idx === "list_idx") list_idx = option.list_idx;
            board_idx = getBoard_idx(list_idx);
            if (!board_idx) return false;
        case "board_idx":
            if (idx === "board_idx") board_idx = option.board_idx;
            team_idx = getTeam_idx(board_idx);
            if (!team_idx) return false;
        case "team_idx":
            if (idx === "team_idx") team_idx = option.team_idx;
            role = getRole(team_idx, option.user_idx);
            if (!role) return false;
            check = roleTeamBoard[role][option.table][option.action];
            break;
    }
    return check;
}

// 팀보드
permission.board = function (option) {
    if (option.action === "C") {
        return getIdx(option, "team_idx");
    } else {
        return getIdx(option, "board_idx");
    }
};

// 보드 즐겨찾기
permission.board_favorite = function (option) {
    return getIdx(option, "board_idx");
};

// 카드 멤버 할당
permission.card_assignee = function (option) {
    return getIdx(option, "card_idx");
};

// 작업리스트
permission.activity = function (option) {
    return getIdx(option, "board_idx");
};

// 리스트
permission.list = function (option) {
    if (option.action === "C") {
        return getIdx(option, "board_idx");
    } else {
        return getIdx(option, "list_idx");
    }
};

// 카드
permission.card = function (option) {
    if (option.action === "C") {
        return getIdx(option, "list_idx");
    } else {
        return getIdx(option, "card_idx");
    }
};

// 댓글
permission.comment = function (option) {
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
permission.work = function (option) {
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
permission.check_list = function (option) {
    const card_idx = getCard_idx("work_idx", option.work_info_idx);
    if (!card_idx) return false;
    option.card_idx = card_idx;
    return getIdx(option, "card_idx");
};

// 팀 멤버
permission.team_member = function (option) {
    return getIdx(option, "team_idx");
};

// 팀 초대
permission.confirm_team = function (option) {
    return getIdx(option, "team_idx");
};