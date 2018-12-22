const express = require("express");
const teamService = require("../../../service/teamService");

const router = express.Router();

// 내가 속한 팀 리스트 조회
router.get("/", async (req, res) => {
    res.send(await teamService.findByUserIdx(req.headers.user.userIdx));
});

// 팀생성
router.post("/", async (req, res) => {
    res.send(await teamService.create({
        userIdx: req.headers.user.userIdx,
        name: req.body.name
    }));
});

module.exports = router;
