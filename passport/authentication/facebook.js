const FacebookStrategy = require("passport-facebook").Strategy;

module.exports = (passport, secret, user) => {
    passport.use(new FacebookStrategy({
        clientID : secret.federation.facebook.client_id,
        clientSecret : secret.federation.facebook.secret_id,
        callbackURL : secret.federation.facebook.callback_url,
        profileFields: secret.federation.facebook.profileFields,
    },(accessToken, refreshToken, profile, done) => {            
        user.findAll({where : { email : profile._json.email }})
            .then((result) => {                
                if(result[0]){                    
                    done(null, result[0].get().userIdx);
                } else {                                    
                    profile._json.provider = "facebook";
                    profile._json.accessTK = accessToken;
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