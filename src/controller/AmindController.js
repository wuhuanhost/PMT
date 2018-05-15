const cb = require('../biz/ClassifyBiz')


exports.add = function(req, res) {
    var name = req.body.name
    var remark = req.body.remark;
    cb.add(name, remark, function(err, result) {
        if (err) {
            res.json({ success: false, msg: "服务器错误，稍后重试！" });
        } else {
            res.json({
                data: "",
                msg: "分类添加成功",
                success: true
            });
        }
    });
}


exports.queryAllClassify = function(req, res) {
    cb.queryAllClassify(function(err, result) {
        if (err) {
            res.json({ success: false, msg: "服务器错误，稍后重试！" });
        } else {
            res.json({
                data: result,
                msg: "分类数据获取成功",
                success: true
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
            res.json({ success: false, msg: "服务器错误，稍后重试！" });
        } else {
            res.json({
                data: "",
                msg: "分类修改成功",
                success: true
            });
        }
    })
}