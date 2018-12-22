const express = require("express");
const session = require("express-session");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const bodyParser = require("body-parser");
const config = require("config");
const passportConfig = require("./passport");

const index = require("./routes/index");
const auth = require("./routes/api/v1/auth");
const user = require("./routes/api/v1/user");
const boards = require("./routes/api/v1/board");
const teams = require("./routes/api/v1/team");

const userService = require("./service/userService").userObj;

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(session({ secret: "egg", resave: true, saveUninitialized: false }));
// header 검증 및 token 체크..
app.use(function(req, res, next) {
	// 커지면 express-acl 같은거로 변경...
    const err = new Error("Unauthorized");
    err.status = 401;
	
	if (config.avoidAcl[req.method].filter(it => req.url.startsWith(it)).length > 0) { // url 여기 있으면 header 검사 안함.
        next();
	} else { // 아니면 해야지...
        if (req.headers.token) {
            userService.findByToken(req.headers.token)
                .then(function(user) {
                    req.headers.user = user
                    next();
                })
                .catch(function(error) {
                    next(err);
                })

        } else {
            next(err);
        }
    }
});
app.use(passport.initialize());
app.use(passport.session());

passportConfig();
app.use("/", index);
app.use("/api/v1/auth", auth);
app.use("/api/v1/user", user);
app.use("/api/v1/boards", boards);
app.use("/api/v1/teams", teams);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => { // error handler 는 인자가 4개여야 함....
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
