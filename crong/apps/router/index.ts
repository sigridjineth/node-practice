import express = require("express");

const router = express.Router();
const main = require("./main");
const email = require("./email");
const join = require("./join");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

router.use('/main', main);
router.use('/email', email);
router.use('/join', join);

router.get("/", function (request: express.Request, response: express.Response) {
    response.render('join.ejs');
});

router.post('/', passport.authenticate('local-join', {
    successRedirect: '/main',
    failureRedirect: '/join',
    failureFlash: true
}));

passport.use('local-join', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req: express.Request, email: String, password: String, done: boolean) {
        console.log('local-join callback called');
    }
));

module.exports = router;