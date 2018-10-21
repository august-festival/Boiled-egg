const express = require("express");
const boardService = require("../../../service/boardService");

const router = express.Router();

router.get("/boards", async (req, res) => {
    res.send(await boardService.all());
});


module.exports = router;
