const express = require("express");
const router = express.Router();
// 실제 사용시 테이블명 값필요
const permission = require("../../../permission")("board");

router.use(permission);

router.get("/test", (req, res) => {
    console.log(req.url);
    res.send("호출성공");
});

module.exports = router;