var moment = require('moment');
moment().format();
var db = require('./../../common/dbCommon');

var createArticle = function(req, res) {
    var art_name = req.body.art_name;
    var class_id = req.body.class_id;
    var tag_id = req.body.tag_id;
    var art_text = req.body.art_text;
    var create_date = moment().unix();
    var update_date = moment().unix();
    var user_id = req.session.user.id;
    var sql = "insert into article (art_name, class_id, tag_id, art_text, create_date, update_date, user_id) " +
        "values" +
        " ('" + art_name + "', '" + class_id + "', '" + tag_id + "', '" + art_text + "', '" + create_date + "', '" + update_date + "', '" + user_id + "')";
    db.query(sql, function(err, rows, fields) {
        if (err) {
            return console.error(err);
        }
        res.send({
            code: 200,
            status: 'success',
            message: '操作成功！',
        });
    });
};

module.exports = createArticle;