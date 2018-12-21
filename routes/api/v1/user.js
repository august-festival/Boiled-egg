const express = require("express");
const {certification, userObj} = require("../../../service/userService");
const userService = userObj;

const router = express.Router();

router.get("/about/:token", async (req, res) => {
    res.send(await userService.findByToken(req.params.token));
});
router.get("/login/:email", async (req, res) => {
    // const email = "hgd@daum.com"
    return res.send(await userService.loginForcely(req.params.email));
});

module.exports = router;
