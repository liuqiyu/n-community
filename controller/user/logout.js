var identityKey = 'session_id';

var logout = function(req, res, next) {
    // 备注：这里用的 session-file-store 在destroy 方法里，并没有销毁cookie
    // 所以客户端的 cookie 还是存在，导致的问题 --> 退出登陆后，服务端检测到cookie
    // 然后去查找对应的 session 文件，报错
    // session-file-store 本身的bug

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