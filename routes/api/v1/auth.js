const express = require("express");
const { certification, userObj } = require('../../../service/userService.js');


const router = express.Router();

router.get("/", (req, res, next) => {
    res.render('post');
});

router.get('/facebook', certification.start("facebook"));
router.get('/facebook/callback', certification.end("facebook"), certification.redirect );

router.get('/google', certification.start("google"));
router.get('/google/callback', certification.end("google"), certification.redirect );

router.get('/naver', certification.start("naver"));
router.get('/naver/callback', certification.end("naver"), certification.redirect );

router.get('/kakao', certification.start("kakao"));
router.get('/kakao/callback', certification.end("kakao"), certification.redirect );

router.post('/login', userObj.create);
router.get("/logout", userObj.logout);

router.get("/auth/", userObj.logout);

module.exports = router;
