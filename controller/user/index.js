var db = require('./../../common/dbCommon');

var index = function(req, res, next) {
    var sess = req.session;
    var name = sess.name;

    var sql = 'select * from user';
    db.query(sql, function(err, rows, fields) {
        if (err) {
            return res.send({
                code: 500,
                status: 'error',
                message: '登录失败！！',
                data: err,
            });
        }

        console.log(rows[0]);
        res.render('index', {
            title: '首页',
            name: name || '',
            data: rows,
        });
    });
};

module.exports = index;