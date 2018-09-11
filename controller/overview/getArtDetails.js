var db = require('./../../common/dbCommon');

var getClass = function(req, res) {
    var sql = "select * from article where art_id = " + req.query.art_id;
    db.query(sql, function(err, rows, fields) {
        if (err) {
            return res.send({
                code: 500,
                status: 'error',
                message: '操作失败！',
                data: err,
            });
        }
        return res.send({
            code: 200,
            status: 'success',
            data: rows,
        });
    });
};

module.exports = getClass;