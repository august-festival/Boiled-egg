const express = require("express");
const boardService = require("../../../service/boardService");
const boardTypeService = require("../../../service/boardTypeService");
const permissionTeamBoardService = require("../../../service/permissionTeamBoardService");
const permissionUserService = require("../../../service/permissionUserService");

const router = express.Router();

router.get("/", async (req, res) => {
    res.send(await boardService.findByUser(
        req.headers.user.userIdx
    ));
});
router.get("/:boardId", async (req, res) => {
    // res.send(await boardService.findByBoardIdx(req.params.boardId));

    const boardIdx = req.params.boardId;
    const boardType = await boardTypeService('board', boardIdx);
    let permission = null;
    if(boardType === 'TEAM') {
        permission = permissionUserService('board');
    }else if(boardType === 'USER') {
        permission = permissionTeamBoard('board');
    }
    const isRole = await permission.select(userIdx, boardIdx);
    if(isRole){
       res.send(await boardService.findByBoardIdx(req.params.boardId));
    }else{
        res.status(403).render();
    }
});
router.delete("/:boardId", async (req, res) => {
    res.send(await boardService.delete(req.params.boardId));
});

router.get("/:boardId", async (req, res) => {
    res.send(await boardService.findByUser(req.params.boardId));
});

router.post("/", async (req, res) => {
    res.send(await boardService.create(res.id));
});

router.put("/:boardId", async(req, res)=> {
    // FIXME : 여기 대충만 적어놨어여
    res.send(await boardService.modify(res.params.boardId, req.body));
});

router.delete("/", async(req, res)=> {
    res.send(await boardService.delete(res.boardIdx));
});

module.exports = router;
