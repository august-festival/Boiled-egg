const express = require("express");
const boardService = require("../../../service/boardService");

const router = express.Router();

router.get("/boards", async (req, res) => {
    res.send(await boardService.all());
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
