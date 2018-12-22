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

router.get("/:id", async (req, res) => {
    res.send(await boardService.findByUser(req.params.id));
});

router.post("/", async (req, res) => {
    res.send(await boardService.create(res.id));
});

router.put("/", async(req, res)=> {
    res.send(await boardService.modify(res.id, res.contents));
});

router.delete("/", async(req, res)=> {
    res.send(await boardService.delete(res.boardIdx));
});

module.exports = router;
