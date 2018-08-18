var db = require('./../../common/dbCommon');
/**
 * 注册接口
 * @param req
 * @param res
 */

var register = function(req, res) {
    if (req.method === 'GET') {
        res.render('register', { title: 'Express' });
    } else if(req.method === 'POST') {
        var name = req.body.user;
        var password = req.body.password;
        var sql = "select * from user where name = '" + name + "'";
        console.log(sql);
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
                var sql = "insert into user (name, password) values ('" + name + "', '" + password + "')";
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
    }
};

module.exports = register;