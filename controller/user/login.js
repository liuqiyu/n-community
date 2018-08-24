var db = require('./../../common/dbCommon');

var login = function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var sql = "select * from user where username = '" + username + "'";
    db.query(sql, function(err, rows, fields) {
        if (err) {
            return res.send({
                code: 500,
                status: 'error',
                message: '登录失败！',
                data: err,
            });
        }
        if (rows.length > 0) {
            if (rows[0].password == password) {
                req.session.regenerate(function() {
                    if(err) {
                        return res.send({
                            code: 500,
                            status: 'error',
                            message: '登录失败！！',
                        });
                    }
                    req.session.user = rows[0];
                    res.send({
                        code: 200,
                        status: 'success',
                        message: '登录成功！',
                        data: {
                            sessionID: req.sessionID,
                            username: rows[0].username,
                        },
                    });
                });
            } else {
                res.send({
                    code: 500,
                    status: 'error',
                    message: '账号或者密码错误！',
                });
            }
        } else {
            res.send({
                code: 500,
                status: 'error',
                message: '用户不存在！',
            });
        }
    });
};

module.exports = login;