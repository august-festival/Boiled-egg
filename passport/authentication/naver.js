const NaverStrategy = require('passport-naver').Strategy;

module.exports = (passport, secret, user) => { 
    passport.use(new NaverStrategy({
        clientID : secret.federation.naver.client_id,
        clientSecret : secret.federation.naver.secret_id,
        callbackURL : secret.federation.naver.callback_url,
	},(accessToken, refreshToken, profile, done) => {        
        user.findAll({where : { email : profile._json.email }}) 
            .then((result) => {                
                if(result[0]){                    
                    done(null, result[0].get().userIdx);
                } else {
                    profile._json = {
                        id : profile._json.id,                        
                        email : profile._json.email,
                        provider : "naver",
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
    }))
};