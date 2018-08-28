var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var router = require('./routers');

var app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    // 将外源设为指定的域，比如：http://localhost:8080
    res.header('Access-Control-Allow-Origin', "http://localhost:3000");
    // 将Access-Control-Allow-Credentials设为true
    res.header('Access-Control-Allow-Credentials', true); // 可以带cookies
    next();
});

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
        maxAge: 1000 * 10000,      // 有效期，单位是毫秒
    },
}));

app.use(function(req, res, next) {
    var url = req.url;
    console.log(req.query);
    console.log(req.params);
    // 判断不拦截的路由 出/login和/之外的都拦截
    // if (url != '/user/login' && !req.sessionID && url != '/user/register') {
    //     res.render('login', { title: 'Express' });
    //     return;
    // }
    // if (req.sessionID !== req.query.session_id) {
    //     return res.send({
    //         code: 500,
    //         status: 'error',
    //         message: '登陆失效，请重新登陆！',
    //     });
    // }
    next();
});

router(app);

module.exports = app;
