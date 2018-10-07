const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = (passport, secret, user) => { 
    passport.use(new GoogleStrategy({
        clientID : secret.federation.google.client_id,
        clientSecret : secret.federation.google.secret_id,
        callbackURL : secret.federation.google.callback_url,
    },(accessToken, refreshToken, profile, done) => {        
        user.findAll({where : { email : profile._json.emails[0].value }})
            .then((result) => {                
                if(result[0]){                    
                    done(null, result[0].get().user_idx);
                } else {
                    profile._json = {
                        id : profile._json.id,                        
                        email : profile._json.emails[0].value,
                        provider : "google",
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