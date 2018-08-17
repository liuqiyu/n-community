var logout = function(req, res) {
    req.session.destroy(function(error) {
        if(error){
            return res.send({
                code: 500,
                status: 'error',
                message: '注销失败！！',
            });
        }
        res.clearCookie(identityKey);
        res.send({
            code: 200,
            status: 'success',
            message: '已注销！',
        });
    });
};

module.exports = logout;