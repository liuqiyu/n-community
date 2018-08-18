var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var router = require('./routers');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var identityKey = 'session_id';

app.use(session({
    name: identityKey,
    secret: 'kaway',           // 用来对session id相关的cookie进行签名
    store: new FileStore(),    // 本地存储session（文本文件，也可以选择其他store，比如redis的）
    saveUninitialized: false,  // 是否自动保存未初始化的会话，建议false
    resave: false,             // 是否每次都重新保存会话，建议false
    cookie: {
        maxAge: 10 * 10000,      // 有效期，单位是毫秒
    },
}));

app.use(function(req, res, next) {
    var url = req.url;
    // 判断不拦截的路由 出/login和/之外的都拦截
    if (url != '/user/login' && !req.session.name && url != '/user/register') {
        res.render('login', { title: 'Express' });
        return;
    }
    next();
});

app.use(function(req, res, next) {
    console.log(123);
    next();
});

router(app);

module.exports = app;
