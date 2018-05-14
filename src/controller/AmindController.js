const cb = require('../biz/ClassifyBiz')


exports.add = function(req, res) {
    var name = req.body.name
    var remark = req.body.remark;
    cb.add(name, remark, function(err, result) {
        if (err) {
            res.json({ "err": true, "msg": "服务器错误，稍后重试！" });
        } else {
            res.json({
                "data": "",
                "msg": "添加成功"
            });
        }
    });
}


exports.queryAllClassify = function(req, res) {
    cb.queryAllClassify(function(err, result) {
        if (err) {
            res.json({ "err": true, "msg": "服务器错误，稍后重试！" });
        } else {
            res.json({
                "data": result,
                "msg": "数据获取成功"
            });
        }
    })
}



exports.updateClassifyById = function(req, res) {
    var cla = {
        id: req.body.id,
        name: req.body.name,
        remark: req.body.remark,
        state: req.body.state
    }
    cb.updateClassifyById(cla, function(err, result) {
        if (err) {
            res.json({ "err": true, "msg": "服务器错误，稍后重试！" });
        } else {
            res.json({
                "data": "",
                "msg": "修改成功"
            });
        }
    })
}