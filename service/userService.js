const passport = require("passport");
const uuidv4 = require('uuid/v4');
const { user, oauth_id, token } = require("../models");

const certification = {
    start : (snsName) => {
        switch (snsName) {
            case "facebook":                
                return passport.authenticate(snsName, null);
            case "google": //구글은 꼭 scope 속성이 들어가야 됨
                return passport.authenticate(snsName, { scope: ['profile', 'email']} );                
            case "naver":
                return passport.authenticate(snsName, null);
            case "kakao":
                return passport.authenticate(snsName, null);
            default:
                break;
        }
    },
    end : (snsName) => {
        switch (snsName) {
            case "facebook":
                return passport.authenticate(snsName, { failureRedirect: '/' });
            case "google":
                return passport.authenticate(snsName, { failureRedirect: '/' });
            case "naver":
                return passport.authenticate(snsName, { failureRedirect: '/' });
            case "kakao":
                return passport.authenticate(snsName, { failureRedirect: '/' });
            default:
                break;
        }
    },
    redirect : (req, res) => {
        const isIdx = req.session.passport.user[0] ? true : false;
        if(isIdx) {
            return res.redirect('/');
        } else {
            return res.redirect('/users');
        }
    }
};

const userObj = {    
    create : (req, res) => {
        const oauthInfo = req.session.passport.user;
        
        //소설 로그인 인증 후 유저 정보를 저장 하기 위해 만들어진 임시 객체
        const postUser = {
            nickName : '성공적',
            email : oauthInfo.email,
            name : '이병헌',
            phone : '01055555555',
            languageType : 'KOR'
        };

        user.create({nickName, email, name, phone, languageType} = postUser)
        .then((userResult) => {
            if(userResult){                
                return oauth_id.create({
                                userIdx: userResult.get().userIdx
                                , accessId : oauthInfo.id
                                , accessToken : oauthInfo.accessTK
                                , providerType : oauthInfo.provider
                            })
            }
        })
        .then((result) => { 
            console.log(result);
            res.send('sucess!');
        })
        .catch((error) => console.error(error));
    },
    modify : (req, res) => {

    },
    remove : (req, res) => {

    },
    login : (req, res) => {
    },
    logout : (req, res) => {
        req.logout();        
        res.redirect("/");
    },

    loginForcely : (email) => {
        return user.findOne({
            where: {
                email
            }
        }).then(function(user) {
            const _token = uuidv4();

            token.create({
                userIdx: user.userIdx,
                token: _token
            });
            user.dataValues.token = _token;

            return user;
        });
    },
    findByToken : (_token) => {
        return token.findOne({
            where: {
                token: _token
            }
        }).then(function(tokenInfo) {
            return user.findOne({
                where: {
                    userIdx: tokenInfo.userIdx
                }
            })
        });
    }
}

module.exports = { certification, userObj };
