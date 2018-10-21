const boardTypeService = require("../service/boardTypeService");
const permissionTeamBoardService = require("../service/permissionTeamBoardService");
const permissionUserService = require("../service/permissionUserService");

// 최전 권한 처리
function permissionCheck(rs, res, next) {
    if(rs) {
        next();
    }else {
        res.send({
            message: "권한이 없습니다."
        });
    }
}

// table 작업할 테이블을 값으로 받는다
module.exports = table => {
    return async (req, res, next) => {
        // 세션경로는 이럴것이다 가정 한코드 검증필요
        // const userIdx = req.session.user.userIdx;
        const userIdx = 1;
        if(!userIdx) permissionCheck(false, res, next);
        // 테이블에 따라 값을 받을 파라메터 idx 이름 분기처리 필요
        // const idx = req.params.id;
        const idx = 2;
        if(!idx) permissionCheck(false, res, next);

        // board 타입 체크
        const boardType = await boardTypeService(table, idx);

        const permission = null;

        // 팀보드에 대한 퍼미션 체크
        if(boardType === "TEAM") {
            permission = permissionTeamBoardService(table);
        // 개인보드에 대한 퍼미션 체크
        }else if(boardType === "USER") {
            permission = permissionUserService(table);
        }

        // CRUD 분기처리
        if(req.method === "POST") {
            const rs = await permission.insert(userIdx, idx);
            permissionCheck(rs, res, next);
        }else if(req.method === "GET") {
            const rs = await permission.select(userIdx, idx);
            permissionCheck(rs, res, next);
        }else if(req.method === "PUT") {
            const rs = await permission.update(userIdx, idx);
            permissionCheck(rs, res, next);
        }else if(req.method === "DELETE") {
            const rs = await permission.delete(userIdx, idx);
            permissionCheck(rs, res, next);
        }

    }
}
