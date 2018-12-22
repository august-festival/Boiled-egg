const express = require("express");
const boardService = require("../../../service/boardService");

const router = express.Router();

router.get("/", async (req, res) => {
    res.send(await boardService.findByUser(
        req.headers.user.userIdx
    ));
});
router.get("/:boardId", async (req, res) => {
    res.send(await boardService.findByBoardIdx(req.params.boardId));
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
