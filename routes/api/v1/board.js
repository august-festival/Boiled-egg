const express = require("express");
const boardService = require("../../../service/boardService");

const router = express.Router();

router.get("/boards", async (req, res) => {
    res.send(await boardService.findByUser(
        req.session.passport.user[0],
    ));
});
router.get("/boards/:boardId", async (req, res) => {
    res.send(await boardService.findByBoardIdx(req.params.boardId));
});
router.delete("/boards/:boardId", async (req, res) => {
    res.send(await boardService.delete(req.params.boardId));
});

router.get("/boards/:id", async (req, res) => {
    res.send(await boardService.findByUser(req.params.id));
});

router.post("/boards", async (req, res) => {
    res.send(await boardService.create(res.id));
});

router.put("/boards", async(req, res)=> {
    res.send(await boardService.modify(res.id, res.contents));
});

router.delete("/boards", async(req, res)=> {
    res.send(await boardService.delete(res.boardIdx));
});

module.exports = router;
