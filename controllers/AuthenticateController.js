const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;


class AuthController {
  async authenticate(req, res) {
    passport.use(new DiscordStrategy({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: 'https://indie-community.rsr4dmnynb.repl.co/auth/discord/callback',
      scope: ['identify']
    },
    function(accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
    ));

    passport.serializeUser((user, done) => {
      done(null, user);
    });

    passport.deserializeUser((obj, done) => {
      done(null, obj);
    });

    passport.authenticate('discord')(req, res);
  }

  async callback(req, res) {
    passport.authenticate('discord', { failureRedirect: '/' })(req, res, function() {
      res.redirect('/api/user');
    });
  }
}

module.exports = new AuthController();
