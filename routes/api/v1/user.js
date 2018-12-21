const express = require("express");
const userService = require("../../../service/userService").userObj;

const router = express.Router();

router.get("/about", async (req, res) => {
    res.send(await userService.findByToken(req.headers.token));
});
router.get("/login/:email", async (req, res) => {
    // const email = "hgd@daum.com"
    return res.send(await userService.loginForcely(req.params.email));
});

module.exports = router;
