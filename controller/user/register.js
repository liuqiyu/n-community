var db = require('./../../common/dbCommon');
/**
 * 注册接口
 * @param req
 * @param res
 */

var register = function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var sql = "select * from user where username = '" + username + "'";
    db.query(sql, function(err, rows, fields) {
        if (err) {
            return console.error(err);
        }
        if (rows.length > 0) {
            res.send({
                code: 500,
                status: 'success',
                message: '用户名已存在！',
            });
        } else {
            var sql = "insert into user (username, password) values ('" + username + "', '" + password + "')";
            db.query(sql, function(err, rows, fields) {
                if (err) {
                    return console.error(err);
                }
                if (rows.length > 0) {
                    res.send({
                        code: 500,
                        status: 'success',
                        message: '用户名已存在！',
                    });
                } else {
                    res.send({
                        code: 200,
                        status: 'success',
                        message: '注册成功！',
                        data: rows,
                    });
                }
            });
        }
    });
};

module.exports = register;