var db = require('./../../common/dbCommon');

var getTag = function(req, res) {
    var sql = "select * from art_tag";
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

module.exports = getTag;