var db = require('./../../common/dbCommon');

var login = function(req, res) {
    if (req.method === 'GET') {
        res.render('login', { title: 'Express' });
    } else if(req.method === 'POST') {
        var name = req.body.user;
        var password = req.body.password;
        var sql = "select * from user where name = '" + name + "'";
        db.query(sql, function(err, rows, fields) {
            if (err) {
                return console.error(err);
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
                        req.session.name = rows[0].name;
                        res.send({
                            code: 200,
                            status: 'success',
                            message: '登录成功！',
                            data: {
                                sessionID: req.sessionID,
                                name: rows[0].name,
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
    }
};

module.exports = login;