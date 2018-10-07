const passport = require('passport');
const facebook = require('./oauth/facebook');
// const google = require('./oauth/google');
// const naver = require('./oauth/naver');
// const kakao = require('./oauth/kakao');
// const User = require('../models').user;

module.exports = () =>{

    passport.serializeUser((user, done) => {
        done(null, user); 
      });
    
    passport.deserializeUser((user, done) => {
        done(null, user); 
    });

    facebook(passport); 

};