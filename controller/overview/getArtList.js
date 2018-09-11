var db = require('./../../common/dbCommon');

var getArtList = function(req, res) {
    var sess = req.session;
    const count = req.query.count;
    const start = (req.query.page - 1) * count;

    let sql1 = '';

    if (req.query.class_id) {
        sql1 += " where class_id = '" + req.query.class_id +"'";
    }

    if (req.query.tag_id) {
        sql1 += " and tag_id = '" + req.query.tag_id +"'";
    }

    if (req.query.list_status !== '1') {
        sql1 += " and user_id = '" + sess.user.id +"'";
    }


    var sql = "select list.art_id, list.art_name, list.art_text, list.class_id, class.name class_name, list.tag_id, tag.name tag_name, user.username username, user.id user_id, list.create_date, list.update_date " +
        "from article as list join art_class as class on class.id = list.class_id join art_tag as tag on tag.id = list.tag_id join user as user on user.id = list.user_id" + sql1 + " ORDER BY update_date desc";
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

module.exports = getArtList;