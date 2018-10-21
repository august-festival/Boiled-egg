const passport = require("passport");
const { user } = require("../models");
const secret = require("../common/.strategySecret");
const facebook = require("./authentication/facebook");
const google = require("./authentication/google");
const naver = require("./authentication/naver");
const kakao = require("./authentication/kakao");

module.exports = () => {
    passport.serializeUser((user, done) => {         
        done(null, user);
    });

    passport.deserializeUser((user, done) => {        
        done(null, user);
    });

    facebook(passport, secret, user);
    google(passport, secret, user);
    naver(passport, secret, user);
    kakao(passport, secret, user);
};
