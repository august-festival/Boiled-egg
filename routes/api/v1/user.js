const express = require("express");
const userService = require("../../../service/userService").userObj;

const router = express.Router();

router.get("/about", async (req, res, next) => {
    try {
        const user = await userService.findByToken(req.headers.token);
        res.send(user);
        next();
    } catch(error) {
        error.status = 401;
        next(error);
    }
});
router.get("/login/:email", async (req, res) => {
    // const email = "hgd@daum.com"
    return res.send(await userService.loginForcely(req.params.email));
});

module.exports = router;
