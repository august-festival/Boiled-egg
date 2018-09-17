const express = require("express");
const { certification, userObj } = require('../service/userService.js');


const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
    res.render('post');
});

router.get('/auth/facebook', certification.start("facebook"));
router.get('/auth/facebook/callback', certification.end("facebook"), certification.redirect );

router.get('/auth/google', certification.start("google"));
router.get('/auth/google/callback', certification.end("google"), certification.redirect );

router.get('/auth/naver', certification.start("naver"));
router.get('/auth/naver/callback', certification.end("naver"), certification.redirect );

router.get('/auth/kakao', certification.start("kakao"));
router.get('/auth/kakao/callback', certification.end("kakao"), certification.redirect );

router.post('/login', userObj.create);
router.get("/logout", userObj.logout);


module.exports = router;
