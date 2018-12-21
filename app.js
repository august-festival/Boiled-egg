const express = require("express");
const session = require("express-session");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const bodyParser = require("body-parser");
const passportConfig = require("./passport");

const index = require("./routes/index");
const users = require("./routes/users");
const boards = require("./routes/api/v1/board");

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
app.use(passport.initialize());
app.use(passport.session());

passportConfig();
app.use("/", index);
app.use("/api/v1/users", users);
app.use("/api/v1/boards", boards);

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
