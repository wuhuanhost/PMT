var checkAdminLogin = function(req, res, next) {
    next();
}



var checkApiLogin = function(req, res, next) {
    if (req.session.account !== undefined && req.session.uid !== undefined && req.session.token !== undefined) {
        next();
    } else {
        res.json({ success: false, msg: "登录状态失效，请重新登录！" });
    }
}

module.exports = {
    checkAdminLogin: checkAdminLogin,
    checkApiLogin: checkApiLogin
}