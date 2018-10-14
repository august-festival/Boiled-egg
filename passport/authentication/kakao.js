const KakaoStrategy = require('passport-kakao').Strategy;

module.exports = (passport, secret, user) => { 
    passport.use(new KakaoStrategy({
        clientID : secret.federation.kakao.client_id,
        clientSecret : secret.federation.kakao.secret_id,
        callbackURL : secret.federation.kakao.callback_url,
    },(accessToken, refreshToken, profile, done) => {        
        user.findAll({where : { email : profile._json.kaccount_email }})
            .then((result) => {                
                if(result[0]){                    
                    done(null, result[0].get().userIdx);
                } else {
                    profile._json = {
                        id : profile._json.id,                        
                        email : profile._json.kaccount_email,
                        provider : "kakao",
                        accessTK : accessToken
                    };                                 
                    profile = profile._json;                    
                    done(null, profile);
                }
            }) 
            .error((err) => {                
                console.error(err);
                done(err, null);
            })        
    }));
};